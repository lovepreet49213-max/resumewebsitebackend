 
 
 import dotenv from "dotenv";
 dotenv.config();
 
 import nodemailer from "nodemailer";
 
 
 const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP config
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASSWORD, // use App Password if Gmail
      },
    });
export default transporter;
