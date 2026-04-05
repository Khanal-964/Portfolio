import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to contact me for any inquiries</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <FaPhone className="contact-icon" />
              <h3>Phone</h3>
              <p className="info-value info-value-phone">+91 7460061162</p>
            </div>

            <div className="info-card">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p className="info-value info-value-email">khanalb964@gmail.com</p>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Location</h3>
              <p>Kohalpur-3, Banke, Nepal</p>
            </div>
          </div>

          <form className="contact-form" action="https://formspree.io/f/mgvkvzzd" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Message Subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31143.939665741607!2d77.4343282!3d12.6484989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae5ba739694f47%3A0x424bdd92f039db75!2sJAIN%20(Deemed-to-be-University)%2C%20Faculty%20of%20Engineering%20and%20Technology%20(FET)!5e0!3m2!1sen!2sin!4v1745678925256!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
}
