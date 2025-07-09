import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./Architect.css"; 
import { Collapse } from 'antd';

function Architect() {
    const Architectitem = [
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/JLL.png", alt: "JLL Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Team.png", alt: "Team Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/colliers.png", alt: "Colliers Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/TUV%20India.jpeg", alt: "TUV India Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/CQRALogo.webp", alt: "CQRA Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Atec.png", alt: "Atec Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/ShilpShree.png", alt: "Shilp Shree Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/MansiShah.png", alt: "Mansi Shah Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Hm%20Architech.png", alt: "HM Architech Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/HirenPatel.png", alt: "Hiren Patel Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/9StreetArchitech.png", alt: "9 Street Architech Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/ADSArchitech.png", alt: "ADS Architech Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/AAA.png", alt: "AAA Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/studioARA.png", alt: "Studio ARA Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/PVDRS.png", alt: "PVDRS Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Kakani.png", alt: "Kakani Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/IITathastu.png", alt: "IITathastu Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/DesignModule.png", alt: "Design Module Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/ONG&ONG.png", alt: "ONG & ONG Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/ModoDesigns.png", alt: "Modo Designs Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/NehaConsultant.png", alt: "Neha Consultant Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/RezaKabul.png", alt: "Reza Kabul Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/PlaceKinesis.png", alt: "Place Kinesis Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Vitan.png", alt: "Vitan Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/UpKrama.png", alt: "UpKrama Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Blocher.png", alt: "Blocher Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/99Studio.png", alt: "99 Studio Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Bentel.png", alt: "Bentel Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/INIDesign.png", alt: "INI Design Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/S3M.png", alt: "S3M Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/ShahTalati.png", alt: "Shah Talati Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Taknik.png", alt: "Taknik Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/MunjalBhatt.png", alt: "Munjal Bhatt Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/NKShah.png", alt: "NK Shah Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/VBT.png", alt: "VBT Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/SMPS.png", alt: "SMPS Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/VMS.png", alt: "VMS Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Kajima.png", alt: "Kajima Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/LJpurani.png", alt: "LJ Purani Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/MRFEDGE.png", alt: "MRF Edge Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/Civtech.png", alt: "Civtech Logo" },
        { img: "https://www.hitechprojects.co.in/Sources/images/our_client/ArchitechLogo/ScarlettDesigns.png", alt: "Scarlett Designs Logo" },
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
            <section className="architect-section-wrapper">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10}>
                        <div className="sectionpadding">
                            <div className="architect-section-header">
                                <h1 className="architect-title">Architects and Consultants</h1>
                                <p className="architect-description">We work closely with a wide range of Architect and Consultants from different sectors and regions. These are just some of the people we’re proud to work with:</p>
                            </div>
                            <div className="architect-grid-container">
                                {Architectitem.map((item, index) => (
                                    <div key={index} className="architect-img-wrapper">
                                        <img src={item.img} alt={item.alt || "Architect/Consultant Logo"} className="architect-logo" /> {/* Added class for image styling */}
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

export default Architect;