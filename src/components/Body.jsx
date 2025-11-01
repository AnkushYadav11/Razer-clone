import React from 'react';
import {Link} from 'react-router-dom';

// Background images
import Banner from '../image/razer-huntsman-v3-pro-8khz-line-homepage-desktop2x.jpg';
import Halloween from '../image/razer-halloween-2025-homepage-desktop2x.jpg';
import Green from '../image/razer-blade-and-arc-raiders-b-950x580-desktop.jpg';

// Card images
import Counter_strike from '../image/counter-strike-2-desktop2x.jpg';
import Raiju from '../image/razer-raiju-v3-pro-950x580-desktop.jpg';
import Razer_blade from '../image/razer-blade-fall-specials-950x580-desktop.jpg';
import Phantom from '../image/razer-phantom-white-homepage-desktop-2x.jpg';
import Kuromi from '../image/kuromi-birthday-homepage-b-desktop.jpg';
import Blade from '../image/razer-blade-and-arc-raiders-b-950x580-deskto.jpg';
import Anni from '../image/razer-20th-anni-b-950x580-desktop.jpg';
import Arrow from '../image/arrow.png';

const Body = () => {
    return (
        <>

        {/* Home banner */}
        <Link to="/">
        <div className="bg-cover bg-center h-175 mb-3" style={{ backgroundImage: `url(${Counter_strike})` }}>
            <div className='text-center pt-11'>
            <h1 className='text-[53px] font-semibold'>RAZER | COUNTER-STRIKE 2</h1>
            <h3 className='text-[28px]'>SUMMON THE DRAGON LORE</h3>
            <Link to="/" className='text-[22px] mr-4 hover:underline'>Learn more<span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
            <Link to="/" className='text-[22px] ml-5 hover:underline'>Buy<span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
            </div>
        </div>  
        </Link>

        {/* Second banner */}
        <Link to="/">
        <div className="bg-cover bg-center h-175 mb-3" style={{ backgroundImage: `url(${Halloween})` }}>
            <div className='text-center pt-11'>
            <h1 className='text-[53px] font-semibold'>HALLOWEEN SPACIALS</h1>
            <h3 className='text-[28px]'>SPOOKTACULAR DROP AWAIT</h3>
            <Link to="/" className='text-[22px] hover:underline'>Shop Now <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
            </div>
        </div>  
        </Link>

        <Link to="/">
        <div className="bg-cover bg-center h-175 mb-3" style={{ backgroundImage: `url(${Banner})` }}>
            <div className='text-center pt-10'>
            <h1 className='text-[55px] font-semibold'>RAZER HUNTSMAN V3 PRO 8KHZ LINE</h1>
            <h3 className='text-[27px]'>FOR THE PRO</h3>
            <Link to="/" className='pr-3 text-[22px] hover:underline'>Learn More <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
            <Link to="/" className='pl-3 text-[22px] hover:underline'>Buy <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
            </div>
        </div>  
        </Link>
        {/* third banner */}
        <Link to="/">
        <div className="bg-cover bg-center h-175 mb-3" style={{ backgroundImage: `url(${Green})` }}>
            <div className='text-center pt-11'>
                <span className='bg-orange-400 text-black font-bold pl-2 pr-2 text-[14px]'>ONLY AT RAZER</span>
            <h1 className='text-[53px] font-semibold'>RAZER ESPORTS GREEN COLLECATION</h1>
            <h3 className='text-[28px]'>GREEN IS THE NEW BLACK</h3>
            <Link to="/" className='pr-3 text-[22px] hover:underline'>Learn More <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
            <Link to="/" className='pl-3 text-[22px] hover:underline'>Buy <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
            </div>
        </div>  
        </Link>

        <div className='grid grid-cols-2 gap-3 [&>*]:h-[35em] [&>*]:bg-cover [&>*]:bg-center [&>*]:bg-no-repeat mb-3'>
            
            <div style={{backgroundImage : `url(${Raiju})`}}>
                <div className='mt-10 [&>*]:text-center [&>*]:font-semibold'>
                    <h1 className='text-[2.5em]'>RAZER RAIJU V3 PRO</h1>
                    <h2 className='text-[20px]'>FOR THE PRO</h2>
                    
                    <div className='flex justify-center gap-5 [&>*]:text-[18px]'>
                    <Link to="/" className='text-center hover:underline'>Learn More <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
                    <Link to="/" className='hover:underline'>Notify Me <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
                    </div>                    
                </div>
            </div>

            <div style={{backgroundImage : `url(${Razer_blade})`}}>
                <div className='mt-10 [&>*]:text-center [&>*]:font-semibold'>
                    <h1 className='text-[2.5em]'>EARLY HOLIDAY SPECIALS:UNLOCKED</h1>
                    <h2 className='text-[20px]'>UP TO $700 OFF SELECT REZER BLADES</h2>
                    <div className='flex justify-center gap-5 [&>*]:text-[18px]'>
                    <Link to="/" className='hover:underline'>Shop Now <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
                    </div>
                </div>
            </div>
            
            <div style={{backgroundImage : `url(${Phantom})`}}>
                <div className='mt-10 [&>*]:text-center [&>*]:font-semibold'>
                    <h1 className='text-[2.5em]'>RAZER PHANTOM WHITE COLLECTION</h1>
                    <h2 className='text-[20px]'>WITNESS TRUE DESIGN BROUGHT TO LIGHT</h2>
                    <div className='flex justify-center gap-5 [&>*]:text-[18px]'>
                    <Link to="/" className='hover:underline'>Learn More <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
                    <Link to="/" className='hover:underline'>Buy <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
                    </div>
                </div>
            </div>
            
            <div style={{backgroundImage : `url(${Kuromi})`}}>
                <div className='mt-10 [&>*]:text-center [&>*]:font-semibold'>
                    <h1 className='text-[2.5em]'>RAZER | KUROMI</h1>
                    <h2 className='text-[20px]'>UNLEASH CUTE CHAOS</h2>
                    <div className='flex justify-center gap-5 [&>*]:text-[18px]'>
                    <Link to="/" className='hover:underline'>Learn More <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
                    </div>
                </div>
            </div>
            
            <div style={{backgroundImage : `url(${Blade})`}}>
                <div className='mt-10 [&>*]:text-center [&>*]:font-semibold'>
                    <h1 className='text-[2.5em]'>RAID READY</h1>
                    <h2 className='text-[20px]'>GET ARC RAIDERS WITH SELECT RAZER BLADES</h2>
                    <div className='flex justify-center gap-5 [&>*]:text-[18px]'>
                    <Link to="/" className='hover:underline'>Learn More <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
                    </div>
                </div>
            </div>
            
            <div style={{backgroundImage : `url(${Anni})`}}>
                <div className='mt-10 [&>*]:text-center [&>*]:font-semibold'>
                    <h1 className='text-[2.5em]'>20TH ANNIVERSARY</h1>
                    <h2 className='text-[20px]'>FOR GAMERS. BY GAMERS.</h2>
                    <div className='flex justify-center gap-5 [&>*]:text-[18px]'>
                    <Link to="/" className='hover:underline'>Learn More <span><img src={Arrow} alt="arrow-key" className='inline size-[15px]' /></span></Link>
                    </div>
                </div>
            </div>
        </div>  
        </>
    );
}

export default Body;