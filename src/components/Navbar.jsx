import React from 'react';
import Icon from '../image/favicon.png';
import Cart from '../image/cart_icon.svg';
import Search from '../image/search.svg';
const Navbar = () => {
    return (
    <>
        <div>
            <div className="flex h-15 justify-center gap-12 text-gray-400 border border-black border-b-green-500 bg-black">
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
    </>
    );
}

export default Navbar;
