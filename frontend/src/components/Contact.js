import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await emailjs.send(
        "service_xom7687", // ✅ Your EmailJS Service ID
        "template_yaen0ez", // ✅ Your EmailJS Template ID (Replace it)
        {
          user_name: formData.name, 
          user_email: formData.email, 
          user_message: formData.message, 
        },
        "gYxuPHeXwRBpEJCqx" // ✅ Your EmailJS Public Key
      );

      console.log("✅ Email sent successfully:", response);
      setSuccessMessage("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      setErrorMessage("❌ Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact RIM Enterprises</h1>
      <p>Have questions or need assistance? Reach out to us!</p>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
