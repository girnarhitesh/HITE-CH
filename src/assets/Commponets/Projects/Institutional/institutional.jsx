import React, { useState } from 'react';
import './institutional.css';
import { Image } from 'antd';



function institutional() {

    const [filter, setFilter] = useState("All");

    const institutionalitem = [
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/ongoing/Anubhav/AnubhavSchool2.JPG",
            title: "ANUBHAV SCHOOL",
            Client: "Pilak Shah",
            Location: "Moti Devti, Ahmedabad",
            ProjectSize: "75,704 Sq. ft.",
            ProjectDescription: "GF+02 Floor",
            ProjectYear: "2024-Current",
            Architect: "Kakani Associate",
            StrConsultant: "Japan Shah Consulting Engineers",
            Scope: "Construction RCC frame work, Exposed Masonary, Plaster, All finishing work, Structural Steel, plumbing work & Infrastructure devlopment work.",
            category: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/ongoing/SoulPicture.png",
            title: "SOUL - University",
            Client: "School of Ultimate Leadership (SOUL) Gandhinagar, Gujarat.",
            Location: "Gandhinagar",
            ProjectSize: "1,36,000 Sq. ft.",
            ProjectDescription: "GF+03 Floor",
            ProjectYear: "2025-Current",
            Architect: "Edifice Consultant Pvt Ltd.",
            StrConsultant: "Ducon Consultants Pvt Ltd",
            Scope: "Construction Civil work with all Finishing work & Allied Structure Works.",
            category: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/AnandNiketan/1.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/AnandNiketan/1.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/ongoing/1-1.jpg" },
            ],
            title: "ANAND NIKETAN SCHOOL",
            Client: "Anand Niketan School",
            Location: "Sanand, Ahmedabad",
            ProjectSize: "3,49,062 Sq. ft.",
            ProjectDescription: " 2B+GF+08 Floor",
            ProjectYear: "2022",
            Architect: "Kakani Associates",
            StrConsultant: "DELF Consulting Engineers (India) Private Limited",
            Scope: " Construction RCC frame work, Exposed Masonary, Plaster, All finishing work, Structural Steel, plumbing work & Infrastructure devlopment work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Museum/new5.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Museum/Main%20Photos/Jain%20Museum%20-%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Museum/new2.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Museum/new3.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Museum/new4.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Museum/new5.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Museum/new6.jpg" },
            ],
            title: "MUSEUM KOBA",
            Client: "Shri Mahavir Jain Aradhana Kendra, Koba (SMJAK Trust)",
            Location: "Koba, Gandhinagar",
            ProjectSize: " 1,00,000 Sq. ft.",
            ProjectDescription: " GF+02 Floor",
            ProjectYear: "2022",
            Architect: "SJK Architects",
            StrConsultant: "Global Engineering Services",
            Scope: "Construction Civil & Finishing work, Structural Steel work, MEP Work & Landscaping work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/ongoing/1.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/JITO%20Hostel/IMG-20220309-WA0003.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/JITO%20Hostel/IMG-20220309-WA0004.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/JITO%20Hostel/IMG-20220309-WA0008.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/JITO%20Hostel/IMG-20220309-WA0005.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/JITO%20Hostel/IMG-20220309-WA0011.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/JITO%20Hostel/IMG-20220309-WA0012.jpg" },
            ],
            title: "JITO HOSTEL",
            Client: "JITO Ahmedabad Educational Trus",
            Location: "CG Road, Ahmedabad",
            ProjectSize: "37,200 Sq. ft.",
            ProjectDescription: "1B+GF+5 Floor",
            ProjectYear: "2022",
            Architect: "PVDRS, Ahmedabad",
            StrConsultant: "P-CUBE Consultant",
            Scope: "Excavation, Pile work, RCC Frame works, Masonary & Plaster work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/lubi%20corporate.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/Main%20photos/corporate-park-ahmedabad3.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/Main%20photos/Lubi%20-%20Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/Main%20photos/Lubi%20-%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/Main%20photos/Lubi%20-%202.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/Main%20photos/Lubi%20-%203.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0010.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0016.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0021.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0018.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0020.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0021.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Lubi/IMG-20220310-WA0012.jpg" },
            ],
            title: "LUBI CORPORATE",
            Client: " Lubi Industries LLP",
            Location: "Tragad, Ahmedabad",
            ProjectSize: "1,68,400 Sq. ft.",
            ProjectDescription: "2B+GF+07 Floor",
            ProjectYear: "2022",
            Architect: "DSP Design Associates",
            StrConsultant: "KMH Engineering",
            Scope: " RCC Frame works, Masonary & Plaster works.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Anand%20Niketan%20School/NDT_4579.JPG",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Anand%20Niketan%20School/Best%20Photos/Anand%20Niketan%20-Main.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Anand%20Niketan%20School/Best%20Photos/Anand%20Niketan%20-1.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Anand%20Niketan%20School/Best%20Photos/Anand%20Niketan%20-2.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Anand%20Niketan%20School/NDT_4579.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Anand%20Niketan%20School/NDT_4580.JPG" },
            ],
            title: "ANAND NIKETAN JOEY'S CAMPUS",
            Client: "Anand Niketan School",
            Location: "Sindhu Bhavan road, Ahmedabad",
            ProjectSize: "50,000 Sq. ft.",
            ProjectDescription: "GF+04 Floor",
            ProjectYear: "2015",
            Architect: "Kakani Associate",
            StrConsultant: "Himanshu Parikh Consulting Engineers",
            Scope: "Construction RCC frame work, Masonary, Plaster, All finishing work, Structural Steel, plumbing work & Infrastructure devlopment work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/3.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Narayana%20Hrudalaya%20Hsopital/Narayana%20Hrudalaya%20-%20Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Narayana%20Hrudalaya%20Hsopital/Narayana%20Hrudalaya%20-%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Narayana%20Hrudalaya%20Hsopital/Narayana%20Hrudalaya%20-%202.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/Institutional_projects/completed/Narayana%20Hrudalaya%20Hsopital/Narayana%20Hrudalaya%20-%203.webp" },
            ],
            title: "NARAYANA HRUDALAYA HOSPITAL",
            Client: "Narayana Hrudalaya Hospital",
            Location: " Rakhial, Ahmedabad",
            ProjectSize: "2,00,000 Sq. ft.",
            ProjectDescription: "4 Floors, 20 Meters",
            ProjectYear: "2011",
            Architect: "Shapoorji Pallonji & Co. Ltd,",
            StrConsultant: "Umesh & Co",
            Scope: "Excavation, RCC Frame works, Masonary & Plaster work.",
            category: "Completed",
        },

    ]

    return (
        <>
            <div>
                <div className="sectionpadding">
                    {/* FILTER BUTTONS */}
                    <div className="institutional-filter-buttons">

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
                    <div className="institutional-col">
                        {institutionalitem
                            .filter(item => {
                                if (filter === "All") return true;
                                // Check both ProjectYear for "Current" and the 'categry' field
                                if (filter === "Ongoing") return item.ProjectYear.includes("Current") || item.categry === "Ongoing";
                                // Check both ProjectYear for not "Current" and the 'category' field
                                if (filter === "Completed") return !item.ProjectYear.includes("Current") || item.category === "Completed";
                                return true;
                            })
                            .map((item, index) => (
                                <div key={index} className="institutional-card">
                                    <Image.PreviewGroup>
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            className="institutional-img"
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
                                    <div className="institutional-contant-container">
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
            </div>
        </>
    )
}

export default institutional
