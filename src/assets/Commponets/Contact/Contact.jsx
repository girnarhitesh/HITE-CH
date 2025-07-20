import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>Let’s build something amazing together. Reach out today.</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" placeholder="Your Phone Number" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
