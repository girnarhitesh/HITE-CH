import React from 'react';
import Hero from './Hero/Hero';
import Achivment from './OurAchivment/Achivment';
import Gallery from './imgGallery/Gallery';

function AllHomepage() {
    return (
        <div>
            <Hero />
            <Achivment/>
            <Gallery/>
        </div>
    );
}

export default AllHomepage;