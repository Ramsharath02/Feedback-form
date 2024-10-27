
# Feedback Form 

This application is a feedback form that allows users to submit feedback. The feedback is then sent via email and saved to a Google Sheets document. It uses **Node.js** with **Express** for the backend server, **Nodemailer** for email notifications, and **Axios** to save data to Google Sheets. Data is transferred to Google Sheets using a **Google Apps Script** URL.

## Setup Instructions

### 1. Install Dependencies

Make sure **Node.js** is installed. Then, install the required npm packages:

```bash
npm install express nodemailer body-parser axios
```

### 2. Configure the Backend Server

The `server.js` file (or your main server file) creates an Express server with a `POST` endpoint at `/submit-feedback`. Here’s a breakdown:

- **Dependencies**: The code imports `express`, `nodemailer`, `body-parser`, and `axios`.
- **Environment Variables**: The app listens on port 3000, but you can set a custom port in a `.env` file if desired.
- **Nodemailer Transporter**: Configures Nodemailer to use Gmail for sending emails. Make sure to replace the `user` and `pass` fields with your Gmail email address and an **App Password** from Gmail.
- **POST Endpoint (`/submit-feedback`)**:
    - Parses incoming JSON data to get `name`, `email`, and `feedback` from the request.
    - Uses **Nodemailer** to send an email containing this data.
    - Uses **Axios** to post the feedback data to Google Sheets via a Google Apps Script web app URL.

### 3. Running the Server

To start the server, run:

```bash
node server.js
```

> Replace `server.js` with the filename where your server code is saved. By default, the server will listen on port 3000.

