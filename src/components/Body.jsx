import React from 'react';
import {Link} from 'react-router-dom';
import Bg from '../image/razer-huntsman-v3-pro-8khz-line-homepage-desktop2x.jpg';

const Body = () => {
    return (

        <>
        <Link to="/">
        <div className="bg-cover bg-center h-175 relative" style={{ backgroundImage: `url(${Bg})` }}>
            
            <div className='text-center pt-11'>
            <h1 className='text-[53px] font-semibold'>RAZER HUNTSMAN V3 PRO 8KHZ LINE</h1>
            <h3 className='text-[28px]'>FOR THE PRO</h3>
            <Link to="/" className='pr-7 text-[22px]'>Learn More</Link>
            <Link to="/" className='pl-5 text-[22px]'>Buy </Link>
            </div>

        </div>  
        </Link>
        </>
    );
}

export default Body;
