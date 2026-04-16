import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p className="subtitle">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <div className="info-box">
            <FaEnvelope />
            <p>tewoldet8@gmail.com</p>
          </div>

          <div className="info-box">
            <FaPhoneAlt />
            <p>+251 919 904334</p>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;