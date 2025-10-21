import React from 'react';
import Icon from '../image/favicon.png';
import Cart from '../image/cart_icon.svg';
import Search from '../image/search.svg';
const Navbar = () => {
    return (
    <>
        <div>
            <div className="flex h-15 justify-center gap-14 text-gray-400">
                <img src={Icon} className='size-12 mt-1' alt="Icon"/>
                <ul className='flex gap-15 pt-4'>
                    <li>Store</li>
                    <li>PC</li>
                    <li>Console</li>
                    <li>Mobile</li>
                    <li>Furniture & Lifestyle</li>
                    <li>Gold & Sliver</li>
                    <li>Community</li>
                    <li>Support</li>
                </ul>
                <img src={Search} className='size-5 mt-5' alt="search" />
                <img src={Cart} className="size-5 mt-5" alt="cart" />
            </div>
        </div>
        <div className='flex justify-center bg-gray-600 p-3 border border-green-500'>
            <p>Razer Silver Rewards Giveaway: Join & win 500,000 Razer Silver to unlock elite gear. <a href=".">Join Now > </a></p>
        </div>
    </>
    );
}

export default Navbar;
