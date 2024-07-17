const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') }); 

const TOKEN_PATH = '/tmp/token.json'; // Use /tmp directory for writable access
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, ACCESS_TOKEN, REFRESH_TOKEN } = process.env;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

function initializeToken() {
    const token = {
        access_token: ACCESS_TOKEN,
        refresh_token: REFRESH_TOKEN,
        scope: SCOPES.join(' '),
        token_type: 'Bearer',
        expiry_date: Date.now() + 3600 * 1000 // 1 hour
    };
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
    oAuth2Client.setCredentials(token);
    console.log('Initialized token from environment variables');
}

if (fs.existsSync(TOKEN_PATH)) {
    try {
        const token = fs.readFileSync(TOKEN_PATH);
        oAuth2Client.setCredentials(JSON.parse(token));
        console.log('Loaded token from file');
    } catch (error) {
        console.error('Error reading token file:', error.message);
        initializeToken();
    }
} else {
    console.log('Token file not found, creating from environment variables.');
    initializeToken();
}

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        const token = oAuth2Client.credentials;
        if (!token.refresh_token) {
            throw new Error('No refresh token available');
        }

        const newToken = await oAuth2Client.refreshAccessToken();
        const newAccessToken = newToken.credentials.access_token;

        // Save the new token
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(oAuth2Client.credentials));

        return {
            statusCode: 200,
            body: JSON.stringify({
                accessToken: newAccessToken,
                refreshToken: token.refresh_token
            }),
        };
    } catch (error) {
        console.error('Error refreshing token:', error.message);
        console.error('Error details:', error);
        console.error('Error stack:', error.stack);
        return {
            statusCode: 500,
            body: `Error refreshing token: ${error.message}`,
        };
    }
};