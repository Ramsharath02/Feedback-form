const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure the transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services
    auth: {
        user: 'chmailsender@gmail.com',
        pass: 'ccav rewi tnro qyqn'
    }
});

// Endpoint for handling feedback form submission
app.post('/submit-feedback', (req, res) => {
    const { name, email, feedback } = req.body;

    // Define the email options
    const mailOptions = {
        from: 'chmailsender@gmail.com',
        to: 'ramsharath03@gmail.com',
        subject: 'New Feedback Received',
        text: `Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }

        // Post data to Google Sheets
        const googleScriptURL = 'https://script.google.com/macros/s/AKfycbywtqBtgboXcZGn04mXwSRMwyWJsqIdKy5TKIaROO2UmEQwT2MHJfeSsObPcfrEboDg7Q/exec';

        axios.post(googleScriptURL, { name, email, feedback })
            .then(response => {
                res.status(200).send('Feedback submitted successfully and saved to Google Sheets!');
            })
            .catch(error => {
                res.status(500).send('Feedback submitted but failed to save to Google Sheets.');
            });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
