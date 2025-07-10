import React from 'react';
import { TrendingUp, Database, BarChart3, Shield } from 'lucide-react';
import { FaHandHoldingHeart } from "react-icons/fa";
import Slider from 'react-slick';
import { Row, Col } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ourvalue.css";

const CoreValues = () => {
    const values = [
        {
            id: 1,
            icon: <TrendingUp className="w-8 h-8" />,
            title: "CONTINUAL IMPROVEMENT",
            description: "We focus on optimizing every process in our company by focusing on those activities that generate the most value for our clients and stakeholders, while removing as many redundancies as possible. We continuously strive to improve our construction technology, our equipment, our standards of excellence and our process methodologies."
        },
        {
            id: 2,
            icon: <Database className="w-8 h-8" />,
            title: "SYSTEMIC APPROACH",
            description: "All our actions are well planned, SOPs are defined, all business processes are streamlined, having integrated systems in place for all activities for smooth co-ordination between projects and functions. We incorporate proven practices, software supported systems and technology in all our functional processes."
        },
        {
            id: 3,
            icon: <FaHandHoldingHeart className="w-8 h-8" />,
            title: "CARING",
            description: "We feel genuine concern, kindness for others and express ourselves through caring actions. Even if we have to take tough decisions they are carried out in a manner that demonstrates our care and respect for the other person."
        },
        {
            id: 4,
            icon: <BarChart3 className="w-8 h-8" />,
            title: "ACCOUNTABILITY",
            description: "Each and every one of us is willing to accept and own our individual responsibilities and account for our actions. At the same time we ensure that collectively as a team, we hold each and every member of the team responsible for their actions towards achievement of common goals."
        },
        {
            id: 5,
            icon: <Shield className="w-8 h-8" />,
            title: "TRUST",
            description: "We deliver what we have committed to our clients as per timelines and as per agreed quality and safety standards. Trust means we accept people for who they are and trust them to perform their role as required."
        }
    ];

    const sliderSettings = {
        dots: false,             // ✅ No dots
        arrows: false,           // ✅ No arrows
        infinite: true,
        speed: 800,              // ✅ Smooth transition
        slidesToShow: 3,         // ✅ One slide at a time
        slidesToScroll: 1,
        autoplay: true,          // ✅ Auto slide
        autoplaySpeed: 3500,     // ✅ Speed for autoplay
        pauseOnHover: false,
        cssEase: 'ease-in-out',  // ✅ Smooth easing
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="core-values-container">
            <div className="sectionpadding">
                <Row>
                    <Col >
                        <div className="floating-shapes">
                            <div className="floating-shape"></div>
                            <div className="floating-shape"></div>
                            <div className="floating-shape"></div>
                        </div>

                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h1 className="main-title">Our Core Values</h1>
                            <p className="main-description">
                                Our core values define who we are and what we stand for as a company. Value-driven companies achieve better brand and business performance. Our core values form an integral part of our work culture, giving our clients a unique experience of trust. We have built our company around following 5 core values.
                            </p>
                        </div>

                        <Slider {...sliderSettings}>
                            {values.map((value, index) => (
                                <div key={value.id} className="value-card-slide">
                                    <div
                                        className={`value-card-ourvalue ${index === 2 ? 'caring-card' : ''}`}
                                        tabIndex={0}
                                        role="article"
                                        aria-labelledby={`value-title-${value.id}`}
                                    >
                                        <div className="value-icon-wrapper">
                                            <div className="value-icon">{value.icon}</div>
                                        </div>
                                        <h3 id={`value-title-${value.id}`} className="value-title">{value.title}</h3>
                                        <p className="value-description">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default CoreValues;
