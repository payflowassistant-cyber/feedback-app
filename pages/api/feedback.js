import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create transporter using Gmail (example)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS  // Gmail App Password
      }
    });

    try {
      await transporter.sendMail({
        from: `"Feedback App" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECEIVER, // your receiving email
        subject: `New Feedback from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      });

      res.status(200).json({ message: 'Feedback sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending feedback' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
