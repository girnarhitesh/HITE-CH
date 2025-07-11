import React, { useState, useEffect } from 'react';
import "./Whoweare.css"
import Hero from '../../AllHomepages/Hero/Hero'
import { motion } from 'framer-motion';
import { Row, Col } from 'antd';
import Journey from '../Journey/Journey';

function Whoweare() {


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);


    const Achivmentitem = [
        {
            img: "https://www.hitechprojects.co.in/static/media/quality.dc5c470848afab7adc2d.png",
            name: "Years of Experience 25+"
        },
        {
            img: "https://www.hitechprojects.co.in/static/media/team.35ab6a765a497679dce1.png",
            name: "Team Members 500+"
        },
        {
            img: "https://www.hitechprojects.co.in/static/media/workforce.d95bb1c845d559343239.png",
            name: "Workforce 3000+"
        },
        {
            img: "https://www.hitechprojects.co.in/static/media/construction.6c50364ac422d04ef3b3.png",
            name: "Constructed Area 25Mn+ Sqft"
        },
        {
            img: "https://www.hitechprojects.co.in/static/media/completed-task.446611e9d914fdb967c7.png",
            name: "Completed Projects 100+"
        },
        {
            img: "https://www.hitechprojects.co.in/static/media/building.46b533614ccd1a937dcf.png",
            name: "Ongoing Projects 20+"
        },
    ];

    const OurStrengthsitem = [
        {
            title: "Constant Technological Upgradation",
            description: "Hitech has continually invested in upgrading its Construction Technology and Information Technology driven processes."
        },
        {
            title: "Qualified Leadership",
            description: "Hitech’s top management includes highly qualified Civil Engineers who knows not only the business of construction but also the craft of building. This helps them understand the finer nuances of construction and turn clients’ visions into realities."
        },
        {
            title: "Adopting the best",
            description: "Hitech has been quick to adopt best practices in the industry in systems and processes. It has excellent project planningand monitoring systems and well established quality and safety protocols."
        },
        {
            title: "Qualified and Experienced Execution Team",
            description: "Qualified leaders make qualified teams. Hitech has invested in its people and created trained professionals from the smallest to highest levels of the organisation so that good decisions are made at each level."
        },
        {
            title: "Project Specific Approach",
            description: "Even as it grows, Hitech retains some of the best advantages of being flexible. With a project-specific working approach, it is able to adapt to the needs of the clients and respond to emergent needs of the project."
        },

    ]

    return (
        <>

            <Hero />
            <section >
                <div className="sectionpadding">
                    <div className="achievement-header">
                        <h1>Our Achievements</h1>
                    </div>

                    <div className="achievement-grid">
                        {Achivmentitem.map((item, index) => (
                            <motion.div
                                className="achievement-card"
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img src={item.img} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section class="vision-mission-section">
                <div class="section-container">
                    <div class="vision-mission-row">
                        <div class="vision-mission-col">
                            <div class="vision-container">
                                <div class="icon-wrapper vision-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </div>
                                <h2 class="section-title vision-title">Vision</h2>
                                <p class="section-description vision-description">
                                    To be the preferred destination for comprehensive construction solutions.
                                </p>
                            </div>
                        </div>
                        <div class="vision-mission-col">
                            <div class="mission-container">
                                <div class="icon-wrapper mission-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7z"></path>
                                        <path d="M9 12l2 2 4-4"></path>
                                    </svg>
                                </div>
                                <h2 class="section-title mission-title">Mission</h2>
                                <p class="section-description mission-description">
                                    We take pride in delivering reliable construction solutions with agility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <Row> */}
            {/* <Col lg={12} sm={16} md={24}> */}
            <div className="strengths-wrapper">
                <section className="strengths-main-section">
                    <div className="sectionpadding">
                        <div className="Our-Strengths-whoweare-section-container">
                            <div className="our-strengths-heading">
                                <h1 className={`main-title ${isVisible ? 'animate-in' : ''}`}>Our Strengths</h1>
                                <div className="title-decoration"></div>
                            </div>
                            <div className="Our-Strengths-section">
                                {OurStrengthsitem.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`OurStreng-contact ${isVisible ? 'animate-in' : ''}`}
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                        {/* <div className="strength-number">
                                            {String(index + 1).padStart(2, '0')}
                                        </div> */}
                                        <div className="strength-content">
                                            <span className="strength-title">{item.title}</span>
                                            <p className="strength-description">{item.description}</p>
                                        </div>
                                        <div className="strength-overlay"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* </Col> */}
                    {/* </Row>*/}
                </section>
            </div>
            <Journey/>
        </>
    )
}

export default Whoweare;
