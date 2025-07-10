import React from 'react'
import "./Whoweare.css"
import Hero from '../../AllHomepages/Hero/Hero'
import { motion } from 'framer-motion';
import { Row, Col } from 'antd';
import { Eye, Rocket } from 'lucide-react';

function Whoweare() {

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
        </>
    )
}

export default Whoweare;
