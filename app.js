const { google } = require('googleapis');


const CLIENT_ID = "338924662816-3qv52fk51tr3l9r5ijpa06iseaonpibu.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const REFRESH_TOKEN = "1//04OeADOvlMKrHCgYIARAAGAQSNwF-L9Irw2Ge7sPca8087mDz-IboYFU6nPYGIv7xKHwq2g4uzmE5GCQBcyuoJic0N-wJIDLhXOI";

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
);

oauth2Client.setCredentials( {refresh_token: REFRESH_TOKEN} );

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})

async function uploadFile() {
    try {
        const response = await drive.files.create({
            requestBody: {
                name: 'test.jpg',
                mimeType: 'image/jpg'
            },
            media: {
                body: '',
                mimeType: 'image/jpg'
            }
        })
    } catch (err) {
        console.log("Error: ", err);
    }
}