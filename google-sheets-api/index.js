const express = require('express');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const TOKEN_PATH = 'token.json';

const app = express();
const port = process.env.PORT || 3000;

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Load token from disk if it exists
if (fs.existsSync(TOKEN_PATH)) {
    const token = fs.readFileSync(TOKEN_PATH);
    oAuth2Client.setCredentials(JSON.parse(token));
} else {
    getNewToken(oAuth2Client);
}

function getNewToken(oAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    // Once you have the code, use it to get the token and save it to the token.json file
    // After you visit the authUrl, you'll receive a code. Replace 'YOUR_AUTH_CODE' with the received code.
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
            console.log('Token stored to', TOKEN_PATH);
        });
    });
}

// Middleware to refresh token
oAuth2Client.on('tokens', (tokens) => {
    if (tokens.refresh_token) {
        // Store the refresh_token in the token.json file
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
        console.log('Token refreshed and saved');
    }
});

app.get('/', (req, res) => {
    res.send('Google Sheets API with OAuth2');
});

// Add routes for your API
app.get('/sheets', async (req, res) => {
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: 'your-spreadsheet-id',
            range: 'Sheet1!A1:E',
        });
        res.json(response.data);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});