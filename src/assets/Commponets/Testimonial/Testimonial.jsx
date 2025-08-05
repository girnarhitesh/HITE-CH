import { text } from 'framer-motion/client';
import React from 'react';

function Testimonial() {
    const [activeKey, setActiveKey] = React.useState('0');

    const items = [
        {
            key: '0',
            name: 'Mr. Pilak Shah',
            position: 'Director, Harsha Engineers Ltd.',
            content: "Hitech's approach to construction is well-organized and systematic. Their commitment towards deliverables, quality and safety is commendable. Hitech has executed our past projects and we would like to be associated with the company for future projects too.",
            avatar: "PS"
        },
        {
            key: '1',
            name: 'Mr. Yash Brahmbhatt',
            position: 'Founder and CEO, Shilp Group',
            content: "Were happy with Hitech Projects Pvt Ltd for their exceptional work on the Shivalik Shilp 2 project. Their unwavering commitment to quality, safety, and punctuality, along with their teamwork and problem-solving skills, truly impressed us. Their internal monitoring system was key to the project's success. We wholeheartedly recommend Hitech for their outstanding contributions in the construction sector.",
            avatar: "YB"
        },
        {
            key: '2',
            name: 'Mr. Shaan Zaveri',
            position: 'Partner, Amaya Properties LLP',
            content: "Amaya historically constructed its own buildings. When we had to plan the execution strategy for our marquee, 70m tall residential building ONE49, we decided to evaluate contractors who were up to the challenge, would be able to construct the building as per our expectations within a tight timeline and without compromising safety or quality. After evaluating many candidates, we decided to award the contract to Hi Tech Projects Pvt. Ltd. Throughout the construction process, we found them to be professional and supportive. They deployed the required resources to ensure timely construction and paid close attention to safety and quality. They worked closely with our PMC team to work as 'One Team'. We are pleased with the positive attitude and commitments shown by the promoters of the company throughout the construction process. We would be pleased to work with them in the future and happy to recommend them to anyone who is looking to construct quality buildings.",
            avatar: "SZ"
        },
        {
            key: '3',
            name: "Mr. Kamal Singal",
            position: "MD and CEO, Arvind Smartspaces Ltd.",
            content: "We are very happy with the services provided by Hitech at our project Aavishkaar in Ahmedabad. They have been performing very well on all aspects of the development, be it quality, safety, or timeliness of delivery. What differentiates Hitech from other contractors is that they have a very professional way of working. They have experienced employees on site with cooperative and positive attitude. They have extensive MIS systems to track and manage work. They have established comprehensive systems/ processes such as regular training of workers, logistics plans, regular housekeeping etc. We highly recommend Hitech and wish them best for their future endeavours.",
            avatar: "KS"
        },
        {
            key: '4',
            name: "Mr. Deep Patel",
            position: "Director, Sun Builders",
            content: "No doubt, one of the best civil contracting firm in Gujarat. Technical expertise, Quality construction, well trained staff, organized set-up and emphasis on safety are few of their plus points. For us they are not only contractors but are like our core construction partners. Happy and pleased to be working together.",
            avatar: "DP"
        }
    ];

    const toggleAccordion = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <section style={styles.section}>
            <div className='sectionpadding'>
                <div style={styles.container}>
                    <div style={styles.headerContainer}>
                        <div style={styles.titleWrapper}>
                            {/* <span style={styles.subtitle}>What Our Clients Say</span> */}
                            <h1 style={styles.title}>Testimonials</h1>
                            <div style={styles.titleUnderline}></div>
                        </div>
                        {/* <p style={styles.description}>
                            Discover why leading construction companies and developers trust us with their most important projects.
                        </p> */}
                    </div>

                    <div style={styles.testimonialsGrid}>
                        {items.map((item, index) => (
                            <div
                                key={item.key}
                                style={{
                                    ...styles.testimonialCard,
                                    ...(activeKey === item.key ? styles.activeCard : {})
                                }}
                                onClick={() => toggleAccordion(item.key)}
                            >
                                <div style={styles.cardHeader}>
                                    <div style={styles.avatarSection}>
                                        <div style={styles.avatar}>
                                            {item.avatar}
                                        </div>
                                        <div key={index} style={styles.clientInfo}>
                                            <h3 style={styles.clientName}>{item.name}</h3>
                                            <p style={styles.clientPosition}>{item.position}</p>
                                        </div>
                                    </div>
                                    <div style={{
                                        ...styles.expandIcon,
                                        transform: activeKey === item.key ? 'rotate(45deg)' : 'rotate(0deg)'
                                    }}>
                                        +
                                    </div>
                                </div>

                                <div style={{
                                    ...styles.contentWrapper,
                                    maxHeight: activeKey === item.key ? '1000px' : '0',
                                    opacity: activeKey === item.key ? '1' : '0'
                                }}>
                                    <div style={styles.quoteIcon}>"</div>
                                    <p style={styles.testimonialContent}>
                                        {item.content}
                                    </p>
                                    <div style={styles.rating}>
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} style={styles.star}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    {/* <div style={styles.statsSection}>
                        <div style={styles.statItem}>
                            <div style={styles.statNumber}>500+</div>
                            <div style={styles.statLabel}>Happy Clients</div>
                        </div>
                        <div style={styles.statItem}>
                            <div style={styles.statNumber}>15+</div>
                            <div style={styles.statLabel}>Years Experience</div>
                        </div>
                        <div style={styles.statItem}>
                            <div style={styles.statNumber}>1000+</div>
                            <div style={styles.statLabel}>Projects Completed</div>
                        </div>
                        <div style={styles.statItem}>
                            <div style={styles.statNumber}>99%</div>
                            <div style={styles.statLabel}>Client Satisfaction</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
    },

    headerContainer: {
        textAlign: 'center',
        marginBottom: '60px'
    },
    titleWrapper: {
        marginBottom: '20px'
    },
    subtitle: {
        fontSize: '16px',
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '500',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        display: 'block',
        marginBottom: '10px'
    },
    title: {
        fontSize: '48px',
        fontWeight: 'bold',
        color: 'white',
        margin: '0 0 20px 0',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        fontFamily: "'Georgia', serif",
        // display:"flex"
        
    },
    titleUnderline: {
        width: '100px',
        height: '4px',
        background: 'linear-gradient(90deg, #ffd700, #ffed4e)',
        margin: '0 auto',
        borderRadius: '2px',
              
    },
    description: {
        fontSize: '18px',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: '1.6'
    },
    testimonialsGrid: {
        display: 'grid',
        // gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '25px',
        marginBottom: '60px'
    },
    testimonialCard: {
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '2px solid transparent',
        position: 'relative',
        overflow: 'hidden'
    },
    activeCard: {
        transform: 'translateY(-5px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        border: '2px solid #667eea'
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },
    avatarSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
    },
    avatar: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
    },
    clientInfo: {
        flex: 1
    },
    clientName: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#1a202c',
        margin: '0 0 5px 0'
    },
    clientPosition: {
        fontSize: '14px',
        color: '#666',
        margin: 0,
        fontStyle: 'italic'
    },
    expandIcon: {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        textAlign:"center"
    },
    contentWrapper: {
        transition: 'all 0.5s ease',
        overflow: 'hidden'
    },
    quoteIcon: {
        fontSize: '60px',
        color: '#667eea',
        fontFamily: 'Georgia, serif',
        lineHeight: '1',
        marginBottom: '15px',
        opacity: 0.3
    },
    testimonialContent: {
        fontSize: '16px',
        lineHeight: '1.7',
        color: '#4a5568',
        marginBottom: '20px',
        fontStyle: 'italic'
    },
    rating: {
        display: 'flex',
        gap: '3px',
        marginBottom: '10px'
    },
    star: {
        color: '#ffd700',
        fontSize: '18px'
    },
    statsSection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '40px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    statItem: {
        textAlign: 'center'
    },
    statNumber: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '10px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    statLabel: {
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.8)',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    }
};

// Add responsive styles



// Add the media queries to the document
// if (typeof document !== 'undefined') {
//     const style = document.createElement('style');
//     style.textContent = mediaQueries;
//     document.head.appendChild(style);
// }

export default Testimonial;