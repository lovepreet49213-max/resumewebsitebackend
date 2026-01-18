
import dotenv from "dotenv";
dotenv.config();
import express from "express";

import cors from "cors";

import transporter from "./src/component/nodemailer.js";


const app = express();

app.use(cors({
  origin: "https://www.eaglesonproperty.com",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


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

