import { google } from 'googleapis';
import open from 'open';
import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello! Visit /auth to start the authentication process.');
});

app.get('/auth', (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline', // Ensures a refresh token is returned
        scope: SCOPES,
        prompt: 'consent' // Ensures the consent screen is shown every time
    });
    console.log(`Generated auth URL: ${authUrl}`);
    res.redirect(authUrl);
});

app.get('/oauth2callback', async (req, res) => {
    const code = req.query.code;
    console.log('Received query parameters:', req.query);

    if (!code) {
        res.status(400).send('Authorization code not found in the query parameters.');
        return;
    }

    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        console.log('Access Token:', tokens.access_token);
        console.log('Refresh Token:', tokens.refresh_token);
        res.send(`Authorization successful! Refresh Token: ${tokens.refresh_token || 'Not received'}. You can close this window.`);
    } catch (error) {
        console.error('Error retrieving access token:', error.message);
        if (error.response && error.response.data) {
            console.error('Error details:', error.response.data);
        }
        res.status(500).send(`Error retrieving access token: ${error.message}`);
    }
});

const PORT = process.env.PORT || 5000; // Ensure the port number matches the REDIRECT_URI
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}/auth to start the authentication process.`);
});
