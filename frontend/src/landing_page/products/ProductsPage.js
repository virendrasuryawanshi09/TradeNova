import React from 'react'
import Navbar from '../Navbar';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Footer from '../Footer';
import Hero from './Hero';

function ProductsPage() {
    return ( 
        <>
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
        </>
     );
}

export default ProductsPage;