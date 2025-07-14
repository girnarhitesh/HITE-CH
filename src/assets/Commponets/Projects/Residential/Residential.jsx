import React, { useState } from 'react';
import './Residential.css';
import { Image } from 'antd';

function Residential() {

    const [filter, setFilter] = useState("All");

    // The filteredData function is not being used in the JSX,
    // but the logic is correctly applied directly in the filter method of the array.
    // const filteredData = (item => {
    //     if (filter === "All") return true;
    //     if (filter === "Ongoing") return item.ProjectYear.includes("Current");
    //     if (filter === "Completed") return !item.ProjectYear.includes("Current");
    // });

    const Residenialitem = [
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/dharohar.avif",
            title: "Dharohar",
            Client: "Sheetal Infrastructure",
            Location: "Vaishnovdevi Circle, Ahmedabad",
            ProjectSize: "1,692,477 Sq. ft.",
            ProjectDescription: "3B+GF+22 Floor",
            ProjectYear: "2024-Current",
            Architect: "Hiren Patel & Associates",
            StrConsultant: "Setu Infrastructure",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/supercity.jpeg",
            title: "SUPERCITY LUXURIA 3",
            Client: "Shrinivas Organisors Pvt ltd.",
            Location: "Bhadaj, Ahmedabad",
            ProjectSize: "4,44,723 Sq. ft.",
            ProjectDescription: "3B+GF+20 Floor",
            ProjectYear: "2024-Current",
            Architect: "9th Street Architech",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/Ikaria.png",
            title: "IKARIA - EASY LIVING",
            Client: "Collated Ventures",
            Location: "Adani Shantigram, Ahmedabad",
            ProjectSize: "2,24,000 Sq. ft.",
            ProjectDescription: "1B+GF+13 floor",
            ProjectYear: " 2022-Current",
            Architect: " Studio ARA",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, masonary, Plaster works, waterproofing, All finishing works etc.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/VenusPashmina.png",
            title: "Venus Pashmina",
            Client: "Venus Lifespace Creators",
            Location: "Rajpath Club, Bodakdev, Amedabad",
            ProjectSize: "8,89,160 Sq. ft.",
            ProjectDescription: "2B+GF+22 Floor",
            ProjectYear: "2024",
            Architect: "HM Architects",
            StrConsultant: " Setu Infrastructure",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/1-4.png",
            title: "ARANYAM",
            Client: "Aaryan Developers",
            Location: "Shilaj, Ahmedabad",
            ProjectSize: " 1,861,168 Sq. ft.",
            ProjectDescription: " 2B+GF+21 Floor",
            ProjectYear: "2023-Current",
            Architect: "Apurva Amin",
            StrConsultant: "HNBS Associates",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/2-2.jpg",
            title: "THE BELLAGIO",
            Client: "Palak Group",
            Location: "S.G. Highway, Ahmedabad",
            ProjectSize: "1,060,422 Sq. ft.",
            ProjectDescription: "2B+GF+22 Floor",
            ProjectYear: "2023-Current",
            Architect: "Studio Mansi Shah",
            StrConsultant: "HNBS Associates",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/Oeuvre.png",
            title: "Oeuvre 2",
            Client: " Madhav Associates",
            Location: "Rajpath Club, Bodakdev, Amedabad",
            ProjectSize: "6,05,957 Sq. ft.",
            ProjectDescription: "2B+GF+25 Floor",
            ProjectYear: "2025",
            Architect: "HM Architects",
            StrConsultant: "Setu Infrastructure",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/2.png",
            title: "GHARANA",
            Client: " Sheetal Infrastructure",
            Location: "Ambli, Ahmedabad",
            ProjectSize: "5,00,000 Sqft.",
            ProjectDescription: "3B+GF+21 Floor",
            ProjectYear: "2024",
            Architect: "ADS Architect",
            StrConsultant: "Ducon Consultants Pvt Ltd.",
            Scope: "Excavation, RCC Frame works, Masonary & Plaster work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/4.png",
            title: "Venush Pashmina",
            Client: "Sarthi Prospace LLP- Venus Lifespace Creators",
            Location: "Bodakdev, Amedabad",
            ProjectSize: "8,89,160 Sq. ft.",
            ProjectDescription: "21 Floors, 70 Meters",
            ProjectYear: "2024",
            Architect: "H M Architects",
            StrConsultant: "Setu Infrastructure",
            Scope: "Civil Construction work of RCC Frame, Block & Plaster work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/sunatmosphere.png",
            title: "Sun Atmosphere",
            Client: "Sun Builders",
            Location: "Shela, Ahmedabad",
            ProjectSize: "12,50,000 Sq. ft.",
            ProjectDescription: "2B+GF+14 Floor",
            ProjectYear: "2024",
            Architect: " H M Architech",
            StrConsultant: "Setu Infrastructure",
            Scope: "RCC Frame works, Masonary, Plaster works, waterproofing, MEP work, All finishing works etc.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SecurityStaff/Picture1.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/12.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SecurityStaff/Picture2.jpg" }
            ],
            title: "SECURITY STAFF HOUSING",
            Client: "Reliance Industries Ltd.",
            Location: "Jamnagar",
            ProjectSize: "2,81,000 Sq. ft.",
            ProjectDescription: "GF+2 Floor",
            ProjectYear: "2023",
            Architect: "PVDRS, Ahmedabad",
            StrConsultant: "PVDRS, Ahmedabad",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, MEP work, All finishing works etc.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/The%20Water%20Fall/The%20waterfall-%20Main.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/The%20Water%20Fall/The%20waterfall-%20Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/The%20Water%20Fall/The%20waterfall-%201.jpg" },
            ],
            title: "THE WATERFALL",
            Client: "Armaan Developer",
            Location: "Ahmedabad",
            ProjectSize: "4,55,000 Sq. ft.",
            ProjectDescription: "4B+GF+11 Floor",
            ProjectYear: "2022",
            Architect: " Scarlett Design",
            StrConsultant: "Ducon Consultant Pvt Ltd",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, MEP work, All finishing works etc.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/6.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Alphabet/Picture%203.jfif" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Alphabet/Picture%205.gif" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Alphabet/Picture%206.webp" },
            ],
            title: "ALPHABET A",
            Client: "Jaydeep Buildcon LLP",
            Location: " Ahmedabad",
            ProjectSize: " 1,00,000 Sq. ft.",
            ProjectDescription: "1B+GF+9 Floor",
            ProjectYear: "2022",
            Architect: "9th Street Architects",
            StrConsultant: "Bhoomi Consultants",
            Scope: "Excavation, RCC Frame works, Masonary & Plaster work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/1.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images//prouctlist/residential/completed/Arvind%20Aavishkar/Arvind-5.jpgf" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Arvind%20Aavishkar/Arvind-3.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Arvind%20Aavishkar/Arvind-6.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Arvind%20Aavishkar/Arvind-1.jpg" },
            ],
            title: "ARVIND AAVISHKAR",
            Client: "Arvind Smartspaces",
            Location: "Ahmedabad",
            ProjectSize: "6,10,000 Sqft.",
            ProjectDescription: "GF+14 Floor",
            ProjectYear: "2022",
            Architect: "Jagrut And Partners LLP",
            StrConsultant: "Alpha consultancy services",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, MEP work, All finishing works etc.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/ongoing/Oeuvre.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20SKY%20PARK%20&%20CENTRAL%20PLACE/Edits/01-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20SKY%20PARK%20&%20CENTRAL%20PLACE/Main%20Photos/Sun%20Sky%20Park%20-%208-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20SKY%20PARK%20&%20CENTRAL%20PLACE/Main%20Photos/Sun%20Sky%20Park%20-%207-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20SKY%20PARK%20&%20CENTRAL%20PLACE/Edits%202/23-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20SKY%20PARK%20&%20CENTRAL%20PLACE/Edits%202/24-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20SKY%20PARK%20&%20CENTRAL%20PLACE/Edits%202/32-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20SKY%20PARK%20&%20CENTRAL%20PLACE/Edits%202/81-min.jpg" },
            ],
            title: "SUN SKY PARK",
            Client: "Sun Builders",
            Location: "Ahmedabad",
            ProjectSize: "2B+GF+22 Floor",
            ProjectDescription: "2 Basements Ground Floor+22 Floor",
            ProjectYear: "2020",
            Architect: "Placekinesis Associates",
            StrConsultant: "Setu Infrastructure",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, MEP work, All finishing works etc.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20SKY%20PARK%20&%20CENTRAL%20PLACE/Edits/01-min.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Indraprastha%20Gulmohar/Picture2.png" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Indraprastha%20Gulmohar/Indraprastha%20Gulmohar%20-%20Main.png" },
            ],
            title: "INDRAPRASTH GULMOHAR",
            Client: "Deep Group",
            Location: "Ahmedabad",
            ProjectSize: "5,00,000 Sq. ft.",
            ProjectDescription: " 2B+GF+14 Floor",
            ProjectYear: "2019",
            Architect: "Hiren Patel Architects",
            StrConsultant: "Setu Infrastructure",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/3.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/The%20Banyan/The%20Banyan%20-%20Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/The%20Banyan/The%20Banyan%20-%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/The%20Banyan/The%20Banyan%20-%202.jpg" },
            ],
            title: "THE BANYAN",
            Client: "Suryam Group",
            Location: "Ahmedabad",
            ProjectSize: " 2,10,000 Sq. ft.",
            ProjectDescription: "1B+GF+12 Floor",
            ProjectYear: "2018",
            Architect: "Design Module",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster works, waterproofing, finishing works etc.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/4.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/One%2049/One%2049%20-%20Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/One%2049/One%2049%20-%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/One%2049/One%2049%20-%202.png" },
            ],
            title: "ONE49",
            Client: "Amaya Properties",
            Location: "Ahmedabad",
            ProjectSize: "4,00,000 Sq. ft.",
            ProjectDescription: "2B+GF+19 Floor",
            ProjectYear: "2018",
            Architect: " ONG & ONGS",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: " RCC Frame works, Masonary & Plaster works, waterproofing, MEP work, All finishing works etc.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/One%2049/One%2049%20-%20Main.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20EVOQ/1518241082__16R1706-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20EVOQ/Sun%20Evoq%20-%206-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20EVOQ/DSC_3950-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20EVOQ/DSC_3963-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20EVOQ/DSC_3972-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20EVOQ/DSC_4086-min.JPG" },
            ],
            title: "SUN EVOQ",
            Client: "Sun Builders",
            Location: "Ahmedabad",
            ProjectSize: " 1,25,000 Sq. ft.",
            ProjectDescription: "1B+GF+13 Floor",
            ProjectYear: "2017",
            Architect: "MODO Designs",
            StrConsultant: "Umang Patel",
            Scope: "RCC Frame works, Masonary & Plaster works, waterproofing, MEP work, All finishing works etc",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/SUN%20EVOQ/IMG_20170527_161857-min.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/yash%20arian/002.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/yash%20arian/003.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/yash%20arian/1.jpg" },
            ],
            title: "YASH ARIAN",
            Client: "Yash Arian Infra LLP",
            Location: "Ahmedabad",
            ProjectSize: "4,50,000 Sq. ft.",
            ProjectDescription: "2B+GF+14 Floor",
            ProjectYear: "2017",
            Architect: "Design Studio",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/8.png",
            title: "SLUM REHABILITATION",
            Client: "H N Safal",
            Location: "Ahmedabad",
            ProjectSize: "2,10,000",
            ProjectDescription: "GF+3 Floor",
            ProjectYear: "2015",
            Architect: "Design Module",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster works, waterproofing, MEP work, All finishing works etc",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Applewoods/Main%20Photos/Applewoods-Main.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Applewoods/Main%20Photos/Applewoods-Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Applewoods/Main%20Photos/Orchid%20Greenfield%20-%20Applewoods%20-1.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Applewoods/Main%20Photos/Orchid%20Greenfield%20-%20Applewoods%20-2.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Applewoods/Main%20Photos/Orchid%20Greenfield%20-%20Applewoods%20-3.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Applewoods/Main%20Photos/Orchid%20Greenfield%20-%20Applewoods%20-4.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/Applewoods/Orchid%20Greenfield-Applewoods%20-1.jfif" },
            ],
            title: "APPLEWOODS",
            Client: "Goyal Safal Developers",
            Location: "Ahmedabad",
            ProjectSize: "9,00,000 Sq. ft.",
            ProjectDescription: "B+GF+14 Floor",
            ProjectYear: "2013",
            Architect: "Apurva Amin",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/10.png",
            title: "SHALVIK SHUKAN",
            Client: "Aakar Developers",
            Location: "Gandhinagar",
            ProjectSize: "3,00,000 Sq. ft.",
            ProjectDescription: "GF+3 Floor",
            ProjectYear: "2013",
            Architect: "Neha Consultants",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/10.png",
            title: "SHALVIK SHUKAN",
            Client: "Aakar Developers",
            Location: "Gandhinagar",
            ProjectSize: "1,00,000 Sq. ft.",
            ProjectDescription: "GF+3 Floor",
            ProjectYear: "2013",
            Architect: "Neha Consultants",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            category: "Completed",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/11.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/shalvik%20homes/1.webp" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/residential/completed/shalvik%20homes/2.jpg" },
            ],
            title: "SHALVIK HOMES",
            Client: "Aakar Developers",
            Location: "Vavol, Gandhinagar",
            ProjectSize: "1,00,000 Sq. ft.",
            ProjectDescription: "",
            ProjectYear: "2010",
            Architect: "Consultants",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Framework, Structural Work",
            category: "Completed",
        },
    ]
    return (
        <>
            <div className="sectionpadding">
                {/* FILTER BUTTONS */}
                <div className="residential-filter-buttons">

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
                <div className="residenial-col">
                    {Residenialitem
                        .filter(item => {
                            if (filter === "All") return true;
                            // Check both ProjectYear for "Current" and the 'categry' field
                            if (filter === "Ongoing") return item.ProjectYear.includes("Current") || item.categry === "Ongoing";
                            // Check both ProjectYear for not "Current" and the 'category' field
                            if (filter === "Completed") return !item.ProjectYear.includes("Current") || item.category === "Completed";
                            return true;
                        })
                        .map((item, index) => (
                            <div key={index} className="residential-card">
                                <Image.PreviewGroup>
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        className="residential-img"
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
                                <div className="residenial-contant-container">
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

export default Residential