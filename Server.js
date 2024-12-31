// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Multer setup for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// Create a Nodemailer transport
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Outlook, SendGrid, etc.
  auth: {
    user: "groupartihcus@gmail.com", // Your email address
    pass: "sgam fzkj myvd ycxv", // Your email password or an app-specific password
  },
});

// POST route to send email
app.post("/send-email", upload.single("resume"), (req, res) => {
  const { name, email, phone } = req.body;
  const resume = req.file; // Access the uploaded file

  if (!name || !email || !phone || !resume) {
    return res.status(400).send("All fields are required.");
  }

  const mailOptions = {
    from: "groupartihcus@gmail.com", // Your email address
    to: "harshav123.mru@gmail.com", // Recipient email address
    subject: "New Application for Artihcus Global",
    text: `
      New application details:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
    `,
    attachments: [
      {
        filename: resume.originalname, // Original file name
        content: resume.buffer, // File content
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email: " + error.message);
    }
    res.status(200).send("Email sent successfully: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});