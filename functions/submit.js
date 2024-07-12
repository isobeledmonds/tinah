const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const TOKEN_PATH = '/tmp/token.json'; // Use /tmp directory for writable access
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SPREADSHEET_ID } = process.env;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

function initializeToken() {
    const token = {
        access_token: process.env.ACCESS_TOKEN,
        refresh_token: process.env.REFRESH_TOKEN,
        scope: SCOPES.join(' '),
        token_type: 'Bearer',
        expiry_date: Date.now() + 3600 * 1000 // 1 hour
    };
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
    oAuth2Client.setCredentials(token);
}

if (fs.existsSync(TOKEN_PATH)) {
    try {
        const token = fs.readFileSync(TOKEN_PATH);
        oAuth2Client.setCredentials(JSON.parse(token));
    } catch (error) {
        console.error('Error reading token file:', error.message);
        initializeToken();
    }
} else {
    console.log('Token file not found, creating from environment variables.');
    initializeToken();
}

async function appendToSheet(resultsList) {
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Results!A2:Z',
            valueInputOption: 'RAW',
            resource: {
                values: [
                    [resultsList.email, JSON.stringify(resultsList.results), resultsList.finalResult]
                ]
            },
        });
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