import React, { useEffect } from 'react';
import './Loding.css';
import gsap from 'gsap';

function Loding() {
    useEffect(() => {
    const tl = gsap.timeline();

    // Ensure elements are mounted before animating
    requestAnimationFrame(() => {
        tl.fromTo(
            '.loader-logo',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
        ).to('.loader-container', {
            y: '-100%',
            duration: 1,
            delay: 0.5,
            ease: 'power2.inOut'
        });
    });
}, []);
    return (
        <div className="loader-container">
            <div className="loader-logo">HITE-CH</div>
        </div>
    );
}

export default Loding;