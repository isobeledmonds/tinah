const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const TOKEN_PATH = '/tmp/token.json';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SPREADSHEET_ID, REFRESH_TOKEN } = process.env;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

async function initializeToken() {
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    try {
        const { credentials } = await oAuth2Client.getAccessToken();
        oAuth2Client.setCredentials(credentials);
        await fs.promises.writeFile(TOKEN_PATH, JSON.stringify(credentials));
        console.log('Initialized token from environment variables');
        console.log('Access Token:', credentials.access_token);
        console.log('Refresh Token:', credentials.refresh_token);
    } catch (error) {
        console.error('Error obtaining access token:', error.message);
        throw error;
    }
}

async function loadToken() {
    if (fs.existsSync(TOKEN_PATH)) {
        try {
            const token = fs.readFileSync(TOKEN_PATH);
            oAuth2Client.setCredentials(JSON.parse(token));
            console.log('Loaded token from file');
        } catch (error) {
            console.error('Error reading token file:', error.message);
            await initializeToken();
        }
    } else {
        console.log('Token file not found, creating from environment variables.');
        await initializeToken();
    }
}

oAuth2Client.on('tokens', async (tokens) => {
    if (tokens.refresh_token) {
        console.log('Saving new refresh token');
        await fs.promises.writeFile(TOKEN_PATH, JSON.stringify(tokens));
    }
});

async function appendToSheet(resultsList) {
    await loadToken();  // Ensure the token is loaded before making the request
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
    try {
        console.log('Appending to Google Sheets:', resultsList);
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Results!A2',
            valueInputOption: 'RAW',
            resource: {
                values: [
                    [resultsList.email, JSON.stringify(resultsList.results), resultsList.finalResult]
                ]
            },
        });
        console.log('Response from Google Sheets:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error appending to Google Sheets:', error.message);
        console.error('Error details:', error);
        console.error('Error stack:', error.stack);
        if (error.response) {
            console.error('Error response data:', error.response.data);
        }
        throw error;
    }
}

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    const { resultsList } = JSON.parse(event.body);

    try {
        console.log('Received data for submission:', resultsList);
        const data = await appendToSheet(resultsList);
        return {
            statusCode: 200,
            body: JSON.stringify({ status: 'success', data }),
        };
    } catch (error) {
        console.error('Error writing to Google Sheets:', error.message);
        console.error('Error details:', error);
        console.error('Error stack:', error.stack);
        return {
            statusCode: 500,
            body: `Error writing to Google Sheets: ${error.message}`,
        };
    }
};