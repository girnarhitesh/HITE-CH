import React, { useEffect, useRef } from 'react';
import "./Services.css"
import { Row, Col, Carousel } from 'antd'
import { FaIndustry } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import Tecnology from '../ Expertise/Tecnology/Tecnology';

function Services() {
    const imageRefs = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    entry.target.classList.remove('out-of-view');
                } else {
                    entry.target.classList.remove('in-view');
                    entry.target.classList.add('out-of-view');
                }
            });
        }, observerOptions);

        imageRefs.current.forEach((img) => {
            if (img) observer.observe(img);
        });

        return () => {
            imageRefs.current.forEach((img) => {
                if (img) observer.unobserve(img);
            });
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };
    const images = [
        "https://www.hitechprojects.co.in/Sources/images/expertise/Machinery/2.png",
        "https://www.hitechprojects.co.in/Sources/images/expertise/Machinery/3.png",
        "https://www.hitechprojects.co.in/Sources/images/expertise/Machinery/4.png",
        "https://www.hitechprojects.co.in/Sources/images/expertise/Machinery/6.png",
        "https://www.hitechprojects.co.in/Sources/images/expertise/Machinery/1.png",
        "https://www.hitechprojects.co.in/Sources/images/expertise/Machinerytwo/4.png",
        "https://www.hitechprojects.co.in/Sources/images/expertise/Machinerytwo/5.png",
        "https://www.hitechprojects.co.in/Sources/images/expertise/Machinerytwo/1.png",
        "https://www.hitechprojects.co.in/Sources/images/expertise/Machinerytwo/2.png",
        "https://www.hitechprojects.co.in/Sources/images/expertise/Machinerytwo/3.png",
    ];

    // Carousel settings (you can customize these)
    const carouselSettings = {
        dots: true,        // Show navigation dots
        infinite: true,    // Loop infinitely
        speed: 500,        // Transition speed in ms
        slidesToShow: 4,   // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true,    // Auto-play the slides
        autoplaySpeed: 2000, // Interval for auto-play in ms
    };
    return (
        <>
            <section>
                <div className="sectionpadding">
                    <Row>
                        <Col lg={12} sm={16} md={24}>
                            <div className="services-container-section">
                                <div className="services-section-contant">
                                    <h1>Services And Capabilities</h1>
                                    <p>Hitech has the resources and knowledge to undertake just about any job.</p>
                                    <span>With projects, people, and technology, Hitech has unmatched reach and expertise. Hitech performs engineering, procurement , construction and project management on major construction projects. Hitech has specialised in construction of high rise buildings, complex structures etc. Hitech has a proven track record of working smoothly with different organizations. Orchestrating major operations demand first-rate construction management, something that Hitech vouches for in every service provided in the execution of each project.</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} sm={16} md={24}>
                            <div className="services-ourvalue-section">
                                <div className="services-section-overvalue-heading">
                                    <h1>What We Do</h1>
                                </div>
                                <div className="ourvalue-icone-box-container">
                                    <div className="icon-box-container">
                                        <span><FaIndustry /></span>
                                        <h1>CIVIL WORK</h1>
                                        <p>We have expertise to undertake varieties of civil work with materials for basic construction activities of industrial plant, institutional buildings, low rise buildings, high rise buildings, etc.</p>
                                    </div>

                                    <div className="icon-box-container">
                                        <span><MdVerifiedUser /></span>
                                        <h1>MEP WORK</h1>
                                        <p>We execute electrical work, fire fighting work, plumbing work, etc. by engaging specialised and competent agencies.</p>
                                    </div>

                                    <div className="icon-box-container">
                                        <span><IoHome /></span>
                                        <h1>FINISHING WORK</h1>
                                        <p>We deliver finest finish of various finishing activities like painting, flooring, railing, aluminium work, wood work, other bought out items, etc.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section>
                <div className="sectionpadding">
                    <div className="services">
                        <Row>
                            <Col lg={12} md={16} sm={24}>
                                <div className="services-Expertise-container">
                                    <div className="services-Expertise-section">
                                        <h1>Expertise</h1>
                                        <p>Plant And Machinery</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={16} sm={24}>
                                <div className="services-expertise-contant-container">
                                    <div className="services-expertise-contant">
                                        <p>We have established a robust plant and machinery cell that is responsible for repair and management system. The cell also looks after resource planning, selection of right equipment for procurement, installation, commissioning and routine preventive maintenance. The tower cranes, passenger and material hoists, concrete pumps are deployed at the project sites after due consideration of the project requirement, movement restrictions, perfromance requirements etc.</p>
                                        <br />
                                        <p>
                                            For each concrete structure and component, Hitech deploys the most suitable formwork system from major formwork companies such as PERI, DOKA and Alsina around the globe.</p>

                                        <p>Hitech makes sure the kind of materials and formworks used for every project are based after considering on-site efficiency of production, health , safety and environmental issues, driving towards ever-increasing efficiency.</p>
                                    </div>

                                    <div className="services-expertise-img-containers">
                                        <Carousel {...carouselSettings}>
                                            {images.map((imgSrc, index) => (
                                                <div key={index} className="carousel-slide-item">
                                                    <img src={imgSrc} alt={`Machinery ${index + 1}`} />
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={12} md={16} sm={24}>
                                <div className="services-dropdown-img-section">
                                    <div className="dropdown-img">
                                        <img src="https://www.hitechprojects.co.in/Sources/images/expertise/machinary2/1.png" alt="Tower Crane" />
                                        <p className="image-caption">Tower Crane</p> {/* Added class */}
                                    </div>

                                    <div className="dropdown-img">
                                        <img src="https://www.hitechprojects.co.in/Sources/images/expertise/machinary2/2.png" alt="Boom Placer" />
                                        <p className="image-caption">Boom Placer</p> {/* Added class */}
                                    </div>

                                    <div className="dropdown-img">
                                        <img src="https://www.hitechprojects.co.in/Sources/images/expertise/machinary2/3.png" alt="Batching Plant" />
                                        <p className="image-caption">Batching Plant</p> {/* Added class */}
                                    </div>

                                    <div className="dropdown-img">
                                        <img src="https://www.hitechprojects.co.in/Sources/images/expertise/machinary2/4.png" alt="Soil Machine" />
                                        <p className="image-caption">Soil Machine</p> {/* Added class */}
                                    </div>

                                    <div className="dropdown-img">
                                        <img src="https://www.hitechprojects.co.in/Sources/images/expertise/machinary2/5.png" alt="Transit Mixer" />
                                        <p className="image-caption">Transit Mixer</p> {/* Added class */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

            <section className="formwork-section">
                <div className="sectionpadding">
                    <div className="services-formwork-container-section">
                        <div className="services-formwork-container">
                            <div className="formwork-header">
                                <h1 className="formwork-title">Formwork</h1>
                                <div className="title-underline"></div>
                            </div>
                            <p className="formwork-description">
                                Our formwork cell caters to the designing, detailing, customization, procurement, deployment, training and implementation requirements of our projects. Based on the formwork scheme, the deployment schedule is firmed up to meet the construction sequence at site. It ensures proper utilisation of formwork, achieving cycle time, productivity targets, handling, cleaning and upkeep of formwork materials.
                            </p>
                        </div>

                        <div className="services-formwork-images-container" ref={containerRef}>
                            <div className="services-img-formwork">
                                <div className="image-item" ref={addToRefs}>
                                    <img src="https://www.hitechprojects.co.in/Sources/images/expertise/formwork/1.png" alt="Formwork Process 1" />
                                    <div className="image-overlay-formwork">
                                        <h3>Design & Planning</h3>
                                    </div>
                                </div>
                                <div className="image-item" ref={addToRefs}>
                                    <img src="https://www.hitechprojects.co.in/Sources/images/expertise/formwork/3.png" alt="Formwork Process 3" />
                                    <div className="image-overlay-formwork">
                                        <h3>Implementation</h3>
                                    </div>
                                </div>
                                <div className="image-item" ref={addToRefs}>
                                    <img src="https://www.hitechprojects.co.in/Sources/images/expertise/formwork/5.png" alt="Formwork Process 5" />
                                    <div className="image-overlay-formwork">
                                        <h3>Quality Control</h3>
                                    </div>
                                </div>
                                <div className="image-item" ref={addToRefs}>
                                    <img src="https://www.hitechprojects.co.in/Sources/images/expertise/formwork/6.png" alt="Formwork Process 6" />
                                    <div className="image-overlay-formwork">
                                        <h3>Deployment</h3>
                                    </div>
                                </div>
                                <div className="image-item" ref={addToRefs}>
                                    <img src="https://www.hitechprojects.co.in/Sources/images/expertise/formwork/4.png" alt="Formwork Process 4" />
                                    <div className="image-overlay-formwork">
                                        <h3>Training</h3>
                                    </div>
                                </div>
                                <div className="image-item" ref={addToRefs}>
                                    <img src="https://www.hitechprojects.co.in/Sources/images/expertise/formwork/2.png" alt="Formwork Process 2" />
                                    <div className="image-overlay-formwork">
                                        <h3>Customization</h3>
                                    </div>
                                </div>
                                <div className="image-item" ref={addToRefs}>
                                    <img src="https://www.hitechprojects.co.in/Sources/images/expertise/formwork/7.png" alt="Formwork Process 7" />
                                    <div className="image-overlay-formwork">
                                        <h3>Maintenance</h3>
                                    </div>
                                </div>
                                <div className="image-item" ref={addToRefs}>
                                    <img src="https://www.hitechprojects.co.in/Sources/images/expertise/formwork/8.png" alt="Formwork Process 8" />
                                    <div className="image-overlay-formwork">
                                        <h3>Optimization</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>


            </section>
            <Tecnology />
        </>
    )
}

export default Services
