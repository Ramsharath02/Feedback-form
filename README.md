# Feedback Form Application

This feedback form allows users to submit feedback, which is then sent via email and saved to a Google Sheets document. The application uses Node.js with Express for the backend server, Nodemailer for email notifications, and Axios to save data to Google Sheets via a Google Apps Script URL.

## Setup Instructions

### 1. Install Dependencies

Ensure you have Node.js installed. Then install the required npm packages:

```bash
npm install express nodemailer body-parser axios
```

### 2. Configure the Backend Server

The `index.js` file (or the main server file) creates an Express server with a POST endpoint at `/submit-feedback`:

- **Dependencies**: The code imports `express`, `nodemailer`, `body-parser`, and `axios`.
- **Environment Variables**: The server listens on `PORT` 3000 by default, but you can set this in a `.env` file.
- **Nodemailer Transporter**: Configures Nodemailer to use Gmail for sending emails. Be sure to replace the `user` and `pass` fields with your Gmail credentials and an App Password.
- **POST Endpoint**: Defines `/submit-feedback` to handle feedback submissions:
    - Parses incoming JSON data to retrieve `name`, `email`, and `feedback` from the request body.
    - Uses Nodemailer to send an email containing this data.
    - Uses Axios to post the data to Google Sheets through a Google Apps Script web app URL.

### 3. Running the Server

To start the server, run the following command:

```bash
node index.js
```

The server will listen on port 3000 by default, but this can be customized in the `.env` file if needed.
