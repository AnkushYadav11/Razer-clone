import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cs from '../image/counter-strike-2-desktop2x.jpg'
const Csdragon = () => {
    return (
        <>
        <Navbar/>
        {/* Main page */}
        <div>
            <img src={Cs} alt="counter-strike" />
        </div>
        <Footer/>    
        </>
    );
}

export default Csdragon;
