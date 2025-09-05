import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

import Hero from './Hero';
import CreateTickit from './CreateTickit'

function SupportPage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <CreateTickit />
            <Footer />
        </>
     );
}

export default SupportPage;