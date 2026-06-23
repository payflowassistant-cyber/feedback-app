export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Feedback received:', req.body);
    // Later: send email using Nodemailer or Resend
    res.status(200).json({ message: 'Feedback stored' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
