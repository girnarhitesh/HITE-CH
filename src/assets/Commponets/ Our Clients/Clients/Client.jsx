import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import "./Client.css";
import { Collapse } from 'antd';

function Client() {
    const Clientsitem = [
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/33.png", alt: "Client Logo 33" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/31.png", alt: "Client Logo 31" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Arnayam-Logo.png", alt: "Arnayam Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Nakshatra.jpeg", alt: "Nakshatra Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/40.png", alt: "Client Logo 40" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Collated.jpeg", alt: "Collated Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Palak.png", alt: "Palak Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Magnaster.jpg", alt: "Magnaster Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/21.png", alt: "Client Logo 21" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Shrinivas.png", alt: "Shrinivas Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Shrinivas.png", alt: "Shrinivas Logo 2" }, // Duplicate, consider unique alt or remove
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/TrueValue.png", alt: "TrueValue Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Shivalik.png", alt: "Shivalik Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/TheBuildingCompany.png", alt: "The Building Company Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/UniversalReality.png", alt: "Universal Reality Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Jaydeep.png", alt: "Jaydeep Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Madelief.png", alt: "Madelief Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/5.png", alt: "Client Logo 5" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/12.png", alt: "Client Logo 12" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/34.png", alt: "Client Logo 34" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/42.png", alt: "Client Logo 42" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/25.png", alt: "Client Logo 25" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ShahPublicity.png", alt: "Shah Publicity Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/KPSanghvi.png", alt: "KP Sanghvi Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Deep.png", alt: "Deep Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Siddhigrp.png", alt: "Siddhi Group Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ShipExcellence.png", alt: "Ship Excellence Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Safal.png", alt: "Safal Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Goyal.jpg", alt: "Goyal Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/13.png", alt: "Client Logo 13" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/39.png", alt: "Client Logo 39" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Adani.png", alt: "Adani Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/27.png", alt: "Client Logo 27" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/20.png", alt: "Client Logo 20" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/15.png", alt: "Client Logo 15" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/14.png", alt: "Client Logo 14" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/36.png", alt: "Client Logo 36" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/kajima.jpeg", alt: "Kajima Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/38.png", alt: "Client Logo 38" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/26.png", alt: "Client Logo 26" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/24.png", alt: "Client Logo 24" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/23.png", alt: "Client Logo 23" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/1.png", alt: "Client Logo 1" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/neusMalls.png", alt: "Neus Malls Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/8.png", alt: "Client Logo 8" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/22.png", alt: "Client Logo 22" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/3.png", alt: "Client Logo 3" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/7.png", alt: "Client Logo 7" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/6.png", alt: "Client Logo 6" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/AnubhavSchool.png", alt: "Anubhav School Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/SoulSchool.png", alt: "Soul School Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/4.png", alt: "Client Logo 4" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Jito.jpeg", alt: "Jito Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/Devx.png", alt: "Devx Logo" },
    ];

    const items = [
        {
            key: 'Mr. Pilak Shah',
            label: 'Director, Harsha Engineers Ltd.',
            children: "Hitech’s approach to construction is well-organized and systematic. Their commitment towards deliverables, quality and safety is commendable. Hitech has executed our past projects and we would like to be associated with the company for future projects too.",

        },
        {
            key: 'Mr. Yash Brahmbhatt',
            label: 'Founder and CEO, Shilp Group',
            children: "Were happy with Hitech Projects Pvt Ltd for their exceptional work on the Shivalik Shilp 2 project. Their unwavering commitment to quality, safety, and punctuality, along with their teamwork and problem-solving skills, truly impressed us. Their internal monitoring system was key to the project's success. We wholeheartedly recommend Hitech for their outstanding contributions in the construction sector.",

        },
        {
            key: 'Mr. Shaan Zaveri',
            label: 'Partner, Amaya Properties LLP',
            children: "Amaya historically constructed its own buildings. When we had to plan the execution strategy for our marquee, 70m tall residential building ONE49, we decided to evaluate contractors who were up to the challenge, would be able to construct the building as per our expectations within a tight timeline and without compromising safety or quality. After evaluating many candidates, we decided to award the contract to Hi Tech Projects Pvt. Ltd. Throughout the construction process, we found them to be professional and supportive. They deployed the required resources to ensure timely construction and paid close attention to safety and quality. They worked closely with our PMC team to work as ‘One Team’. We are pleased with the positive attitude and commitments shown by the promoters of the company throughout the construction process. We would be pleased to work with them in the future and happy to recommend them to anyone who is looking to construct quality buildings.",

        },
        {
            key: "Mr. Kamal Singal",
            label: "MD and CEO, Arvind Smartspaces Ltd.",
            children: "“We are very happy with the services provided by Hitech at our project Aavishkaar in Ahmedabad. They have been performing very well on all aspects of the development, be it quality, safety, or timeliness of delivery. What differentiates Hitech from other contractors is that they have a very professional way of working. They have experienced employees on site with cooperative and positive attitude. They have extensive MIS systems to track and manage work. They have established comprehensive systems/ processes such as regular training of workers, logistics plans, regular housekeeping etc. We highly recommend Hitech and wish them best for their future endeavours.”",
        },
        {
            key: "Mr. Deep Patel",
            label: "Director, Sun Builders",
            children: "“No doubt, one of the best civil contracting firm in Gujarat. Technical expertise, Quality construction, well trained staff, organized set-up and emphasis on safety are few of their plus points. For us they are not only contractors but are like our core construction partners. Happy and pleased to be working together.”",
        }
    ];

    return (
        <>
            <section className="client-section-wrapper">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10}>
                        <div className="sectionpadding">
                            <div className="clients-section-header">
                                <h1 className="clients-title">Our Clients</h1>
                                <p className="clients-description">We work closely with a wide range of clients from different sectors and regions. These are just some of the people we're proud to work with:</p>
                            </div>
                            <div className="Clients-grid-container">
                                {Clientsitem.map((item, index) => (
                                    <div key={index} className="client-img-wrapper"> 
                                        <img src={item.img} alt={item.alt || "Client Logo"} className="client-logo" /> 
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            <section>
                <div className="sectionpadding">
                    <div className="Testomonial-container">
                        <div className="testomonial-sectio-container">
                            <h1>Testimonials</h1>
                        </div>
                    </div>
                    <Collapse items={items} defaultActiveKey={['1']} />
                </div>
            </section>
        </>
    );
}

export default Client;