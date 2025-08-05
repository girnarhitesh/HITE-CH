import React from 'react'
import { Collapse } from 'antd';

function Testimonial() {

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
    )
}

export default Testimonial
