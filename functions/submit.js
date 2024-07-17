const { google } = require('googleapis');
const fs = require('fs');
require('dotenv').config();

const TOKEN_PATH = '/tmp/token.json';
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SPREADSHEET_ID, REFRESH_TOKEN } = process.env;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

async function loadToken() {
    console.log('Checking if token file exists at:', TOKEN_PATH);
    if (fs.existsSync(TOKEN_PATH)) {
        console.log('Token file found. Reading token file...');
        try {
            const token = fs.readFileSync(TOKEN_PATH, 'utf8');
            if (!token) {
                throw new Error('Token file is empty');
            }
            const parsedToken = JSON.parse(token);
            oAuth2Client.setCredentials(parsedToken);
            console.log('Loaded token from file:', parsedToken);
        } catch (error) {
            console.error('Error reading token file:', error.message);
            throw error;
        }
    } else {
        console.log('Token file not found. Using refresh token to generate new access token.');
        oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
        try {
            const tokenResponse = await oAuth2Client.refreshAccessToken();
            const newAccessToken = tokenResponse.credentials.access_token;

            // Save the new token to TOKEN_PATH
            const token = {
                access_token: newAccessToken,
                refresh_token: REFRESH_TOKEN,
                scope: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'].join(' '),
                token_type: 'Bearer',
                expiry_date: Date.now() + 3600 * 1000 // 1 hour
            };
            oAuth2Client.setCredentials(token);
            fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
            console.log('New access token generated and saved:', token);
        } catch (error) {
            console.error('Error generating new access token:', error.message);
            throw new Error('Token file not found and no valid refresh token to generate a new access token');
        }
    }
}

async function appendToSheet(resultsList) {
    console.log('Loading token...');
    await loadToken();  // Ensure the token is loaded before making the request
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
    try {
        console.log('Appending to Google Sheets with resultsList:', resultsList);

        const values = Object.entries(resultsList).map(([email, data]) => {
            console.log('Processing entry:', email, data);
            const firstName = data.firstName || '';
            const lastName = data.lastName || '';
            const results = Array.isArray(data.results) ? data.results.join(', ') : '';
            const finalResult = data.finalResult || '';
            console.log('Parsed values:', [firstName, lastName, email, results, finalResult]);
            return [firstName, lastName, email, results, finalResult];
        });

        console.log('Final values to be appended:', values);

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A2:E',  // Adjust range as necessary
            valueInputOption: 'RAW',
            resource: { values },
        });
        console.log('Response from Google Sheets:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error appending to Google Sheets:', error.message);
        if (error.response) {
            console.error('Error response data:', error.response.data);
        }
        throw error;
    }
}

exports.handler = async (event) => {
    console.log('Received event:', event);
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    let resultsList;
    try {
        resultsList = JSON.parse(event.body).resultsList;
        if (!resultsList || typeof resultsList !== 'object') {
            throw new Error('Invalid request: resultsList is missing or invalid');
        }
    } catch (error) {
        console.error('Error parsing request body:', error.message);
        return {
            statusCode: 400,
            body: `Invalid request: ${error.message}`,
        };
    }

    try {
        console.log('Processing submission for resultsList:', resultsList);
        const data = await appendToSheet(resultsList);
        return {
            statusCode: 200,
            body: JSON.stringify({ status: 'success', data }),
        };
    } catch (error) {
        console.error('Error writing to Google Sheets:', error.message);
        return {
            statusCode: 500,
            body: `Error writing to Google Sheets: ${error.message}`,
        };
    }
};