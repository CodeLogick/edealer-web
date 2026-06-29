import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed', success: false });
  }

  const { name, email, phone, message } = req.body;

  // Validate input
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'Missing required fields', success: false });
  }

  try {
    // Here you would typically send an email
    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, phone, message });

    // You can integrate with services like SendGrid, Mailgun, or nodemailer
    // Example with nodemailer (you'd need to configure SMTP):
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'contact@edealer.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `${message}\n\nPhone: ${phone}`,
    });
    */

    return res.status(200).json({ message: 'Message sent successfully', success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending message', success: false });
  }
}