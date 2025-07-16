import { useEffect, useRef } from "react";
import "./Hero.css";
import { Row, Col } from "antd";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

const Hero = () => {

    gsap.registerPlugin(SplitText);

    document.fonts.ready.then(() => {
        gsap.set(".container", { opacity: 1 });
        let split = SplitText.create(".animate-me", { type: "words", aria: "hidden" });

        gsap.from(split.words, {
            opacity: 0,
            duration: 2,
            ease: "sine.out",
            stagger: 0.1,
        });
    });

    return (
        <section className="hero-section">
            <Row>
                <Col lg={12} md={16} sm={24}>
                    <div className="Hero-section-img-contant-section">
                        <div className="hero-img-section">
                            <video
                                className="hero-video"
                                src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/WxYFwhO/videoblocks-con1structiontl_uhd_hap0wnqgf__c94b2bb542c6e86f88d666efc09a8db1__P360.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            ></video>
                        </div>

                        <div className="Hero-section-img-contant">
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            >
                                HITE-Ch is a leading construction company based in Ahmedabad.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                Established in 1996, we are ISO 9001:2015 and ISO 45001 certified, with a strong focus on innovation, safety, and timely delivery.
                            </motion.p>
                        </div>
                        <div className="hero-social-icone-container">
                            <div className="Hero-section-icone">
                                <a href="https://www.instagram.com/hitech_pvt_ltd/" target="_blank" rel="noopener noreferrer">
                                    <CiInstagram className="hero-icone" />
                                </a>
                                <a href="https://www.linkedin.com/company/hitechprojects/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn className="hero-icone" />
                                </a>
                                <a href="https://x.com/hitechppl" target="_blank" rel="noopener noreferrer">
                                    <TiSocialTwitter className="hero-icone" />
                                </a>
                                <a href="https://www.facebook.com/hitechpplofficial/" target="_blank" rel="noopener noreferrer">
                                    <TiSocialFacebook className="hero-icone" />
                                </a>
                                <a href="https://www.youtube.com/channel/UCbrjSl-jZB23ZB8HzSNqa8w" target="_blank" rel="noopener noreferrer">
                                    <PiYoutubeLogoThin className="hero-icone" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
                <div className="hero-section-contant">
                    <Col lg={12} md={16} sm={24}>
                        <div className="hero-container">
                            <div className="hero-content">
                                <div className="sectionpadding">
                                    <div className="hero-badge">● WHY CHOOSE US</div>

                                    <h1 className="hero-title">

                                        We are  <span className="hero-title-highlight">Hitech</span>
                                    </h1>

                                    {/* <div className="hero-description">
                                        <p>Since its inception in 1996, Hitech has been a cornerstone in Ahmedabad's construction industry. With certifications like ISO 9001:2015 and ISO 45001, we set the bar high for quality and safety. Our portfolio is diverse, covering industrial constructions, residential developments, commercial properties and institutional buildings.</p>
                                        <br />
                                        <p>We are honored to be classified as a 'AA' special category - I (Buildings) contractor by the Government of Gujarat. Our mission is to create enduring partnerships and transformative projects that stand as testaments to our commitment to excellence. We believe in not just building structures, but also in building relationships and communities.</p>
                                    </div> */}

                                    <div className="hero-buttons">
                                        <a href="#" className="btn-primary">Our Projects</a>
                                        <a href="#" className="btn-secondary">Get in Touch</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={16} sm={24}>
                        <div className="hero-visual">
                            <div className="hero-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1585211964888-c2a4277a9f6d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQwfHxjb25zdHJ1Y3Rpb24lMjBpbWd8ZW58MHx8MHx8fDA%3D"
                                    alt="Team Celebration"
                                    className="hero-image"
                                />
                            </div>
                        </div>
                    </Col>
                </div>
            </Row>
        </section>
    )
}

export default Hero