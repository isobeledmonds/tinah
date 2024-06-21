import { google } from 'googleapis';
import readline from 'readline';
import open from 'open';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Log environment variables to verify they are loaded correctly
console.log('CLIENT_ID:', process.env.CLIENT_ID);
console.log('CLIENT_SECRET:', process.env.CLIENT_SECRET);
console.log('REDIRECT_URI:', process.env.REDIRECT_URI);
console.log('REFRESH_TOKEN:', process.env.REFRESH_TOKEN);

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function handler(event, context) {
  console.log('Received event:', event);
  console.log('OAuth2 client credentials:', oauth2Client.credentials);

  try {
    const { token } = await oauth2Client.getAccessToken();

    if (!token) {
      throw new Error('Failed to obtain access token');
    }

    console.log('Obtained new access token:', token);

    return {
      statusCode: 200,
      body: JSON.stringify({
        accessToken: token,
        refreshToken: REFRESH_TOKEN,
      }),
    };
  } catch (error) {
    console.error('Error refreshing token:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error refreshing token: ' + error.message }),
    };
  }
}

// Manual execution for token retrieval
if (import.meta.url === new URL('', import.meta.url).href) {
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
        // Save the tokens securely
      } catch (error) {
        console.error('Error retrieving access token', error);
      } finally {
        rl.close();
      }
    });
  };

  getAccessToken();
}
