import React from 'react'
import "./Machinery.css"
import { Row, Col } from 'antd'

function Machinery() {
    return (
        <>
            <div className="sectionpadding">
                <Row>
                    <Col lg={12} sm={16} md={24}>
                        <div className="PLant-Machinery-section">
                            <div className="Plant-machinery-section">
                                <h1>Plant And Machinery</h1>
                                <p>We have established a robust plant and machinery cell that is responsible for repair and management system. The cell also looks after resource planning, selection of right equipment for procurement, installation, commissioning and routine preventive maintenance. The tower cranes, passenger and material hoists, concrete pumps are deployed at the project sites after due consideration of the project requirement, movement restrictions, perfromance requirements etc.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} sm={16} md={24}>
                        <div className="plant-Machinery-img-container">
                            {[
                                { img: "https://www.hitechprojects.co.in/Sources/images/expertise/machinary2/1.png", label: "Tower Crane" },
                                { img: "https://www.hitechprojects.co.in/Sources/images/expertise/machinary2/bp.jpg", label: "Boom Placer" },
                                { img: "https://www.hitechprojects.co.in/Sources/images/expertise/machinary2/6.png", label: "Rope Suspended Platform" },
                                { img: "https://www.hitechprojects.co.in/Sources/images/expertise/machinary2/DJI_0019.JPG", label: "RMC Plant" },
                                { img: "https://www.hitechprojects.co.in/Sources/images/expertise/machinary2/DJI_0039.JPG", label: "Climbing Boom Placer" },
                                { img: "https://www.hitechprojects.co.in/Sources/images/expertise/Machinery/3.png", label: "Transit Mixer" },
                            ].map((item, idx) => (
                                <div className="Plant-img-section" key={idx}>
                                    <img src={item.img} alt={item.label} />
                                    <span className="plant-caption">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Machinery
