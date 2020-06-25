import nodemailer from 'nodemailer';
import 'dotenv/config';

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
};

const transporter = nodemailer.createTransport(transport);

export default transporter;
