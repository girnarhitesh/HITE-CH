import React, { useState } from 'react';
import "./Contact.css"
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
        alert('Thank you for your message! We\'ll get back to you soon.');
    };

    return (
        <div className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2>Contact Us</h2>
                </div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon"><IoLocationOutline /></div>
                            <a
                                href="https://www.google.com/maps?q=Hitech+Projects+Limited,+West+Gate+Business+Bay,+Ahmedabad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                <address className='address-contant'>
                                    Hitech Projects Limited.<br />
                                    A-1401, Block-A,<br />
                                    West Gate Business Bay,<br />
                                    Besides Signature - 1, S.G. Highway,<br />
                                    Makarba, Ahmedabad - 380051.<br />
                                    Gujarat, India,
                                </address>
                            </a>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <h4>Phone</h4>
                            <Link to=""><p>+1 (555) 123-4567</p></Link>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">✉️</div>
                            <h4>Email</h4>
                            <Link to="/">
                                <p>info@hitechprojects.co.in</p>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-col">
                                    <div className="form-group">
                                        <label htmlFor="name">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your full name"
                                        />
                                    </div>
                                </div>
                                <div className="form-col">
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-col">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                </div>
                                {/* <div className="form-col">
                                    <div className="form-group">
                                        <label htmlFor="company">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your company name"
                                        />
                                    </div>
                                </div> */}
                            </div>

                            {/* <div className="form-row">
                                <div className="form-col full-width">
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="What's this about?"
                                        />
                                    </div>
                                </div>
                            </div> */}

                            <div className="form-row">
                                <div className="form-col full-width">
                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            placeholder="message"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-col full-width">
                                    <button type="submit" className="submit-btn">
                                        <span>Send Message</span>
                                        <span className="btn-arrow">→</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Contact;