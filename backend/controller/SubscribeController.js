import Subscriber from '../models/Subscriber.js';


export const subscribe = async (req, res) => {
  const { firstName, email } = req.body;

  if (!firstName || !email) {
    return res.status(400).json({ success: false, message: 'Name and Email are required' });
  }

  try {
    const normalizedEmail = email.toLowerCase();

    // 🔐 Check if email already exists (case-insensitive)
    const existing = await Subscriber.findOne({ email: normalizedEmail });
    if (existing) {
      return res.status(409).json({ success: false, message: 'This email has already subscribed.' });
    }

    // ✅ Save to DB
    const newSubscriber = new Subscriber({ firstName, email: normalizedEmail });
    await newSubscriber.save();

    // ✅ Send email
    const mailOptions = {
      from: `"Rim Enterprises" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Enquiry from Website',
      html: `<h2>New Client Enquiry</h2>
             <p><strong>Name:</strong> ${firstName}</p>
             <p><strong>Email:</strong> ${normalizedEmail}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Subscribed and email sent!' });

  } catch (err) {
    console.error('Email Error:', err);
    return res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
};
