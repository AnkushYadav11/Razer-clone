import React from 'react';
import Facebook from '../image/SM0001-facebook-grey.svg';
import Instagram from '../image/SM0003-instagram-grey.svg';
import Threads from '../image/threads-grey.svg';
import Twitter from '../image/SM0005-twitter-grey.svg';
import Youtube from '../image/SM0008-youtube-grey.svg';
import Tiktok from '../image/SM0014-tiktok-grey.svg';
import Twitch from '../image/SM0009-twitch-grey.svg';
import Discord from '../image/discord-grey.svg';


const Footer = () => {
    return (
        <>
        <div className='flex justify-center h-[25em] pl-40 pr-40 bg-[#222]-500 pt-10'>
            <div className='w-[70%] grid grid-cols-5 gap-5'>
                <ul className='[&>*]:mb-3 text-gray-400 [&>*]:text-[12px]'>
                    <li className='text-white text-[13px]'>Shop</li>
                    <li>RazerStores</li>
                    <li>RazerCafe</li>
                    <li>Store Locator</li>
                    <li>Purchase Programs</li>
                    <li>Bulk Order Program</li>
                    <li>Education</li>
                    <li>Only at Razer</li>
                    <li>Razer Silver Rewards</li>
                    <li>Affiliate</li>
                    <li>Newsletter</li>
                </ul>
                <ul className='[&>*]:mb-3 text-gray-400 [&>*]:text-[12px]'>
                    <li className='text-white text-[13px]'>Explore</li>
                    <li>Technology</li>
                    <li>Chrome RGB</li>
                    <li>Concepts</li>
                    <li>Esports</li>
                    <li>Collabs</li>
                </ul>
                <ul className='[&>*]:mb-3 text-gray-400 [&>*]:text-[12px]'>
                    <li className='text-white text-[13px]'>Support</li>
                    <li>Get Help</li>
                    <li>Registration &<br/>Warranty</li>
                    <li>RazerStore Support</li>
                    <li>RazerCare</li>
                    <li>Manage Razer ID</li>
                    <li>Support Videos</li>
                    <li>Recycling Program</li>
                    <li>Accessibility<br/>Statement</li>
                </ul>
                <ul className='[&>*]:mb-3 text-gray-400 [&>*]:text-[12px]'>
                    <li className='text-white text-[13px]'>Company</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>zVetures</li>
                    <li>Contact Us</li>
                    <li>AI Gaming<br/>Newsletter</li>
                </ul>
                <ul className='[&>*]:mb-3 text-gray-400 [&>*]:text-[13px]'>
                    <li className='text-white text-[13px]'>Follow Us</li>
                    <li className='[&>*]:size-[30px]'>
                    <img src={Facebook} alt="Facebook" />
                    <img src={Instagram} alt="Instagram" />
                    <img src={Threads} alt="threads" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={Youtube} alt="Youtube" />
                    <img src={Tiktok} alt="Tiktok" />
                    <img src={Twitch} alt="Twitch" />
                    <img src={Discord} alt="Discord" />
                    </li>
                </ul>
            </div>
            <div className='w-[30%] text-center text-green-600 text-[14px]'>
                <h1>FOR GAMERS. BY GAMERS. <sup>TM</sup></h1>
            </div>

            
        </div>
        <div className='border ml-40 flex justify-center border-gray-500 w-[80%]'>
        </div>
        
        <div>
                <ul className=' ml-40 m-3 text-[13px] text-gray-400 flex gap-5 '>
                    <li>Copyright © 2025 Razer Inc. All rights reserved.</li>
                    <li> Site Map</li> |
                    <li>Legal Terms</li> |
                    <li>Privacy Policy</li> |
                    <li>Cookie Policy</li>
                </ul>

            </div>  
        </>
    );
}

export default Footer;
