import React, { useState } from 'react';
import "./Navigation.css"

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const Navigationitem = [
        {
            title: "Projects",
            link: "/projects",
            sublink: [
                { label: "Residential Projects", link: "/residential" },
                { label: "Commercial Buildings", link: "/commercial" },
                { label: "Industrial Facilities", link: "/industrial" },
                { label: "Institutional & Corporate", link: "/institutional" }
            ]
        },
        {
            title: "Expertise",
            link: "/expertise",
            sublink: [
                { label: "Plant & Machinery", link: "/machinery" },
                { label: "Advanced Formwork", link: "/formwork" },
                { label: "Construction Technology", link: "/technology" },
                { label: "Quality Assurance", link: "/quality" }
            ]
        },
        {
            title: "About Us",
            link: "/about",
            sublink: [
                { label: "Who We Are", link: "/who-we-are" },
                { label: "Our Management", link: "/management" },
                { label: "Our Standards", link: "/standards" },
                { label: "Awards & Certifications", link: "/awards" },
                { label: "CSR", link: "/csr" },
                { label: "Careers", link: "/careers" }
            ]
        },
        {
            title: "Clients",
            link: "/clients",
            sublink: [
                { label: "Our Clients", link: "/client" },
                { label: "Architects & Consultants", link: "/architects" },
            ]
        },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Professional Logo */}
                <div className="nav-logo">
                    <a href="/" className="logo-link">
                        <img src="https://www.hitechprojects.co.in/static/media/hitech_logo.441af66c973ea5b6921a.png" alt="" />
                    </a>
                </div>

                {/* Navigation Menu */}
                <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
                    {Navigationitem.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a href={item.link} className="nav-link">
                                {item.title}
                                {item.sublink && item.sublink.length > 0 && (
                                    <span className="dropdown-arrow">▼</span>
                                )}
                            </a>
                            {item.sublink && item.sublink.length > 0 && (
                                <ul className="dropdown">
                                    {item.sublink.map((sub, subIndex) => (
                                        <li key={subIndex} className="dropdown-item">
                                            <a href={sub.link} className="dropdown-link">
                                                {sub.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Get Quote Button */}
                <div className="nav-actions">
                    <a href="/quote" className="quote-btn">Contact</a>
                </div>

                {/* Hamburger Menu */}
                <div
                    className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;