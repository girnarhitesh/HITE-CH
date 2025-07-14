import React from "react"
import "./Hero.css"

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="sectionpadding">
                        <div className="hero-badge">● WHY CHOOSE US</div>

                        <h1 className="hero-title">

                            We are  <span className="hero-title-highlight">Hitech</span>
                        </h1>

                        <div className="hero-description">
                            <p>Since its inception in 1996, Hitech has been a cornerstone in Ahmedabad's construction industry. With certifications like ISO 9001:2015 and ISO 45001, we set the bar high for quality and safety. Our portfolio is diverse, covering industrial constructions, residential developments, commercial properties and institutional buildings.</p>
                            <br />
                            <p>We are honored to be classified as a 'AA' special category - I (Buildings) contractor by the Government of Gujarat. Our mission is to create enduring partnerships and transformative projects that stand as testaments to our commitment to excellence. We believe in not just building structures, but also in building relationships and communities.</p>
                        </div>

                        <div className="hero-buttons">
                            <a href="#" className="btn-primary">Our Projects</a>
                            <a href="#" className="btn-secondary">Get in Touch</a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1585211964888-c2a4277a9f6d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQwfHxjb25zdHJ1Y3Rpb24lMjBpbWd8ZW58MHx8MHx8fDA%3D"
                                alt="Team Celebration"
                                className="hero-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero