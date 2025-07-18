import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navigationItems = [
        {
            title: "Projects",
            sublink: [
                { label: "Residential", link: "/residential" },
                { label: "Commercial", link: "/commercial" },
                { label: "Industrial", link: "/industrial" },
                { label: "Institutional And Corporate", link: "/institutional" }
            ]
        },
        {
            title: "Expertise",
            sublink: [
                { label: "Plant & Machinery", link: "/machinery" },
                { label: "Formwork", link: "/formwork" },
                { label: "Technology", link: "/technology" },
            ]
        },
        {
            title: "About Us",
            sublink: [
                { label: "Who We Are", link: "/whoweare" },
                { label: "Our Management", link: "/management" },
                { label: "Our Standards", link: "/standards" },
                { label: "Awards & Certifications", link: "/awards" },
                { label: "CSR", link: "/csr" },
                { label: "Careers", link: "/careers" }
            ]
        },
        {
            title: "Clients",
            sublink: [
                { label: "Our Clients", link: "/client" },
                { label: "Architects & Consultants", link: "/architects" },
            ]
        },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.navbar')) {
                setIsMenuOpen(false);
                setActiveDropdown(null);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar">
            <div className="nav-container">

                <div className="nav-logo">
                    <a href="/" className="logo-link">
                        <div className="logo-container">
                            <img src="https://www.hitechprojects.co.in/static/media/hitech_logo.441af66c973ea5b6921a.png" alt="" />
                            <div className="logo-text">
                                <span className="brand-name">BUILDPRO</span>
                                {/* <span className="brand-tagline">Building Excellence</span> */}
                            </div>
                        </div>
                    </a>
                </div>

                {/* Navigation Menu */}
                <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
                    {navigationItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a 
                                href="#" 
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (window.innerWidth <= 768) {
                                        toggleDropdown(index);
                                    }
                                }}
                            >
                                {item.title}
                                {item.sublink && item.sublink.length > 0 && (
                                    <span className="dropdown-arrow">▼</span>
                                )}
                            </a>
                            {item.sublink && item.sublink.length > 0 && (
                                <ul className={`dropdown ${activeDropdown === index ? 'dropdown-active' : ''}`}>
                                    {item.sublink.map((sub, subIndex) => (
                                        <li key={subIndex} className="dropdown-item">
                                            <a 
                                                href={sub.link} 
                                                className="dropdown-link"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setActiveDropdown(null);
                                                }}
                                            >
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
                    <a href="/contact" className="quote-btn">
                        Get Quote
                    </a>
                </div>

                {/* Hamburger Menu */}
                <div 
                    className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
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