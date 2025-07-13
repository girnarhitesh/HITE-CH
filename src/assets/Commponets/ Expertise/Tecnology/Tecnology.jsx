import React from "react";
import "./Tecnology.css";
import { Bell, Calculator, Fingerprint } from 'lucide-react';
import { Row, Col } from "antd";

const Tecnology = () => {
    const features = [
        { icon: "📊", label: "Project Planning & Tracking" },
        { icon: "🚜", label: "Plant & Machinery" },
        { icon: "💰", label: "Finance And Billing" },
        { icon: "👍", label: "Quality Control" },
        { icon: "🧺", label: "Store" },
        { icon: "👐", label: "Sales" },
        { icon: "🛒", label: "Purchase" },
        { icon: "🛡️", label: "Safety" },
        { icon: "👥", label: "Manpower Tracking" },
    ];

    return (
        <>
            <section>
                <div className="sectionpadding">
                    <Row>
                        <Col lg={12} md={16} sm={24}>
                            <div className="Tecnology-section-container">
                                <h1>Focusing on the Right Technology</h1>
                                <p>Continually developing information systems to improve our work by focusing on Latest Technologies and being the pioneer in Technology also.</p>
                            </div>
                            <div className="erp-container">
                                <div className="erp-text">
                                    <h2>ERP</h2>
                                    <p>
                                        Our ERP System combines advanced enterprise technologies with decades of construction industry experience into one, integrated system. Going beyond traditional construction management software, our ERP combines Analytics to Documentation to Planning, all the things at one place within one click. It also incorporates document, content, and business process management capabilities apart from:
                                    </p>

                                    <div className="erp-grid">
                                        {features.map((item, index) => (
                                            <div className="erp-feature" key={index}>
                                                <div className="erp-icon">{item.icon}</div>
                                                <p>{item.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="erp-image">
                                    <img
                                        src="https://www.hitechprojects.co.in/Sources/images/expertise/tech/1.png"
                                        alt="ERP Dashboard"
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section >
            <section >
                <div className="sectionpadding">
                    <div className="hi-mapp-container">
                        <Row className="hi-app-row">
                            <Col lg={12} md={16} sm={24}>
                                <div className="hi-mapp-image">
                                    <img
                                        src="https://www.hitechprojects.co.in/Sources/images/expertise/tech/2.png"
                                        alt="Hi-Mapp App UI"
                                    />
                                </div>
                            </Col>
                            <Col lg={12} md={16} sm={24}>
                                <div className="hi-mapp-content">
                                    <h2>Hi-Mapp</h2>
                                    <p className="hi-mapp-description">
                                        Hi-Mapp is Hitech's productivity app helping teams to deliver on time. It provides users the ease of mobility by combining core functionalities of ERP and HRMS to improve productivity.
                                    </p>

                                    <ul className="hi-mapp-features">
                                        <li>
                                            <Bell className="feature-icon" />
                                            <span>
                                                <strong>Instant notification based Approval</strong> functionality, so work never stops.
                                            </span>
                                        </li>
                                        <li>
                                            <Calculator className="feature-icon" />
                                            <span>
                                                <strong>Monitoring Project financials, ManPower</strong> round the clock with enhanced analytics.
                                            </span>
                                        </li>
                                        <li>
                                            <Fingerprint className="feature-icon" />
                                            <span>
                                                <strong>Keeping Employees First</strong> by providing HRMS functionalities to them at the fingertips.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

            <section>
                <div className="sectionpadding">
                    <Row>
                        <div className="tecnology-furture-section">
                            <Col lg={12} md={16} sm={24}>
                                <div className="tecnology-heading">
                                    <h1>Future Technologies</h1>
                                </div>
                                <div className="container">
                                    <div className="future-tech-content">
                                        <div className="text-content">
                                            <h2>Internet of Things</h2>
                                            <p>
                                                Hitech incorporates and uses secure, well-managed architecture of interconnected things.
                                                From Asset Tracking to Data collection from IoT-enabled devices, Hitech is adapting to the latest trends in IoT.
                                            </p>

                                            <ul className="iot-points">
                                                <li>
                                                    <i className="fas fa-stopwatch"></i>
                                                    <span><strong>Managing Asset</strong> with the help of IoT-enabled Machines.</span>
                                                </li>
                                                <li>
                                                    <i className="fas fa-truck"></i>
                                                    <span><strong>Data gathering</strong> by managing and tracking Plant and Machinery.</span>
                                                </li>
                                                <li>
                                                    <i className="fas fa-shield-alt"></i>
                                                    <span><strong>Monitoring Preventive Maintenance</strong> by tracking their run-time and managing health status.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="image-content">
                                    <img
                                        src="https://www.hitechprojects.co.in/Sources/images/expertise/tech/3.png"
                                        alt="IoT Device"
                                        className="fade-in-img"
                                    />
                                </div>
                            </Col>
                        </div>
                    </Row >
                </div>
            </section >

            <section>
                <div className="sectionpadding">
                    <Row>
                        <div className="tecnology-section-2">
                            <Col lg={12} md={16} sm={24}>
                                <div className="tecnology-section-container-2">
                                    <div className="tecnology-img-2">
                                        <img src="https://www.hitechprojects.co.in/Sources/images/expertise/tech/4.png" alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="tecnology-section-2-contant">
                                    <h1> MACHINE LEARNING</h1>
                                    <p><b>Automated Video Monitoring</b> with real time Object Tracking.</p>
                                    <p><b>Enhanced Data Analytics</b> using Machine Learning based Algorithmic approach.</p>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default Tecnology;