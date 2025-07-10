import React from 'react';
import { TrendingUp, Database, Heart, BarChart3, Shield } from 'lucide-react';
import "./ourvalue.css"


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
            icon: <Heart className="w-8 h-8" />,
            title: "CARING",
            description: "We feel genuine concern, kindness for others and express ourselves through caring actions. Even if we have to take tough decisions they are carried out in a manner that demonstrates our care and respect for the other person."
        },
        {
            id: 4,
            icon: <BarChart3 className="w-8 h-8" />,
            title: "ACCOUNTABILITY",
            description: "Each and every one of us is willing to accept and own our individual responsibilities and account for our actions. At the same time we ensure that collectively as a team we hold each and every member of the team responsible for their actions towards achievement of common goals."
        },
        {
            id: 5,
            icon: <Shield className="w-8 h-8" />,
            title: "TRUST",
            description: "We deliver what we have committed to our clients as per timelines and as per agreed quality and safety standards. Trust means we accept people for who they are and trust them to perform their role as required."
        }
    ];

    return (
        <>
            <div className="core-values-container">
                <div className="sectionpadding">
                    <div className="floating-shapes">
                        <div className="floating-shape"></div>
                        <div className="floating-shape"></div>
                        <div className="floating-shape"></div>
                    </div>

                    <div >
                        {/* Header Section */}
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h1 className="main-title">
                                Our Core Values
                            </h1>
                            <div >
                                <p className="main-description">
                                    Our core values define who we are and what we stand for as a company. Value-driven companies achieve better brand and business performance. Our core values form an integral part of our work culture, giving our clients a unique experience of trust. We have built our company around following 5 core values.
                                </p>
                            </div>
                        </div>

                        {/* Values Grid */}
                        <div className="values-grid">
                            {values.map((value, index) => (
                                <div
                                    key={value.id}
                                    className={`value-card ${index === 2 ? 'caring-card' : ''}`}
                                    tabIndex={0}
                                    role="article"
                                    aria-labelledby={`value-title-${value.id}`}
                                >
                                    {/* Icon */}
                                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                        <div className="value-icon">
                                            <div style={{ color: '#1e40af' }}>
                                                {value.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 id={`value-title-${value.id}`} className="value-title">
                                        {value.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="value-description">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom decoration */}
                        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                            <div className="decorative-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoreValues;