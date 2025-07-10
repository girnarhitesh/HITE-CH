import React, { useState, useEffect } from 'react';

import "./Managment.css";
import { Row, Col } from 'antd';
import Ourvalue from '../Our value/Ourvalue';

function Managment() {

    const [visibleItems, setVisibleItems] = useState([]);
    const [activeLevel, setActiveLevel] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const itemIndex = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => [...new Set([...prev, itemIndex])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const items = document.querySelectorAll('.hierarchy-item');
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    const teamLevels = [
        { id: 1, label: "TOP MANAGEMENT", color: "#e74c3c", width: "200px" },
        { id: 2, label: "SUPPORTING STAFF", color: "#c0392b", width: "240px" },
        { id: 3, label: "MANAGERS & ABOVE", color: "#8e44ad", width: "280px" },
        { id: 4, label: "ENGINEERS & SUPERVISOR", color: "#3f51b5", width: "320px" },
        { id: 5, label: "MACHINERY STAFF", color: "#1976d2", width: "360px" }
    ];
    return (
        <>
            <Row>
                <Col>
                    <section>
                        <div className="sectionpadding">
                            <div className="Managment-section">
                                <div className="Managment-section-container">
                                    <h1>Core Management</h1>
                                </div>
                                <div className="Managment-section-contant-container">
                                    <div className="Managment-img-container">
                                        <img src="https://www.hitechprojects.co.in/Sources/images/management/team/1.png" alt="" />
                                        <div className="IMg-section-container-contant">
                                            <h1>Munir Shah</h1>
                                            <p>Co-founder</p>
                                            <p>(B.Tech, Civil, CEPT)</p>
                                            <span>With a robust 29+ years of experience in civil construction management and execution, he has harnessed his specialized knowledge and innovative technologies to consistently deliver top-quality projects on time. His commitment to integrity, deep industry knowledge, and ethical business practices have been instrumental in securing the company's outstanding reputation in the construction field. His approach to business, marked by responsiveness, is highly commendable.</span>
                                        </div>
                                    </div>

                                    <div className="Managment-img-container">
                                        <img src="https://www.hitechprojects.co.in/Sources/images/management/team/2.png" alt="" />
                                        <div className="IMg-section-container-contant">
                                            <h1>Tejas Dalal</h1>
                                            <p>Co-founder</p>
                                            <p>(M.S, Civil, USA)</p>
                                            <span>With a technical prowess and high level of professionalism, he boasts over 29 years of experience in civil construction management and execution, including 5 transformative years in the USA. His international exposure to best practices and the latest methodologies fuels his ambition to elevate Hitech as a symbol of professional integrity in India's construction landscape. A strong proponent of technology, he is determined to utilize it to the maximum extent to innovate and advance the construction industry in India</span>
                                        </div>
                                    </div>

                                    <div className="Managment-img-container">
                                        <img src="https://www.hitechprojects.co.in/Sources/images/management/team/3.png" alt="" />
                                        <div className="IMg-section-container-contant">
                                            <h1>Viral Shah</h1>
                                            <p>(General manager)</p>
                                            <span>With over 25 years of extensive experience in the civil construction sector, he has successfully executed a diverse portfolio of residential, commercial and industrial projects. His tenure includes collaborations with reputable companies such as JMC, K Raheja Corp. and Arvind Group. As a key member of Hitech family, he has showcased technical proficiency, an ability to meet deadlines and a commitment to quality. His well-established network has been a boon for the company, aiding in resource enhancement and rapid project mobilization.</span>
                                        </div>
                                    </div>

                                    <div className="Managment-img-container">
                                        <img src="https://www.hitechprojects.co.in/Sources/images/management/team/4.png" alt="" />
                                        <div className="IMg-section-container-contant">
                                            <h1>Jaydip Patel</h1>
                                            <p>(General manager)</p>
                                            <span>With an illustrious career spanning over 23 years, he has specialized in the execution of industrial, institutional, and large-scale high-end residential projects. Each project he has overseen stands as a testament to our company's excellence. A dedicated member of the Hitech team since 2008, his expertise in finishing sets new industry benchmarks. His profound understanding of project planning ensures the timely completion of all undertakings.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>

            <div className="sectionpadding">
                <Row className='Our-team-Row'>
                    <Col lg={12} sm={16} md={24}>
                        <div className="our-team-container-section">
                            <div className="our-team-container">
                                <h1>Our Team</h1>
                                <p>Sharing a common ethos of Service, Detail, Experience, Integrity and Quality with our clients, the Hitech team has been lauded for their collaborative spirit and individual excellence in construction, thought leadership and career advancement. Their role is pivotal to Hitech's current position and ongoing success.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} sm={16} md={24}>
                        <div className="our-tema-img-container">
                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/UpdatedTeamPoster.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
            <Ourvalue/>

        </>
    )
}

export default Managment;
