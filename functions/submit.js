require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { google } = require('googleapis');

const app = express();
app.use(bodyParser.json());

// Configure CORS
const corsOptions = {
    origin: ['http://localhost:3000', 'https://tinah-quiz.netlify.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Log environment variables to verify they are loaded correctly
console.log('CLIENT_ID:', process.env.CLIENT_ID);
console.log('CLIENT_SECRET:', process.env.CLIENT_SECRET);
console.log('REDIRECT_URI:', process.env.REDIRECT_URI);
console.log('REFRESH_TOKEN:', process.env.REFRESH_TOKEN);

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI; // Change if different
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

app.post('/refresh-token', async (req, res) => {
    try {
        const tokenResponse = await oauth2Client.refreshAccessToken();
        const tokens = tokenResponse.credentials;

        res.json({
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token || REFRESH_TOKEN // Use the new refresh token if provided
        });
    } catch (error) {
        console.error('Error refreshing token:', error);
        res.status(500).send('Error refreshing token: ' + error.message);
    }
});

app.post('/submit', async (req, res) => {
    console.log("Request received with body:", req.body); // Log the entire request body

    const { resultsList } = req.body;

    if (!resultsList || typeof resultsList !== 'object') {
        res.status(400).send('Invalid request: resultsList is missing or invalid');
        return;
    }

    const values = Object.entries(resultsList).map(([email, data]) => {
        const results = data.results.join(', ');
        const finalResult = data.finalResult || '';
        return [email, results, finalResult];
    });

    console.log("Values to be appended to spreadsheet:", values); // Log the values array

    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = 'Results!A2:Z100'; // Adjust range as necessary

    const resource = {
        values,
    };

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'RAW',
            resource,
        });
        res.status(200).send('Data submitted successfully');
    } catch (error) {
        console.error('Error submitting data:', error);
        if (error.response && error.response.data) {
            console.error('Error details:', error.response.data);
        }
        res.status(500).send('Error submitting data: ' + error.message);
    }
});

const PORT = process.env.PORT || 4000; // Default to 4000 if not specified
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
