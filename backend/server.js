import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());

// CORS setup
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
}));

// Dynamic port
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// Gmail transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Transporter Error:", error);
  } else {
    console.log("✅ Transporter Ready to send mails");
  }
});

// Send mail route
app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Portfolio Contacts" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL,
      subject: subject || `Portfolio Contact from ${name}`,
      text: message,
      replyTo: email,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("❌ Mail Send Error:", error);
    res.status(500).json({ success: false });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT} >>>`);
});
