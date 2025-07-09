import React from "react"
import "./Hero.css"

const Hero = () => {
    return (
        <>
            <section class="hero-section">
                <div className="sectionpadding">
                    <div class="bg-shape-1"></div>
                    <div class="bg-shape-2"></div>
                    <div class="bg-shape-3"></div>
                    <div class="hero-container">
                        <div class="hero-content">

                            <div class="hero-text">
                                <div class="hero-badge">ESTABLISHED 1996</div>

                                <h1 class="hero-title">
                                    We are &nbsp;
                                    <span class="hero-title-highlight" style={{color:"red"}}>Hitech</span>
                                </h1>

                                <div class="hero-title-underline"></div>

                                <div class="hero-description">
                                    <p>Since its inception in 1996, Hitech has been a cornerstone in Ahmedabad's construction industry. With certifications like ISO 9001:2015 and ISO 45001, we set the bar high for quality and safety. Our portfolio is diverse, covering industrial constructions, residential developments, commercial properties and institutional buildings.
                                    </p>

                                    <p>We are honored to be classified as a 'AA' special category - I (Buildings) contractor by the Government of Gujarat. Our mission is to create enduring partnerships and transformative projects that stand as testaments to our commitment to excellence. We believe in not just building structures, but also in building relationships and communities.</p>

                                </div>

                                <div class="hero-buttons">
                                    <a href="#" class="btn-primary">Our Projects</a>
                                    <a href="#" class="btn-secondary">Get in Touch</a>
                                </div>
                            </div>


                            <div class="hero-visual">
                                <div class="hero-image-container">
                                    <div class="hero-image-main">
                                        <div class="hero-image-content">
                                            <div class="hero-year">
                                                <img src="https://images.unsplash.com/photo-1551711974-faf378be34b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero