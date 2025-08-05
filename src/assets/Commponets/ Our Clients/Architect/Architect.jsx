import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./Architect.css"; 
import Testimonial from '../../Testimonial/Testimonial';


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
            <Testimonial/>

        </>
    );
}

export default Architect;