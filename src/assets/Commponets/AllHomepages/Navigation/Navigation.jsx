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
                {/* Professional Logo */}
                <div className="nav-logo">
                    <a href="/" className="logo-link">
                        <div className="logo-container">
                            <svg 
                                className="logo-icon" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                                <path d="M12 7L7.5 9.5v5L12 17l4.5-2.5v-5L12 7z"/>
                            </svg>
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