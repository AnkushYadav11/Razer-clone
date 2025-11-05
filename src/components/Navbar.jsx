import React from "react";
import './Navbar.css';
import Icon from "../image/favicon.png";
import Cart from "../image/cart_icon.svg";
import Search from "../image/search.svg";
const Navbar = () => {
  return (
    <>
      <div className="h-15">
        <div className="flex h-15 justify-center gap-15 text-gray-400 border border-black border-b-green-500 bg-black fixed w-full">
          <img src={Icon} className="size-12 mt-1" alt="Icon" />
          <ul className="flex gap-15 pt-4">
            
            <li className="parent">Store
            <div className="child">
              <div>
              <ul className="flex flex-col gap-5 overflow-y-scroll h-[30em]">
              <h1>Explore</h1>
                <li>Shop The Latest In Razer</li>
                <li>Only at Razer</li>
                <li>Laptops & Accessories</li>
                <li>Mice</li>
                <li>Mats</li>
                <li>Keyboards</li>
                <li>Controllers</li>
                <li>Audio</li>
                <li>Chairs</li>
                <li>Content Creation</li>
                <li>Gamer Room</li>
                <li>Apparel & Gear</li>
                <li>More</li>
              </ul>
              </div>
              <div>
                <h1>More About</h1>
                <ul>
                  <li>Help</li>
                  <li>FAQ</li>
                  <li>Returns and Refunds</li>
                  <li>Shipping Guide</li>
                  <li>Razer Advantage</li>
                </ul>
              </div>
            </div>

            </li>
            <li>
              PC
            </li>
            
            <li>Console</li>
            <li>Mobile</li>
            <li>Furniture & Lifestyle</li>
            <li>Gold & Sliver</li>
            <li>Community</li>
            <li>Support</li>
          </ul>
          <img src={Search} className="size-4 mt-5" alt="search" />
          <img src={Cart} className="size-5 mt-5" alt="cart" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
