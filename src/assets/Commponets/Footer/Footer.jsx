import React from 'react';
import { Row, Col } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'; // For icons
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'; // For social media icons
import './Footer.css'; // Import the CSS file
import Link from 'antd/es/typography/Link';

function Footer() {
    return (
        <footer className="app-footer">
            <div className="section-padding">
                <Row className='Footer-Row'> 
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <div className="footer-section">
                            <h3 className="footer-heading">Quick Links</h3>
                            <ul className="footer-links">
                                <li><a href="/home">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/careers">Careers</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                    </Col>

   
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <div className="footer-section">
                            <h3 className="footer-heading footer-heading-hidden">&nbsp;</h3>
                            <ul className="footer-links">
                                <li><a href="/residential">Residential</a></li>
                                <li><a href="/commercial">Commercial</a></li>
                                <li><a href="/industrial">Industrial</a></li>
                                <li><a href="/institutional-corporate">Institutional & Corporate</a></li>
                            </ul>
                        </div>
                    </Col>


                    <Col xs={24} sm={12} md={6} lg={6}>
                        <div className="footer-section">
                            <h3 className="footer-heading">Address</h3>
                            <p className="footer-address">
                                Hitech Projects Pvt. Ltd. <br />
                                A-1401, Block-A, <br />
                                West Gate Business Bay, <br />
                                Besides Signature - 1, S.G. Highway, <br />
                                Makarba, Ahmedabad - 380051. <br />
                                Gujarat, India
                            </p>
                        </div>
                    </Col>

                    <Col xs={24} sm={12} md={6} lg={6}>
                        <div className="footer-section">
                            <h3 className="footer-heading">Contact Us</h3>
                            <div className="footer-contact-info">
                                <p><PhoneOutlined className="contact-icon" /> +91-9904592200 / +91-9904288000</p>
                                <p><MailOutlined className="contact-icon" /> info@hitechprojects.co.in</p>
                            </div>
                            <div className="footer-social-icons">
                                <a href="https://www.linkedin.com/company/hitechprojects/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                <a href="https://www.facebook.com/hitechpplofficial/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            </div>
                        </div>

                        <div className="footer-section footer-certifications">
                            <h3 className="footer-heading">Certifications</h3>
                            <ul className="footer-cert-list">
                                <li>ISO 9001</li>
                                <li>ISO 45001</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="footer-bottom">
              <p>&copy;2022 <Link to="https://www.outleadsolutions.com/" target='https://www.outleadsolutions.com/'>Outlead solution.</Link> All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;