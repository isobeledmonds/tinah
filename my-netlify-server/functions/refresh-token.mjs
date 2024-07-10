import { google } from 'googleapis';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

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
  try {
    const { token } = await oauth2Client.getAccessToken();

    if (!token) {
      throw new Error('Failed to obtain access token');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        accessToken: token,
        refreshToken: REFRESH_TOKEN,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error refreshing token: ' + error.message }),
    };
  }
}
