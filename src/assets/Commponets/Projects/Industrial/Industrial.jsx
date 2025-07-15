import React, { useState } from 'react';
import './Industrial.css';
import { Image } from 'antd';

function Industrial() {

    const [filter, setFilter] = useState("All");

    // The filteredData function is not being used in the JSX,
    // but the logic is correctly applied directly in the filter method of the array.
    // const filteredData = (item => {
    //     if (filter === "All") return true;
    //     if (filter === "Ongoing") return item.ProjectYear.includes("Current");
    //     if (filter === "Completed") return !item.ProjectYear.includes("Current");
    // });

    const Industrialitem = [
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/ongoing/KHS.jpeg",
            title: "KHS MACHINERY EXPANSION WORKS",
            Client: "KHS Machinery PVT. LTD.",
            Location: "Near Hirapur cross road, vatva-mahemdavad highway",
            ProjectSize: "",
            ProjectDescription: "",
            ProjectYear: "2024 - Current",
            Architect: "S3M Design Consultants LLP",
            StrConsultant: "S3M Design Consultants LLP",
            Scope: "Civil work, with all Finishing include Plumbing, Flooring, Painting, Door & Window & Infrastructure development work.",
            category: "Ongoing",
        },
        {
            img: "",
            title: "CONSTRUCTION OF 66kV SS AT KATARGAM",
            Client: "Torrent Power Ltd",
            Location: "Katargam, Surat",
            ProjectSize: "69,481 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2022 - Current",
            Architect: "Munjal Bhatt Architects",
            StrConsultant: "S3M Design Consultants LLP",
            Scope: "Civil, Plumbing and Finishing works for Substation",
            category: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/ongoing/HarshaEngine.png",
            title: "Harsha Enginners Manufactuing Plant",
            Client: "Harsha Engineers Advantek Limited.",
            Location: "Moraiya, Ahmedabad",
            ProjectSize: "1,00,000 sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2024 - Current",
            Architect: "Shah & Talati",
            StrConsultant: "Shah & Talati",
            Scope: "Civil work, with all Finishing include Plumbing, Flooring, Painting, Door & Window & Infrastructure development work.",
            category: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/ongoing/1-2.jpeg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Katargam/Main%20Photos/Torrent%20Katargam%20-%20Main-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Katargam/Main%20Photos/Picture2-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Katargam/Main%20Photos/Picture3-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Katargam/Main%20Photos/Picture4-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Katargam/Main%20Photos/Picture5-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Katargam/Main%20Photos/Picture6-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Katargam/Main%20Photos/Picture7-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Katargam/Main%20Photos/Picture8-min.png" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Katargam/Main%20Photos/Picture9-min.jpg" },
            ],
            title: "TORRENT B STATION",
            Client: "Torrent Power Ltd.",
            Location: "Surat",
            ProjectSize: " 1,11,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2022",
            Architect: "Munjal Bhatt Architects",
            StrConsultant: "S3M Design Consultants LLP",
            Scope: "RCC works, Masonary, Plaster works, Plumbing, Finishing work, Structural Steel work & Infrastructure Development.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/17.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Varachha/Torrent%20Varacha%20-%20Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Varachha/Torrent%20Varacha%20-%201.jpg" },
            ],
            title: "Torrent E Station",
            Client: "Torrent Power Ltd.",
            Location: "Surat",
            ProjectSize: "50,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2022",
            Architect: "Munjal Bhatt",
            StrConsultant: "S3M Design Consultants LLP",
            Scope: "RCC works, Masonary, Plaster works, Plumbing, Finishing work, Structural Steel work & Infrastructure Development.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/4.png",
            galleryImg: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Naranpura/Picture1.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Naranpura/Picture2.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Naranpura/Picture3.jpg" },
            ],
            title: "Torrent PSC Building",
            Client: "Torrent Power Ltd.",
            Location: "Naranpura,Ahmedabad",
            ProjectSize: "1,70,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2022",
            Architect: "Munjal Bhatt",
            StrConsultant: "Ducon Consultant Pvt Ltd",
            Scope: "RCC works, Masonary, Plaster works, Plumbing, Finishing work, Structural Steel work & Infrastructure Development.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Main%20Photos/Torrent%20Odhav%20-%20Main.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Main%20Photos/Torrent%20Odhav%20-%20Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Main%20Photos/Torrent%20Odhav%20-%202.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Main%20Photos/Torrent%20Odhav%20-%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0008.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0009.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0010.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0011.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0013.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0016.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0017.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0018.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0022.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0023.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0024.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0025.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0030.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0032.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0035.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0040.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Odhav/Nisarg%2005.04.2022/IMG-20220405-WA0044.jpg" },
            ],
            title: "Torrent PSC Building",
            Client: "Torrent Power Ltd.",
            Location: "Odhav, Ahmedabad",
            ProjectSize: "1,10,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2022",
            Architect: "Munjal Bhatt",
            StrConsultant: " Ducon Consultant Pvt Ltd",
            Scope: "RCC works, Masonary, Plaster works, Plumbing, Finishing work, Structural Steel work & Infrastructure Development.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/1.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Dholera/Tpda%20Photos/Main%20Photos/Torrent%20Dholera%20-%20Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Dholera/Tpda%20Photos/Main%20Photos/Torrent%20Dholera%20-%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Dholera/Tpda%20Photos/IMG_0319-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Dholera/Tpda%20Photos/IMG_0322-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Dholera/Tpda%20Photos/IMG_0330-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Dholera/Tpda%20Photos/IMG20220113163710-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Dholera/Tpda%20Photos/IMG20220119171701-min.jpg" },
                { img: 'https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Torrent%20Dholera/Tpda%20Photos/IMG20220129154549-min.jpg' },
            ],
            title: "TORRENT SUBSTATION",
            Client: "Torrent Power Ltd.",
            Location: "Dholera, Gujarat",
            ProjectSize: "75,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2022",
            Architect: "Munjal Bhatt Architects",
            StrConsultant: "TCS Consultant",
            Scope: "Construction Civil & Finishing work for 400kV & 220kV GIS Building with Infrastructure Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Finecure%20Pharma/IMG_20220109_140520-min.jpg",
            title: "FINECURE PHARMACEUTICALS LTD",
            Client: "Finecure Pharmaceuticals Ltd.",
            Location: "Arvind Megapark, Changodar",
            ProjectSize: "5,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2019",
            Architect: "N.K. Shah Consulting Engineers LLP",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "Construction Civil & Finishing work for Production unit with Infrastructure Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Picture4.jpg",
            title: "HARSHA ENGINEERING",
            Client: "Harsha Engineers Advantek Limited.",
            Location: "Ahmedabad",
            ProjectSize: "50,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2019",
            Architect: "VMS Engineering & Design Services Pvt. Ltd.",
            StrConsultant: "VMS Engineering & Design Services Pvt. Ltd.",
            Scope: "Construction Civil & Finishing work for TRB Building with Infrastructure Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/4.png",
            title: "HIGH TEMP FURNACES",
            Client: "HighTemp Furnaces Ltd.",
            Location: "Ahmedabad",
            ProjectSize: "1,00,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2018",
            Architect: "VBT Consortium",
            StrConsultant: "Base Engineering Services",
            Scope: "Construction Civil & Finishing work for Factory Building with Infrastructure Work & PEB work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/5.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Technico/Picture10.png" },
            ],
            title: "TECHNICO INDUSTRIES",
            Client: "Technico Industries Ltd.",
            Location: "Surendranagar",
            ProjectSize: "1,00,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2018",
            Architect: "S3M Design Consultants LLP",
            StrConsultant: "S3M Design Consultants LLP",
            Scope: "Construction Civil & Finishing work for Manufacturing Unit with Infrastructure Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/6.png",
            title: "UNICHARM INDIA PVT LTD.",
            Client: "Kajima India Pvt. Ltd.",
            Location: "Ahmedabad",
            ProjectSize: "7,00,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2018",
            Architect: "Kajima India Pvt. Ltd.",
            StrConsultant: "Kajima India Pvt. Ltd",
            Scope: " Construction Civil & Finishing work for Unicharm Factory Unit with Infrastructure Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/7.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/jbm/4.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/jbm/1.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/jbm/2.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/jbm/3.jpg" },
            ],
            title: "JBM AUTO SYSTEM",
            Client: "JBM Auto System Pvt. Ltd.",
            Location: " Sanand, Ahmedabad",
            ProjectSize: "2,00,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2015",
            Architect: "VMS Engineering & Design Services Pvt. Ltd.",
            StrConsultant: "VMS Engineering & Design Services Pvt. Ltd.",
            Scope: "Construction Civil & Finishing work for Factory Unit & Site development Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/8.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/urmin-sari/Picture8.jpg" },
            ],
            title: "URMIN PRODUCTS PVT LTD.",
            Client: "Urmin Product Pvt. Ltd.",
            Location: " sari, Ahmedabad",
            ProjectSize: "1,00,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2017",
            Architect: "Taknik Consultants",
            StrConsultant: "Taknik Consultants",
            Scope: "Construction Civil & Finishing work for Warehouse Building with Infrastructure Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/urmin-bavla/Picture9.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/urmin-sari/Picture8.jpg" },
            ],
            title: "URMIN PRODUCTS PVT LTD.",
            Client: " Urmin Product Pvt. Ltd..",
            Location: "Bavla, Ahmedabad",
            ProjectSize: "80,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2016",
            Architect: "Taknik Consultants, Ahmedabad",
            StrConsultant: "Taknik Consultants",
            Scope: "Construction Civil & Finishing work for Factory Building with Infrastructure Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Nirmiti/Picture11.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/10.png" },
            ],
            title: "NIRMITI PRECISION",
            Client: "Nirmiti Precision Pvt Ltd.",
            Location: "Sanand, Ahmedabad",
            ProjectSize: "1,00,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2016",
            Architect: " L. J. Purani Architect",
            StrConsultant: "L. J. Purani Architect",
            Scope: "Construction Civil & Finishing work for Factory Building with Infrastructure Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/11.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/Reliable/Picture12.png" },
            ],
            title: "RELIABLE AUTO TECH",
            Client: "Reliable Autotech Pvt Ltd.",
            Location: "Sanand, Ahmedabad",
            ProjectSize: "1,00,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2016",
            Architect: "M. R. Fegde And Associate",
            StrConsultant: "Chhaya Consulting Engineers",
            Scope: "Construction Civil & Finishing work for Factory Unit and Anciliary Buildings with Infrastructure Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/13.png",
            title: "TATA NANO WELD SHOP",
            Client: "TATA Motors",
            Location: "Sanand, Ahmedabad",
            ProjectSize: "2,50,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2008",
            Architect: "Tata Motors",
            StrConsultant: "Tata Motors",
            Scope: "Construction Civil & Finishing work for Weld Shop Unit & Site development Work",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/14.png",
            title: "JEKSON HYDRAULICS",
            Client: "Jekson Hydraulics",
            Location: " Changodar, Ahmedabad",
            ProjectSize: "70,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2009",
            Architect: "N.K. Shah Consulting Engineers LLP",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "Construction Civil & Finishing work for Plant Building & Site development Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/15.png",
            title: "HARSHA ENGINEERS",
            Client: "Harsha Engineers Advantek Limited.",
            Location: "Sanand, Ahmedabad",
            ProjectSize: "22,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2008",
            Architect: "SMPS, Ahmedababad",
            StrConsultant: " SMPS, Ahmedababad",
            Scope: "Construction Civil & Finishing work for TRB Building with Infrastructure Work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/16.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/safeexpress/3.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/safeexpress/2.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/industrial/completed/safeexpress/1.webp" },
            ],
            title: "SAFEXPRESS WAREHOUSE",
            Client: "Safexpress Warehouse",
            Location: "Changodar, Ahmedabad",
            ProjectSize: "75,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2009",
            Architect: "CivTech Consultants",
            StrConsultant: " CivTech Consultants",
            Scope: "Construction Civil & Finishing work for Ware House & Site development Work.",
            category: "Completed",
        },

    ]
    return (
        <>
            <div className="sectionpadding">
                {/* FILTER BUTTONS */}
                <div className="Industrial-filter-buttons">

                    <button
                        className={filter === "Ongoing" ? "active" : ""}
                        onClick={() => setFilter("Ongoing")}
                    >
                        Ongoing
                    </button>
                    <button
                        className={filter === "Completed" ? "active" : ""}
                        onClick={() => setFilter("Completed")}
                    >
                        Completed
                    </button>
                </div>

                {/* PROJECT GRID */}
                <div className="Industrial-col">
                    {Industrialitem
                        .filter(item => {
                            if (filter === "All") return true;
                            // Check both ProjectYear for "Current" and the 'categry' field
                            if (filter === "Ongoing") return item.ProjectYear.includes("Current") || item.categry === "Ongoing";
                            // Check both ProjectYear for not "Current" and the 'category' field
                            if (filter === "Completed") return !item.ProjectYear.includes("Current") || item.category === "Completed";
                            return true;
                        })
                        .map((item, index) => (
                            <div key={index} className="Industrial-card">
                                <Image.PreviewGroup>
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        className="Industrial-img"
                                        preview={{ mask: <span>Preview</span> }}
                                    />
                                    {/* Conditionally render additional gallery images */}
                                    {item.imggallery && item.imggallery.map((galleryImg, galleryIndex) => (
                                        <Image
                                            key={galleryIndex}
                                            src={galleryImg.img}
                                            alt={`${item.title} - ${galleryIndex + 1}`}
                                            style={{ display: 'none' }} // Hide these images as they are for preview only
                                        />
                                    ))}
                                </Image.PreviewGroup>
                                <div className="Industrial-contant-container">
                                    <h3>{item.title}</h3>
                                    <p><strong>Client:</strong> {item.Client}</p>
                                    <p><strong>Location:</strong> {item.Location}</p>
                                    <p><strong>Project Size:</strong> {item.ProjectSize}</p>
                                    <p><strong>Description:</strong> {item.ProjectDescription}</p>
                                    <p><strong>Year:</strong> {item.ProjectYear}</p>
                                    <p><strong>Architect:</strong> {item.Architect}</p>
                                    <p><strong>Structural Consultant:</strong> {item.StrConsultant}</p>
                                    <p><strong>Scope:</strong> {item.Scope}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Industrial