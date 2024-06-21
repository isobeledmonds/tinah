import { google } from 'googleapis';
import open from 'open';
import readline from 'readline';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getAccessToken = () => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('Authorize this app by visiting this url:', authUrl);
  open(authUrl);

  rl.question('Enter the code from that page here: ', async (code) => {
    try {
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
      console.log('Access Token:', tokens.access_token);
      console.log('Refresh Token:', tokens.refresh_token);
      // Save the tokens securely (e.g., in environment variables or a secure database)
    } catch (error) {
      console.error('Error retrieving access token', error);
    } finally {
      rl.close();
    }
  });
};

getAccessToken();
