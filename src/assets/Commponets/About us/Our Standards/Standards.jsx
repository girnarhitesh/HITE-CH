import React from 'react';
import "./Standard.css";
import { Row, Col } from 'antd';

const Standards = () => {

    return (

        <>
            <div className="sectionpadding">
                <Row className='Standard-Row'>
                    <Col lg={12} sm={16} md={24}>
                        <h1 class="main-title-Standards">Quality</h1>
                        <p class="subtitle">Quality over Quantity</p>

                        <div class="main-grid">
                            <div class="content-section">
                                <div class="description-card">
                                    <p class="description-text">
                                        Being among the first to achieve ISO 9001:2015 Certification, Hitech sets
                                        the bar high for quality standards in construction services. Our success
                                        is rooted in a customer-centric approach, executed by a team of highly
                                        skilled professionals. We are steadfast in our commitment to continual
                                        improvement, a philosophy that keeps us at the forefront of the industry.
                                    </p>

                                    <p class="description-text">
                                        Our reputation for quality is further bolstered by our comprehensive
                                        strategy that encompasses advanced processes, tools and training
                                        aimed at enhancing quality issue identification and resolution. We also
                                        prioritize human factors that drive the achievement of 'right the first
                                        time' quality, ensuring that our services consistently exceed customer
                                        expectations.
                                    </p>

                                    <div class="key-points">
                                        <ul>
                                            <li>Provision of processes, tools, training and expertise to improve the identification and resolution of quality issues.</li>
                                            <li>Focusing on human behaviors that drive "right the first time" quality.</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={12} sm={16} md={24}>
                        <div className='standers-contant-container'>
                            <div class="features-grid">
                                <div class="feature-card">
                                    <div class="feature-icon">
                                        <svg class="icon-calendar" viewBox="0 0 24 24">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                    </div>
                                    <h3 class="feature-title">Method Statement</h3>
                                    <p class="feature-description">Comprehensive planning and execution strategies</p>
                                </div>

                                <div class="feature-card">
                                    <div class="feature-icon">
                                        <svg class="icon-shield" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <h3 class="feature-title">Standard Material and Practices</h3>
                                    <p class="feature-description">Industry-leading materials and proven methodologies</p>
                                </div>

                                <div class="feature-card">
                                    <div class="feature-icon">
                                        <svg class="icon-file-text" viewBox="0 0 24 24">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <polyline points="14,2 14,8 20,8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                            <polyline points="10,9 9,9 8,9" />
                                        </svg>
                                    </div>
                                    <h3 class="feature-title">Strong Internal Audit Systems</h3>
                                    <p class="feature-description">Rigorous quality control and monitoring processes</p>
                                </div>

                                <div class="feature-card">
                                    <div class="feature-icon">
                                        <svg class="icon-check-square" viewBox="0 0 24 24">
                                            <polyline points="9,11 12,14 22,4" />
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                    </div>
                                    <h3 class="feature-title">Checklists And Work Instructions</h3>
                                    <p class="feature-description">Detailed guidelines for consistent quality delivery</p>
                                </div>
                            </div>
                            <div class="image-gallery">
                                <div class="image-item">
                                    <img src="https://www.hitechprojects.co.in/Sources/images/standards/Quality/1.%20On%20site%20checking.jpg" alt="Construction quality 1" />
                                    <div class="image-overlay"></div>
                                </div>
                                <div class="image-item">
                                    <img src="https://www.hitechprojects.co.in/Sources/images/standards/Quality/2.%20Slab%20Checking.jpg" alt="Construction quality 2" />
                                    <div class="image-overlay"></div>
                                </div>
                                <div class="image-item">
                                    <img src="https://www.hitechprojects.co.in/Sources/images/standards/Quality/3.%20Approval%20of%20work.jpg" alt="Construction quality 3" />
                                    <div class="image-overlay"></div>
                                </div>
                                <div class="image-item">
                                    <img src="https://www.hitechprojects.co.in/Sources/images/standards/Quality/4.%20Finshed%20Product.jpg" alt="Construction quality 4" />
                                    <div class="image-overlay"></div>
                                </div>
                                <div class="image-item">
                                    <img src="https://www.hitechprojects.co.in/Sources/images/standards/Quality/5.%20Material%20Testing.jpg" alt="Construction quality 5" />
                                    <div class="image-overlay"></div>
                                </div>
                                <div class="image-item">
                                    <img src="https://www.hitechprojects.co.in/Sources/images/standards/Quality/6.%20Testing%20training.jpg" alt="Construction quality 6" />
                                    <div class="image-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default Standards;