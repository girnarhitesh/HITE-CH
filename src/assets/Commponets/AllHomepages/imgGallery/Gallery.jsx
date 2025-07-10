import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./Gallery.css"; // Ensure this CSS file exists and is correctly linked
import { motion } from 'framer-motion';
import { MdPeople, MdCropRotate } from 'react-icons/md';
import { SiStandardjs } from 'react-icons/si';
import { FaHammer } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Gallery() {
    const Galleryitem = [
        {
            img: "https://www.hitechprojects.co.in/Sources/images/gallery/1.png", // REPLACE WITH ACTUAL IMAGE PATHS
            title: "Entrance Lounge",
            description: "In the entrance lounge dreams take flight and anticipation fills the air."
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/gallery/2.png", // REPLACE WITH ACTUAL IMAGE PATHS
            title: "New Head Office",
            description: "As far as top quality construction goes, we stand tall-literally."
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/gallery/3.png", // REPLACE WITH ACTUAL IMAGE PATHS
            title: "Workspace",
            description: "“We keep moving forward, opening new doors and doing new things because we’re curious and curiosity keeps leading us down new paths.”"
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/gallery/4.png", // REPLACE WITH ACTUAL IMAGE PATHS
            title: "Cafeteria",
            description: "As far as top quality construction goes, we stand tall-literally."
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/gallery/5.png", // REPLACE WITH ACTUAL IMAGE PATHS
            title: "", // Added a more descriptive title for clarity
            description: "Hitech Projects celebrated 25 successful years of its entrepreneurial journey of growth in the construction industry by moving into a spacious new office."
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/gallery/6.png", // REPLACE WITH ACTUAL IMAGE PATHS
            title: "Executive Lounge",
            description: "Relationships are the only thing that matter business in life."
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/gallery/7.png", // REPLACE WITH ACTUAL IMAGE PATHS
            title: "Workspace",
            description: "In your workspace, surround yourself with objects that bring you joy and ignite your creativity."
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/gallery/8.png", // REPLACE WITH ACTUAL IMAGE PATHS
            title: "Reception",
            description: "We express gratitude to all our business partners and stakeholders who have supported us throughout this exciting journey."
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/gallery/9.png", // REPLACE WITH ACTUAL IMAGE PATHS
            title: "Training Room",
            description: "Success in business requires: Training, Discipline, Hard Work."
        },
    ];

    const ourvalueitem = [
        {
            // Assign the actual imported React Icon component
            icon: <MdPeople className="text-4xl text-blue-600" />, // Example: Add Tailwind classes or a custom CSS class for styling
            name: "People",
            description: "We believe in creating a culture of leadership, accountability & competence.",
            button: "Our Team",
        },
        {
            icon: <MdCropRotate className="text-4xl text-green-600" />,
            name: "Process",
            description: "Our process & expertise ensures quality and timely delivery irrespective of the project size.",
            button: "Our Services",
        },
        {
            icon: <SiStandardjs className="text-4xl text-purple-600" />,
            name: "Standards",
            description: "A Proven record of following best quality, safety standards and training practices in the construction industry.",
            button: "Standards",
        },
        {
            icon: <FaHammer className="text-4xl text-red-600" />,
            name: "Technology",
            description: "We promptly embrace state of the art construction technologies and enable our proceses with Information Technology",
            button: "Our Technology",
        },
    ];


    return (
        <>
            <section > {/* Added a wrapper class for potential overall section styling */}
                <Row >
                    <Col xs={12} md={10} lg={10}>
                        <div className="sectionpadding">
                            <div className="img-gallery-section-container">
                                <div className="img-gallery-container">
                                    {/* Corrected map arguments: (item, index) */}
                                    {Galleryitem.map((item, index) => (
                                        <div key={index} className="img-container-gallery">
                                            <img
                                                src={item.img}
                                                alt={item.title || "Gallery Image"} // Use title for alt, fallback
                                                className="gallery-image" // Add a class for image specific styling
                                            />
                                            <div className="gallery-info"> {/* Wrapper for text content */}
                                                {item.title && <p className="gallery-title">{item.title}</p>} {/* Only render if title exists */}
                                                {item.description && <span className="gallery-description">{item.description}</span>} {/* Only render if description exists */}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            <section>
                <Row >
                    <Col xs={12} lg={10} >
                        {/* sectionpadding div added back as per your input */}
                        <div className="sectionpadding">
                            <div className="our-values-content-container">
                                <div className="section-title-wrapper text-center mb-5">
                                    <h2 className="our-values-title">
                                        Our Core Values
                                        <span className="our-values-underline"></span>
                                    </h2>
                                </div>

                                <div className="values-grid">
                                    {ourvalueitem.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.15 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            className="value-card"
                                        >
                                            <div className="value-icon-wrapper">
                                                {item.icon}
                                            </div>
                                            <h3 className="value-name">{item.name}</h3>
                                            <p className="value-description-gallery">{item.description}</p>
                                            {item.button && ( // Only render button if it exists
                                                // Replaced React-Bootstrap Button with a standard HTML <button>
                                                <Link to="/"><button className="value-custom-button">
                                                    {item.button}
                                                </button></Link>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            <section >
                {/* <div className="sectionpadding"> */}
                <div style={{ padding: "40px 0" }}>
                    <div className="contant-section-container">
                        <div className="contact-container">
                            <p>Looking to Partner with Us?</p>
                            <div className="contact-button">
                                <Link><button>Contact us</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Gallery;