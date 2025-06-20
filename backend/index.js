import express from "express"
import twilio from "twilio"

const app = express();
app.use(express.json());

const accountSid = "YOUR_TWILIO_ACCOUNT_SID";
const authToken = "YOUR_TWILIO_AUTH_TOKEN";
const twilioClient = twilio(accountSid, authToken);

app.post("/api/send-sms", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const smsBody = `New Contact Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    await twilioClient.messages.create({
      body: smsBody,
      from: "YOUR_TWILIO_PHONE_NUMBER",
      to: "YOUR_PERSONAL_PHONE_NUMBER",
    });

    res.status(200).json({ message: "SMS sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error sending SMS" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
