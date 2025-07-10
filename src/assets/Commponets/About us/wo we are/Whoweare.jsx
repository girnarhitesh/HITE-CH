import React from 'react'
import "./Whoweare.css"
import Hero from '../../AllHomepages/Hero/Hero'
import { motion } from 'framer-motion';
import { Row, Col } from 'antd';

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

            <section>
                
            </section>
        </>
    )
}

export default Whoweare
