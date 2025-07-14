import React, { useState } from 'react'
import "./Commercial.css";
import { Image } from 'antd';

function Commercial() {
    const [filter, setFilter] = useState("All");
    const Commercialitem = [
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/sharnam%20sq/1.jpg",
            title: "Sharnam Square",
            Client: "Sharnam Group",
            Location: " Khokhara, Ahmedabad",
            ProjectSize: "2,75,000 Sq. ft.",
            ProjectDescription: "1B+GF+02 Floor",
            ProjectYear: "2023 - Current",
            Architect: "99 Studio",
            StrConsultant: "Shreeji Consultant",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/Regalia2.jpeg",
            title: "REGALIA",
            Client: "Nakshtra Infraspace",
            Location: "GIFT City",
            ProjectSize: "5,00,000 Sq. ft.",
            ProjectDescription: "3B+GF+29 Floor",
            ProjectYear: "2022 - Current",
            Architect: "Neha Consultants",
            StrConsultant: "J W Consultants LLP",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, Flooring works.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/1-4.png",
            title: "FLEXONE",
            Client: "Collated Ventures",
            Location: "GIFT City",
            ProjectSize: "5,63,000 Sq. ft.",
            ProjectDescription: "3B+GF+28 Floor",
            ProjectYear: "2022-Current",
            Architect: "Studio ARA",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, Flooring works.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/1-5.JPEG",
            title: "SHARNAM METROLINK",
            Client: " Sharnam Group",
            Location: "Khokhara, Ahmedabad",
            ProjectSize: "4,91,000 Sq. ft.",
            ProjectDescription: "1B+GF+5/4 Floor",
            ProjectYear: " 2022-Current",
            Architect: "99 Studio",
            StrConsultant: "S3M Design Consultants LLP",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/devx/2.jpg",
            title: "DEVX",
            Client: "DevX",
            Location: " Ahmedabad",
            ProjectSize: "4,82,275 Sq. ft.",
            ProjectDescription: "3B+GF+11 Floor",
            ProjectYear: "2024-Current",
            Architect: "Upkrama Design LLP",
            StrConsultant: "Ducon Consultant Private Limited",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, LPS works.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/AdaniWilmarNew.png",
            title: "ADANI WILMAR HEADQUARTER",
            Client: "Adani Realty",
            Location: "Adani Shantigram, Ahmedabad",
            ProjectSize: "4,85,000 Sq. ft.",
            ProjectDescription: "3B+GF+08 Floor",
            ProjectYear: "2024-Current",
            Architect: "Eric Parry Architects",
            StrConsultant: "Ducon Consultant Private Limited.",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, LPS works..",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/UCC.png",
            title: "UNIVERSAL COMMERCIAL CAPITAL",
            Client: "UCC Infra",
            Location: "Adajan, Surat",
            ProjectSize: "3,26,615 Sq. ft",
            ProjectDescription: "3B+GF+11 Floor",
            ProjectYear: "2024-Current",
            Architect: "Tathastu Architects Surat",
            StrConsultant: "CBM Engineers",
            Scope: "RCC Frame works, Masonary & Plaster works.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/Citadel.png",
            title: "THE CITADEL",
            Client: " Magnastar Realty",
            Location: "Ahmedabad",
            ProjectSize: "7,12,279 Sq. ft",
            ProjectDescription: "3B+GF+19 Floor",
            ProjectYear: "2024-Current",
            Architect: "Architect Mansi Shah",
            StrConsultant: "Ducon Consultants Pvt Ltd",
            Scope: "RCC Frame works, Masonary & Plaster works.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/Regalia2.png",
            title: "Regalia 2",
            Client: "Nakshtra Infraspace",
            Location: "GIFT City",
            ProjectSize: "15,90,000 Sq. ft.",
            ProjectDescription: "5B+GF+28 Floor",
            ProjectYear: "2025 - Current",
            Architect: "ARK - Reza Kabul Architects Pvt. Ltd.",
            StrConsultant: "Sarjan Consultant",
            Scope: "RCC Frame works, Masonary, Plaster works, waterproofing, MEP work,Flooring works etc",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/ShivalikWave.png",
            title: "Shivalik Wave",
            Client: "Shivalik Group",
            Location: "Vaishnovdevi Circle, Ahmedabad",
            ProjectSize: "12,59,000 Sq. ft.",
            ProjectDescription: "3B+GF+29 Floor",
            ProjectYear: "2024-Current",
            Architect: "Apurva Amin",
            StrConsultant: "SN.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/UniversalMajesty.png",
            title: "The Majesty",
            Client: "Majesty Infra",
            Location: "Surat",
            ProjectSize: "6,39,000 Sq. ft.",
            ProjectDescription: "3B+GF+17 Floor",
            ProjectYear: "2025-Current",
            Architect: "Tathastu Architect Surat",
            StrConsultant: "CBM Engineers",
            Scope: "RCC Frame works, Masonary & Plaster work.",
            categry: "Ongoing",
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/WealthPicture.png",
            title: "Wealth City",
            Client: "Wealth City Devlopers",
            Location: "Surat",
            ProjectSize: "5,97,000 Sq. ft.",
            ProjectDescription: "3B+GF+11 Floor",
            ProjectYear: "2025-Current",
            Architect: "Tathastu Architect Surat",
            StrConsultant: "SNV Engineers",
            Scope: "Excavation work, RCC Frame works, Masonary & Plaster works.",
            categry: "Ongoing",
        },

        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/SharnamMetrolink.webp",
            title: 'Sharanam Metrolink',
            Client: 'Sharanam Metrolink LLP',
            Location: "Khokhara, Ahmedabad",
            ProjectSize: "4,91,032 Sq. ft.",
            ProjectDescription: ' 2 Floors, 12 Meters',
            ProjectYear: "2024",
            Architect: "99 Studio",
            StrConsultant: "Shreeji Consultant",
            Scope: "Civil Construction work of RCC Frame, Block & Plaster work, Flooring Work, painting Work, Fabrication work.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/ongoing/TheProfit.jpeg",
            imggallery: [
                { img: 'https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/TheProfit/Picture3.jpg' },
            ],
            title: 'THE PROFIT',
            Client: 'The Building Company',
            Location: "Surat",
            ProjectSize: "1,59,174 Sq. ft.",
            ProjectDescription: '2B+GF+10 Floor',
            ProjectYear: "2024",
            Architect: "Tathastu Architect Surat",
            StrConsultant: " SNV Engineers",
            Scope: "RCC Frame works, Masonary & Plaster works.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/1.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/Best%20photos/One%20Mall%20-%20Main.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG_20210315_184912.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0015.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0021.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0016.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0017.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/WhatsApp%20Image%202022-03-16%20at%2016.33.23%20(1).jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0013.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0014.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0018.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0019.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0020.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0021.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0022.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0023.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0024.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0028.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/IMG-20210508-WA0029.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/Best%20photos/One%20mall%20-%20Others/One%20Mall%20-1.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/Best%20photos/One%20mall%20-%20Others/One%20Mall%20-2.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/Best%20photos/One%20mall%20-%20Others/One%20Mall%20-3.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/Best%20photos/One%20mall%20-%20Others/One%20Mall%20-4.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ahmedabad%20One%20Alpha%20Mall/Best%20photos/One%20mall%20-%20Others/One%20Mall%20-5.jpeg" },
            ],
            title: 'Ahmedabad One Mall - Phase 2',
            Client: 'Nexus Mall',
            Location: "Ahmedabad",
            ProjectSize: " 2,00,000 Sq. ft.",
            ProjectDescription: '2B+GF+4 Floor',
            ProjectYear: "2022",
            Architect: "Bentel Associates",
            StrConsultant: " TPC Technical Projects Consultants",
            Scope: "RCC Frame works, Masonary, Plaster works & Structural Steel Work & Structural Retrofitting Work.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/2.png",
            imggallery: [
                { img: 'https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/kp%20epitome/1.jpg' },
            ],
            title: 'KP EPITOME',
            Client: 'KP Sanghvi Group',
            Location: "Ahmedabad",
            ProjectSize: "6,00,000 Sq. ft.",
            ProjectDescription: '2B+GF+14 Floor',
            ProjectYear: "2021",
            Architect: "99 Studio",
            StrConsultant: " P-Cube Consultant",
            Scope: "RCC Frame works, Masonary & Plaster works.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/13.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Bank%20Drone%20Photos/DJI_0240-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Bank%20Drone%20Photos/DJI_0250-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Bank%20Drone%20Photos/DJI_0196-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Bank%20Drone%20Photos/DJI_0045-min.JPG" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Bank%20Drone%20Photos/Sun%20West%20Bank%20-%201-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Bank%20Drone%20Photos/Sun%20West%20Bank%20-%20Main-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Bank%20Drone%20Photos/Sun%20West%20Bank%20-%202-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Bank%20Drone%20Photos/25-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Bank%20Drone%20Photos/26-min.jpg" },
            ],
            title: 'SUN WEST BANK',
            Client: 'Sun Builders',
            Location: "Ahmedabad",
            ProjectSize: "6,85,000 Sq. ft.",
            ProjectDescription: '3B+GF+13 Floor',
            ProjectYear: "2021",
            Architect: "HM Architect",
            StrConsultant: "SETU Infrastructure",
            Scope: "RCC Frame works, Masonary, Plaster works, waterproofing, MEP work, All finishing works etc.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/14.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9125-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9151-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9173-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9183-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9187-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9196-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9197-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9200-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9207-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9213-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9217-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9220-min.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Solitare/Jpg/IMG_9232-min.jpg" },
            ],
            title: 'SHARNAM SOLITAIRE',
            Client: 'Sharnam Group',
            Location: "Ahmedabad",
            ProjectSize: "2,25,000 Sq. ft.",
            ProjectDescription: '1B+GF+4 Floor',
            ProjectYear: "2021",
            Architect: "99 Studio",
            StrConsultant: "Millimeter Designs",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/5.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Smart%20Space/SH.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Smart%20Space/Main%20Photos/Sharnam%20Smart%20Space%20-%20Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Smart%20Space/Main%20Photos/Sharnam%20Smart%20Space%20-%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Smart%20Space/Main%20Photos/Sharnam%20Smart%20Space%20-%202.jfif" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Smart%20Space/Smart%20Space%202.jfif" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Smart%20Space/Smart%20Space%203.jfif" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Smart%20Space/Smart%20Space%204.jfif" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Smart%20Space/Smart%20Space%205.jfif" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sharnam%20Smart%20Space/Smart%20Space%206.jpg" },
            ],
            title: 'SHARNAM SMART SPACE',
            Client: 'Sharnam Group',
            Location: "Ahmedabad",
            ProjectSize: "4,25,000 Sq. ft.",
            ProjectDescription: '2B+GF+4 Floor',
            ProjectYear: "2019",
            Architect: "99 studio",
            StrConsultant: "Millimeter designs",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture12.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture%202.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture%203.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture%204.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture%205.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture%206.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture%207.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture%208.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture%209.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20D%20Block/Picture%2010.JPG" },
            ],
            title: 'West Gate - D Block',
            Client: 'Aadhan Builders',
            Location: "Ahmedabad",
            ProjectSize: "B+GF+23 Floor",
            ProjectDescription: '3B+GF+23 Floor',
            ProjectYear: "2019",
            Architect: "ADS Architects Pvt Ltd",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster works.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/shivalik-shilp2/2.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/shivalik-shilp2/2.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/shivalik-shilp2/1.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/shivalik-shilp2/Front.png" },
            ],
            title: 'SHIVALIK SHILP 2',
            Client: 'Shilp Developers',
            Location: "Ahmedabad",
            ProjectSize: "13 Floors, 48 Meters",
            ProjectDescription: '13 Floors, 48 Meters',
            ProjectYear: "2019",
            Architect: "INI Design Studio",
            StrConsultant: "Ducon Consultant Pvt Ltd",
            Scope: "RCC Frame works, Masonary & Plaster works.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ratnakar%20Nine%20Square/Ratnakar%20Nine%20-%20Main.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ratnakar%20Nine%20Square/2.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ratnakar%20Nine%20Square/3.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ratnakar%20Nine%20Square/4.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ratnakar%20Nine%20Square/1.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ratnakar%20Nine%20Square/Ratnakar%20Nine%20-%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Ratnakar%20Nine%20Square/Ratnakar%20Nine%20-%202.jpg" },
            ],
            title: 'RATNAAKAR NINE SQUARE',
            Client: 'Ratnakar Group',
            Location: "Ahmedabad",
            ProjectSize: "6,00,000 Sq. ft.",
            ProjectDescription: '3B+GF+13 Floor',
            ProjectYear: "2018",
            Architect: "ADS Architect Pvt Ltd",
            StrConsultant: "Ducon Consultant Pvt Ltd",
            Scope: "RCC Frame works, Masonary & Plaster works.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20Business%20Bay/Picture11.jpg",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20Business%20Bay/Picture%20-1.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20Business%20Bay/Picture%20-2.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20Business%20Bay/Picture%20-3.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20Business%20Bay/Picture%20-4.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20Business%20Bay/Picture%205.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/West%20Gate%20Business%20Bay/Picture%206.png" },
            ],
            title: 'West Gate Business Bay',
            Client: 'Aadhan Builders',
            Location: "Ahmedabad",
            ProjectSize: " 5,36,000 Sq. ft.",
            ProjectDescription: '3B+GF+16 Floor',
            ProjectYear: "2018",
            Architect: "ADS Architect Pvt Ltd",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster works.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/11.png",
            imggallery: [
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/Main%20photos/Sumel%208%20-%20Main.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/Main%20photos/Sumel%208%20-%201.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/Main%20photos/Sumel%208%20-%202.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/Main%20photos/Sumel%208%20-%203.jfif" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/Main%20photos/Sumel%208%20-%204.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/Main%20photos/5.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/1.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/2.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/4.jpg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/WhatsApp%20Image%202018-04-13%20at%203.29.00%20PM.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/WhatsApp%20Image%202018-04-13%20at%203.29.01%20PM.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/WhatsApp%20Image%202018-04-13%20at%203.29.10%20PM.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/WhatsApp%20Image%202018-04-13%20at%203.29.12%20PM.jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/WhatsApp%20Image%202018-04-13%20at%203.29.16%20PM%20(1).jpeg" },
                { img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/Sumel%208/WhatsApp%20Image%202018-04-13%20at%203.28.57%20PM%20(1).jpeg" },
            ],
            title: 'SUMEL 8',
            Client: 'HN Safal',
            Location: "Ahmedabad",
            ProjectSize: "16,00,000 Sq. ft.",
            ProjectDescription: '1B+GF+5 Floor',
            ProjectYear: "2017",
            Architect: "ADS Architect Pvt Ltd",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary, Plaster works, Waterproofing, All finishing works etc.",
            categry: 'Completed',
        },
        {
            img: "https://www.hitechprojects.co.in/Sources/images/prouctlist/commercial/completed/12.jpg",
            title: 'West Gate',
            Client: 'Aadhan Builders',
            Location: "Ahmedabad",
            ProjectSize: "5,00,000 Sq. ft.",
            ProjectDescription: '3B+GF+23/14 Floor',
            ProjectYear: "2014",
            Architect: "ADS Architects Pvt Ltd",
            StrConsultant: "N.K. Shah Consulting Engineers LLP",
            Scope: "RCC Frame works, Masonary & Plaster works.",
            categry: 'Completed',
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
                    {Commercialitem
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

export default Commercial
