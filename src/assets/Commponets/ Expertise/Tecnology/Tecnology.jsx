import React from "react";
import "./Tecnology.css";
import { Bell, Calculator, Fingerprint } from 'lucide-react';

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
                </div>
            </section>
            <section >
                <div className="sectionpadding">
                    <div className="hi-mapp-container">
                        <div className="hi-mapp-image">
                            <img
                                src="https://www.hitechprojects.co.in/Sources/images/expertise/tech/2.png"
                                alt="Hi-Mapp App UI"
                            />
                        </div>

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
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tecnology;