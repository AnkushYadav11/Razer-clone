import React from "react";
import "./Csdragon.css";
import { Link } from "react-router-dom";
import Cs from "../image/counter-strike-2-desktop2x.jpg";
import Video from "../image/razer-cs2-legendary-1920x1080.mp4";
import Mouse from "../image/razer-cs2-viper-v3pro-1920x700.webp";
import Keyboard from "../image/razer-cs2-huntsman-v3pro-tkl-1920x700.webp";
import Headphone from "../image/razer-cs2-bsv3pro-1920x700.webp";
import Pad from "../image/razer-cs2-ggv2l-1920x700.webp";
import Chair from "../image/razer-cs2-iskur-v2x-1920x700.webp";

import Mouse_dragon from "../image/dragon-mouse.png";
import Keyboard_dragon from '../image/dragon-keyboard.png';
import Chair_dragon from '../image/dragon-chair.png';
import Headphone_dragon from '../image/dragon-headphone.png';
import Sign_mouse from "../image/signedmouse.png";

const Csdragon = () => {
  return (
    <>
      {/* Main page */}
      <img src={Cs} alt="counter-strike" />

      <div className="text-center p-5 text-green-500">
        <div>
          <h1 className="text-[60px] font-bold text-yellow-200 text-center">
            SUMMON THE DRAGON LORE
          </h1>
          <p className="text-center text-[18px] text-gray-400 w-240 ml-70">
            The lore is reborn—infused with the #1 esports gear most used by
            pros. From the Cobblestone box to your setup, bring the elusive aura
            of the Dragon Lore to your loadout with the Razer | Counter-Strike 2
            Collection, co-engineered with pros to help you pull off ace, after
            ace, after ace.
          </p>
        </div>

        <div className="text-center p-5 text-green-500">
          <h1 className="text-[60px] font-bold text-yellow-200 text-center">
            MAKE EVERY PLAY LEGENDARY
          </h1>
          <p className="text-center text-[18px] text-gray-400 w-240 ml-70">
            The dragon awakens—and answers to you. Inspired by the most coveted
            skin in Counter-Strike history, our CS2 collab is a tribute to the
            fearless, the methodical, and the elite few who summon myth to life
            with every flawless play.
          </p>
        </div>
      </div>

      <div>
        <video
          src={Video}
          controls={false}
          autoPlay
          muted
          className="w-[85%] ml-30"
        />
      </div>

      <div className="text-center p-5 text-green-500">
        <h1 className="text-[60px] font-bold text-yellow-200 text-center">
          RAZER VIPER V3 PRO
          <br />
          COUNTER-STRIKE 2 EDITION
        </h1>
        <p className="text-center text-[18px] text-gray-400 w-240 ml-70">
          Achieve faster flicks and precise headshots with a 54 g symmetrical
          wireless gaming mouse designed for optimal balance, featuring a true
          8000 Hz wireless polling rate, Focus Pro 35K Optical Sensor Gen-2, and
          Optical Mouse Switches Gen-3.
        </p>
      </div>

      <img src={Mouse} alt="Dragon Mouse" />

      <div className="text-center p-5 text-green-500">
        <h1 className="tracking-normal word-spacing-[1em] text-[60px] font-bold text-yellow-200 text-center">
          RAZER HUNTSMAN V3 PRO TKL
          <br />
          COUNTER-STRIKE 2 EDITION
        </h1>
        <p className="text-center text-[18px] text-gray-400 w-240 ml-70">
          Dominate every round with a high-performance gaming keyboard featuring
          Razer Analog Optical Switches Gen-2. Enhance your in-game movement and
          precision with ultra-fast repeated inputs enabled by Rapid Trigger
          Mode. Play your way with adjustable actuation from 0.1 to 4 mm.
        </p>
        <Link>Buy Now</Link>
      </div>

      <img src={Keyboard} alt="Dragon Keyboard" />

      <div className="text-center p-5 text-green-500">
        <h1 className="text-[60px] font-bold text-yellow-200 text-center">
          RAZER BLACKSHARK V3 PRO
          <br />
          COUNTER-STRIKE 2 EDITION
        </h1>
        <p className="text-center text-[18px] text-gray-400 w-240 ml-70">
          From a HyperClear Super Wideband Mic to pro-tuned CS2 audio profiles,
          pick up on every audio cue and eliminate all distractions with a
          multi-award-winning wireless PC gaming headset designed for supreme
          clarity, comfort, and noise isolation.
        </p>
        <Link>Buy</Link>
      </div>

      <img src={Headphone} alt="Dragon HeadPhone" />

      <div className="text-center p-5 text-green-500">
        <h1 className="text-[60px] font-bold text-yellow-200 text-center">
          RAZER GIGANTUS V2 L<br />
          COUNTER-STRIKE 2 EDITION
        </h1>
        <p className="text-center text-[18px] text-gray-400 w-240 ml-70">
          Aim true with a soft mouse mat optimized for ultra-smooth glides and
          pixel-precise control.
        </p>
        <p className="text-center text-[18px] text-gray-400">
          Mouse and mouse mat sold as bundle.
        </p>
        <Link>Buy Now</Link>
      </div>

      <img src={Pad} alt="Dragon Pad" />

      <div className="text-center p-5 text-green-500">
        <h1 className="text-[60px] font-bold text-yellow-200 text-center">
          RAZER ISKUR V2 X<br />
          COUNTER-STRIKE 2 EDITION
        </h1>
        <p className="text-center text-[18px] text-gray-400 w-240 ml-70">
          Play at your peak from the first match to the last with an ergonomic
          esports gaming chair designed for long-lasting support.
        </p>
        <Link className="text-green-500">Pre-Order</Link>
      </div>

      <img src={Chair} alt="Dragon Chair" />

{/* Cars bar */}

<div className="flex justify-center mt-33">
      <div className="w-[77em] p-2 grid grid-cols-4 gap-4">
        
        <div className="w-73">
          <img src={Sign_mouse} alt="Sign Mouse" className="bg-[#141414] w-full h-70" />
          <div className="bg-[#222]">
            <p  className="text-[20px] p-5 pb-2">Razer Viper V3 Pro - Black</p>
            <p className="text-gray-500 p-5 pt-0">Ultra-lightweight Symmetrical Wireless Gaming Mouse for Pro Esports</p>
            <div className="flex justify-between p-3 mt-13">
              <p>US$159.99</p>
              <button className="bg-[#44d62c] text-black font-bold w-[9em] rounded text-[13px]">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="w-73">
          <img src={Mouse_dragon} alt="Dragon mouse" className="bg-[#141414] w-full h-70" />
          <div className="bg-[#222]">
            <p  className="text-[20px] p-5 pb-2">Razer Viper V3 Pro - Black</p>
            <p className="text-gray-500 p-5 pt-0">Ultra-lightweight Symmetrical Wireless Gaming Mouse for Pro Esports</p>
            <div className="flex justify-between p-3 mt-13">
              <p>US$159.99</p>
              <button className="bg-[#44d62c] text-black font-bold w-[9em] rounded text-[13px]">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="w-73">
          <img src={Keyboard_dragon} alt="Dragon Keyboard" className="bg-[#141414] w-full h-70" />
          <div className="bg-[#222]">
            <p  className="text-[20px] p-5 pb-2">Razer Viper V3 Pro - Black</p>
            <p className="text-gray-500 p-5 pt-0">Ultra-lightweight Symmetrical Wireless Gaming Mouse for Pro Esports</p>
            <div className="flex justify-between p-3 mt-13">
              <p>US$159.99</p>
              <button className="bg-[#44d62c] text-black font-bold w-[9em] rounded text-[13px]">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="w-73">
          <img src={Headphone_dragon} alt="Dragon Headphone" className="bg-[#141414] w-full h-70" />
          <div className="bg-[#222]">
            <p  className="text-[20px] p-5 pb-2">Razer Viper V3 Pro - Black</p>
            <p className="text-gray-500 p-5 pt-0">Ultra-lightweight Symmetrical Wireless Gaming Mouse for Pro Esports</p>
            <div className="flex justify-between p-3 mt-13">
              <p>US$159.99</p>
              <button className="bg-[#44d62c] text-black font-bold w-[9em] rounded text-[13px]">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="w-73 ml-[30em]">
          <img src={Chair_dragon} alt="Dragon Chair" className="bg-[#141414] w-full h-70" />
          <div className="bg-[#222]">
            <p  className="text-[20px] p-5 pb-2">Razer Viper V3 Pro - Black</p>
            <p className="text-gray-500 p-5 pt-0">Ultra-lightweight Symmetrical Wireless Gaming Mouse for Pro Esports</p>
            <div className="flex justify-between p-3 mt-13">
              <p>US$159.99</p>
              <button className="bg-[#44d62c] text-black font-bold w-[9em] rounded text-[13px]">ADD TO CART</button>
            </div>
          </div>
        </div>
</div>
      </div>
    </>
  );
};

export default Csdragon;
