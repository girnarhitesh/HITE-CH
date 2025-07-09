import React from 'react';
import "./CSR.css"; // Ensure this CSS file is correctly linked
import { Row, Col } from 'react-bootstrap'; // Keep React-Bootstrap for grid layout

function CSR() {
    const csrImages = [
        {
            img: "https://www.hitechprojects.co.in/Sources/images/csr/CSR/1.png",
            alt: "Education for construction workers children",
            text: "Education for construction workers children"
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/csr/CSR/2.png",
            alt: "Regular health check-up camps",
            text: "Regular health check-up camps"
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/csr/CSR/3.png",
            alt: "Nutritional grocery kit distribution",
            text: "Nutritional grocery kit distribution"
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/csr/CSR/4.png",
            alt: "AIDS, Tobacco awareness camp",
            text: "AIDS, Tobacco awareness camp"
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/csr/CSR/5.jpg",
            alt: "Holistic village development",
            text: "Holistic village development"
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/csr/CSR/6.jpg",
            alt: "Women Empowerment",
            text: "Women Empowerment"
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/csr/CSR/7.jpg",
            alt: "Safe Haven for stray dogs",
            text: "Safe Haven for stray dogs" // Duplicate description, consider unique if possible
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/csr/CSR/8.jpg",
            alt: "Safe Haven for stray dogs",
            text: "Safe Haven for stray dogs" // Duplicate description
        },
    ];
    return (
        <>
            <section>
                <Row className="justify-content-center"> {/* Center the content column */}
                    <Col xs={12} sm={10} md={8} lg={8}>
                        <div className="sectionpadding"> {/* Consistent padding class */}
                            <div className="csr-content-container"> {/* Renamed for clarity */}
                                <div className="csr-header-container"> {/* Container for the main text */}
                                    <p className="csr-description">Hitech takes its role as a socially responsible corporate citizen seriously, with a strong commitment to contributing to the well-being of the community. We allocate resources diligently to make a meaningful impact on society. Our corporate social responsibility (CSR) initiatives are designed to address various societal needs, from education and healthcare to environmental sustainability. These programs reflect our core values and our dedication to making a positive difference in the lives of those around us.</p>
                                </div>

                                <ul className="csr-list">
                                    <li>Education for construction worker children</li>
                                </ul>

                                {/* YouTube Video Embed 1: HiTech's School Step */}
                                {/* Using iframe for reliable YouTube embedding */}
                                <figure className="video-embed-container">
                                    <iframe
                                        width="560"
                                        height="315"
                                        // REPLACE 'YOUR_VIDEO_ID_1' WITH THE ACTUAL VIDEO ID FOR "HiTech's School Step"
                                        src="https://www.youtube.com/watch?v=gOvaiQqK7o89"
                                        title="HiTech's School Step"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <figcaption className="video-caption">
                                        As their parents help to build the homes of our dreams... <br />
                                        we take a small step to help them build their own dreams.
                                    </figcaption>
                                </figure>

                                {/* YouTube Video Embed 2: HiTech CSR Part1 */}
                                <figure className="video-embed-container">
                                    <iframe
                                        width="560"
                                        height="315"
                                        // REPLACE 'YOUR_VIDEO_ID_2' WITH THE ACTUAL VIDEO ID FOR "HiTech CSR Part1"
                                        src="https://m.youtube.com/watch?v=BFwYnw_vF2g&pp=ygUSI3Ryb3VzcnJwYW50ZHNsaXRz0"
                                        title="HiTech CSR Part1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </figure>
                                <ul className="csr-list">
                                    <li>Regular medical, eye checkup camps at labour colonies.</li>
                                    <li>Workshops on AIDS, tobacco and alcohol awareness.</li>
                                    <li>Workshops on malnutrition awareness and nutritional grocery kit distribution.</li>
                                    <li>Support for holistic village development initiative by Dreams Foundation.</li>
                                    <li>Support for patient care and medical equipment to various charitable hospitals.</li>
                                    <li>Support for stray animal welfare.</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            <section > {/* Wrapper for this section */}
                <Row>
                    <Col xs={12} sm={10} md={8} lg={8}>
                        <div className="sectionpadding">
                            <div className="csr-grid-header text-center mb-4">
                                <h2>Our CSR Activities</h2>
                                <p>See some of our impactful initiatives in action.</p>
                            </div>

                            <div className="csr-images-grid-container"> {/* This div will be the CSS Grid container */}
                                {csrImages.map((item, index) => (
                                    <div key={index} className="img-card-csr-effect">
                                        <img src={item.img} alt={item.alt} className="img-fluid" />
                                        <div className="img-card-csr-overlay">
                                            <p className="img-card-csr-text">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default CSR;