
import dotenv from "dotenv";
dotenv.config();
import express from "express";

import cors from "cors";

import transporter from "./src/component/nodemailer.js";


const app = express();
const corsOptions = {
    origin:   "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions));
app.use(express.json());

// app.post("/send-sms", async (req, res) => {
//   const { phone, message } = req.body;
//   console.log(phone, message);
//   console.log(client);
//   try {
//     await client.messages.create({
//       body: message,
//       from: process.env.TWILIO_PHONE,
//       to: phone, // +91XXXXXXXXXX
//     });

//     res.json({ success: true, message: "SMS sent" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// POST endpoint to send email
app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;
  console.log(to, subject, text);
  try {
 
    console.log(transporter);
    await transporter.sendMail({
      from: 'Resume Service<' + process.env.EMAIL_USER + '>',
      to: to,
      subject: subject,
      text: text,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});




app.listen(5000, () => console.log("Server running on port 5000"));

