const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const TOKEN_PATH = '/tmp/token.json';
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

function initializeToken() {
    const token = {
        refresh_token: REFRESH_TOKEN,
        scope: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'].join(' '),
        token_type: 'Bearer',
        expiry_date: Date.now() + 3600 * 1000 // 1 hour
    };
    oAuth2Client.setCredentials(token);
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
    console.log('Initialized token from environment variables');
}

if (fs.existsSync(TOKEN_PATH)) {
    try {
        const token = fs.readFileSync(TOKEN_PATH, 'utf8');
        oAuth2Client.setCredentials(JSON.parse(token));
        console.log('Loaded token from file:', token);
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
        const tokenResponse = await oAuth2Client.refreshAccessToken();
        const newAccessToken = tokenResponse.credentials.access_token;

        // Save the new token
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(oAuth2Client.credentials));
        console.log('Tokens saved:', oAuth2Client.credentials);

        return {
            statusCode: 200,
            body: JSON.stringify({
                accessToken: newAccessToken,
                refreshToken: oAuth2Client.credentials.refresh_token || REFRESH_TOKEN,
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