require('dotenv').config();
const { google } = require('googleapis');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:4000'; // Change if different
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

app.post('/submit', async (req, res) => {
    console.log("Request received with body:", req.body); // Log the entire request body

    const { resultsList, finalResult } = req.body;

    console.log("Received resultsList:", resultsList);
    console.log("Received finalResult:", finalResult);

    if (!resultsList || typeof resultsList !== 'object' || !finalResult || typeof finalResult !== 'object') {
        res.status(400).send('Invalid request: resultsList or finalResult is missing or invalid');
        return;
    }

    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = 'Results!A2:C100'; // Adjust range as necessary

    const values = Object.entries(resultsList).map(([email, results]) => [email, results.join(', ')]);
    if (Object.keys(finalResult).length > 0) {
        values.push(['Final Result', JSON.stringify(finalResult)]);
    }

    console.log("Appending values to spreadsheet:", values);

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
        res.status(500).send('Error submitting data: ' + error.message);
    }
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
