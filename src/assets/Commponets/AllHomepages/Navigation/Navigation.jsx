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

            <style jsx>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background-color: #052942;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                    z-index: 1000;
                    transition: all 0.3s ease;
                }

                .nav-container {
                    padding: 0 46px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 80px;
                }

                .nav-logo {
                    flex-shrink: 0;
                }

                .logo-link {
                    text-decoration: none;
                    color: white;
                    transition: all 0.3s ease;
                }

                .logo-container {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .logo-icon {
                    width: 40px;
                    height: 40px;
                    color: #f39c12;
                    transition: transform 0.3s ease;
                }

                .logo-link:hover .logo-icon {
                    transform: scale(1.1);
                }

                .logo-text {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.2;
                }

                .brand-name {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: white;
                    letter-spacing: 0.5px;
                }

                .nav-menu {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 8px;
                }

                .nav-item {
                    position: relative;
                }

                .nav-link {
                    color: white;
                    text-decoration: none;
                    padding: 15px 18px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: all 0.3s ease;
                    border-radius: 6px;
                    font-weight: 500;
                    font-size: 0.95rem;
                    position: relative;
                    overflow: hidden;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-family: Raleway, sans-serif;
                    cursor: pointer;
                }

                .nav-link::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: #f39c12;
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }

                .nav-link:hover::before {
                    width: 80%;
                }

                .nav-link:hover {
                    background: rgba(243, 156, 18, 0.1);
                    color: #f39c12;
                    transform: translateY(-1px);
                }

                .dropdown-arrow {
                    font-size: 0.6rem;
                    transition: transform 0.3s ease;
                    margin-left: 2px;
                }

                .nav-item:hover .dropdown-arrow {
                    transform: rotate(180deg);
                }

                .dropdown {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: white;
                    min-width: 280px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(15px);
                    transition: all 0.3s ease;
                    list-style: none;
                    padding: 15px 0;
                    z-index: 1001;
                    font-family: Raleway, sans-serif;
                    border-radius: 8px;
                }

                .dropdown::before {
                    content: '';
                    position: absolute;
                    top: -8px;
                    left: 20px;
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-bottom: 8px solid white;
                }

                .nav-item:hover .dropdown {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .dropdown-item {
                    margin: 0;
                }

                .dropdown-link {
                    color: #2c3e50;
                    text-decoration: none;
                    padding: 12px 25px;
                    display: block;
                    transition: all 0.3s ease;
                    font-weight: 500;
                    font-size: 0.9rem;
                    border-left: 3px solid transparent;
                    text-transform: none;
                    letter-spacing: 0.5px;
                    line-height: 1.4;
                }

                .dropdown-link:hover {
                    background: rgba(243, 156, 18, 0.1);
                    color: #f39c12;
                    border-left: 3px solid #f39c12;
                    transform: translateX(5px);
                }

                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .quote-btn {
                    background: linear-gradient(45deg, #f39c12, #e67e22);
                    color: white;
                    padding: 12px 24px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
                }

                .quote-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(243, 156, 18, 0.4);
                    background: linear-gradient(45deg, #e67e22, #d35400);
                }

                .hamburger {
                    display: none;
                    flex-direction: column;
                    cursor: pointer;
                    width: 30px;
                    height: 25px;
                    justify-content: space-between;
                    z-index: 1001;
                }

                .bar {
                    width: 100%;
                    height: 3px;
                    background: white;
                    border-radius: 3px;
                    transition: all 0.3s ease;
                    transform-origin: center;
                }

                .hamburger-active .bar:nth-child(1) {
                    transform: rotate(45deg) translate(6px, 6px);
                    background: #f39c12;
                }

                .hamburger-active .bar:nth-child(2) {
                    opacity: 0;
                    transform: scale(0);
                }

                .hamburger-active .bar:nth-child(3) {
                    transform: rotate(-45deg) translate(6px, -6px);
                    background: #f39c12;
                }

                /* Mobile Styles */
                @media screen and (max-width: 1024px) {
                    .nav-container {
                        padding: 0 20px;
                    }

                    .nav-menu {
                        gap: 4px;
                    }

                    .nav-link {
                        padding: 12px 14px;
                        font-size: 0.9rem;
                    }
                }

                @media screen and (max-width: 768px) {
                    .hamburger {
                        display: flex;
                    }

                    .nav-actions {
                        display: none;
                    }

                    .nav-menu {
                        position: fixed;
                        left: -100%;
                        top: 80px;
                        flex-direction: column;
                        background: linear-gradient(135deg, #1a365d 0%, #2d5a7a 100%);
                        width: 100%;
                        height: calc(100vh - 80px);
                        text-align: center;
                        transition: 0.4s ease;
                        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.1);
                        padding: 30px 0;
                        gap: 0;
                        overflow-y: auto;
                    }

                    .nav-menu-active {
                        left: 0;
                    }

                    .nav-item {
                        width: 100%;
                        margin: 0;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    }

                    .nav-link {
                        padding: 25px 20px;
                        justify-content: center;
                        border-radius: 0;
                        font-size: 1.1rem;
                        letter-spacing: 1px;
                    }

                    .nav-link::before {
                        display: none;
                    }

                    .dropdown {
                        position: static;
                        background: rgba(0, 0, 0, 0.2);
                        box-shadow: none;
                        border-radius: 0;
                        opacity: 0;
                        visibility: hidden;
                        transform: none;
                        border: none;
                        border-top: 1px solid rgba(255, 255, 255, 0.1);
                        min-width: auto;
                        max-height: 0;
                        overflow: hidden;
                        transition: all 0.3s ease;
                    }

                    .dropdown-active {
                        opacity: 1;
                        visibility: visible;
                        max-height: 500px;
                    }

                    .dropdown::before {
                        display: none;
                    }

                    .dropdown-link {
                        color: rgba(255, 255, 255, 0.9);
                        padding: 18px 40px;
                        font-size: 1rem;
                        border-left: none;
                        text-align: center;
                    }

                    .dropdown-link:hover {
                        background: rgba(243, 156, 18, 0.2);
                        color: #f39c12;
                        transform: none;
                    }

                    .nav-item:hover .dropdown-arrow {
                        transform: rotate(0deg);
                    }

                    .brand-name {
                        font-size: 1.2rem;
                    }
                }

                @media screen and (max-width: 480px) {
                    .nav-container {
                        padding: 0 15px;
                        height: 70px;
                    }

                    .nav-menu {
                        top: 70px;
                        height: calc(100vh - 70px);
                        padding: 20px 0;
                    }

                    .logo-icon {
                        width: 35px;
                        height: 35px;
                    }

                    .brand-name {
                        font-size: 1.1rem;
                    }

                    .hamburger {
                        width: 25px;
                        height: 20px;
                    }

                    .nav-link {
                        padding: 20px 15px;
                    }

                    .dropdown-link {
                        padding: 15px 30px;
                    }
                }
            `}</style>
        </nav>
    );
}

export default Navigation;