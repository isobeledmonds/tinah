import { google } from 'googleapis';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

// Log the environment variables for debugging
console.log('CLIENT_ID:', CLIENT_ID);
console.log('CLIENT_SECRET:', CLIENT_SECRET);
console.log('REDIRECT_URI:', REDIRECT_URI);
console.log('REFRESH_TOKEN:', REFRESH_TOKEN);

// Validate the REDIRECT_URI
try {
  console.log('Attempting to validate REDIRECT_URI...');
  const redirectUrl = new URL(REDIRECT_URI);
  console.log('Valid REDIRECT_URI:', redirectUrl.toString());
} catch (error) {
  console.error('Invalid REDIRECT_URI:', REDIRECT_URI);
  console.error('URL validation error:', error);
  throw error;
}

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

    // Specific error handling for invalid refresh token
    if (error.message.includes('invalid_grant')) {
      console.error('The refresh token is invalid or expired.');
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error refreshing token: ' + error.message }),
    };
  }
}
