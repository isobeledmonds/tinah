import { google } from 'googleapis';

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
    const tokenResponse = await oauth2Client.refreshAccessToken();
    const tokens = tokenResponse.credentials;

    return {
      statusCode: 200,
      body: JSON.stringify({
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token || REFRESH_TOKEN,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error refreshing token: ' + error.message }),
    };
  }
}
