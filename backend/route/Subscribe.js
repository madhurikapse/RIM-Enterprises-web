import express from "express";
const router = express.Router();

router.post('/subscribe', (req, res) => {
  const { name, email } = req.body;
  console.log("🟢 Request Body:", req.body);

  if (!name || !email) {
    console.warn("⚠️ Missing name or email");
    return res.status(400).json({ success: false, message: "Name and email are required." });
  }

  // Optionally save to DB
  // await Subscriber.create({ name, email });

  return res.status(200).json({ success: true, message: "Enquiry received successfully!" });
});

export default router;
