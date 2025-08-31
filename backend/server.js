import express from 'express' // expressjs
import cors from 'cors' 
import nodemailer from 'nodemailer'  // nodemailer is a library package this is used send a mails from server 

const app = express()
app.use(express.json())
app.use(cors())


// Gmail Transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: "rajubadanakanti7@gmail.com",
    pass: "fateeargglfxpxyq", 
  }
});

//  Verify Transporter >>
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Transporter Error:", error);
  } else {
    console.log("✅ Transporter Ready to send mails");
  }
});

//  POST Route >>
app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body; // user inputs

  try {
    await transporter.sendMail({
      from:`"Portfolio Contacts" <rajubadanakanti7@gmail.com>`,
      to: "rajubadanakanti7@gmail.com",
      subject: subject || `Portfolio Contact from ${name}`,
      text: message,
      replyTo:email,
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
    res.json({ success: false });
  }
});

//  Start Server >> 
app.listen(5000, () =>{
  console.log("Server running on http://localhost:5000 >>>");
  
});
