import React from "react";
import { Link } from "react-router-dom";

// Background images
import Holiday from "../image/holiday-gift-guide-2025-homepage-large-2x.webp";

// import Green from "../image/razer-blade-and-arc-raiders-b-950x580-desktop.jpg";

// Card images
import Huntsman from "../image/razer-huntsman-v3-pro-8khz-line-homepage-desktop2x.jpg";
import Counter_strike from "../image/counter-strike-2-desktop2x.jpg";
import Blade from "../image/razer-blade-fall-specials-950x580-desktop.jpg";
import Razer_blade from "../image/intel-holiday-bundle-b-950x580-desktop.webp";
import Joola from "../image/razer-and-joola-b-950x580-desktop.webp";
import Running_man from "../image/the-running-man-b-950x580-desktop.webp";
import Skins from "../image/iphone17-skins-b-950x580-desktop.webp";
import Anni from "../image/razer-20th-anni-b-950x580-desktop.jpg";
import Arrow from "../image/arrow.png";

const Body = () => {
  return (
    <>
      <Link to="/">
        <div
          className="bg-cover bg-center h-175 mb-3"
          style={{ backgroundImage: `url(${Holiday})` }}
        >
          <div className="text-center pt-11">
            <h1 className="text-[53px] font-semibold">RAZER HOLIDAY GIFY GUIDE</h1>
            <h3 className="text-[28px]">SLEIGH YOUR GIFTING GAME</h3>
            <Link to="/" className="text-[22px] hover:underline">
              Shop Now{" "}
              <span>
                <img
                  src={Arrow}
                  alt="arrow-key"
                  className="inline size-[15px]"
                />
              </span>
            </Link>
          </div>
        </div>
      </Link>

      {/* Home banner */}
      <Link to="/">
        <div
          className="bg-cover bg-center h-175 mb-3"
          style={{ backgroundImage: `url(${Counter_strike})` }}
        >
          <div className="text-center pt-11">
            <h1 className="text-[53px] font-semibold">
              RAZER | COUNTER-STRIKE 2
            </h1>
            <h3 className="text-[28px]">SUMMON THE DRAGON LORE</h3>
            <Link to="/" className="text-[22px] mr-4 hover:underline">
              Learn more
              <span>
                <img
                  src={Arrow}
                  alt="arrow-key"
                  className="inline size-[15px]"
                />
              </span>
            </Link>
            <Link to="/" className="text-[22px] ml-5 hover:underline">
              Buy
              <span>
                <img
                  src={Arrow}
                  alt="arrow-key"
                  className="inline size-[15px]"
                />
              </span>
            </Link>
          </div>
        </div>
      </Link>

      <Link to="/">
        <div
          className="bg-cover bg-center h-175 mb-3"
          style={{ backgroundImage: `url(${Blade})` }}
        >
          <div className="text-center pt-10">
            <h1 className="text-[55px] font-semibold">
              BLACK FRIDAY EARLY EXCLUSIVE
            </h1>
            <h3 className="text-[27px]">UNLOCK $1000 OFF SELECT RAZER BLADES</h3>
            <Link to="/" className="pr-3 text-[22px] hover:underline">
              Shop Now{" "}
              <span>
                <img
                  src={Arrow}
                  alt="arrow-key"
                  className="inline size-[15px]"
                />
              </span>
            </Link>
          </div>
        </div>
      </Link>
      
      {/* third banner */}
      
      {/* <Link to="/">
        <div
          className="bg-cover bg-center h-175 mb-3"
          style={{ backgroundImage: `url(${Green})` }}
        >
          <div className="text-center pt-11">
            <span className="bg-orange-400 text-black font-bold pl-2 pr-2 text-[14px]">
              ONLY AT RAZER
            </span>
            <h1 className="text-[53px] font-semibold">
              RAZER ESPORTS GREEN COLLECATION
            </h1>
            <h3 className="text-[28px]">GREEN IS THE NEW BLACK</h3>
            <Link to="/" className="pr-3 text-[22px] hover:underline">
              Learn More{" "}
              <span>
                <img
                  src={Arrow}
                  alt="arrow-key"
                  className="inline size-[15px]"
                />
              </span>
            </Link>
            
            <Link to="/" className="pl-3 text-[22px] hover:underline">
              Buy{" "}
              <span>
                <img
                  src={Arrow}
                  alt="arrow-key"
                  className="inline size-[15px]"
                />
              </span>
            </Link>
          </div>
        </div>
      </Link> */}

      <div className="grid grid-cols-2 gap-3 [&>*]:h-[35em] [&>*]:bg-cover [&>*]:bg-center [&>*]:bg-no-repeat mb-3">
        <div style={{ backgroundImage: `url(${Huntsman})` }}>
          <div className="mt-10 [&>*]:text-center [&>*]:font-semibold">
            <h1 className="text-[2.5em]">RAZER HUNSTMAN V3 PRO<br/>8KHZ</h1>
            <h2 className="text-[20px]">FOR THE PRO</h2>

            <div className="flex justify-center gap-5 [&>*]:text-[18px]">
              <Link to="/" className="text-center hover:underline">
                Learn More{" "}
                <span>
                  <img
                    src={Arrow}
                    alt="arrow-key"
                    className="inline size-[15px]"
                  />
                </span>
              </Link>
              <Link to="/" className="hover:underline">
                Notify Me{" "}
                <span>
                  <img
                    src={Arrow}
                    alt="arrow-key"
                    className="inline size-[15px]"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${Razer_blade})` }}>
          <div className="mt-10 [&>*]:text-center [&>*]:font-semibold">
            <h1 className="text-[2.5em]">RAZER BLADE 18</h1>
            <h2 className="text-[20px]">INTEL HOLIDAY BUNDLE</h2>
            <div className="flex justify-center gap-5 [&>*]:text-[18px]">
              <Link to="/" className="hover:underline">
                Learn More{" "}
                <span>
                  <img
                    src={Arrow}
                    alt="arrow-key"
                    className="inline size-[15px]"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${Joola})` }}>
          <div className="mt-10 [&>*]:text-center [&>*]:font-semibold">
            <h1 className="text-[2.5em]">RAZER PHANTOM WHITE COLLECTION</h1>
            <h2 className="text-[20px]">
              WITNESS TRUE DESIGN BROUGHT TO LIGHT
            </h2>
            <div className="flex justify-center gap-5 [&>*]:text-[18px]">
              <Link to="/" className="hover:underline">
                Learn More{" "}
                <span>
                  <img
                    src={Arrow}
                    alt="arrow-key"
                    className="inline size-[15px]"
                  />
                </span>
              </Link>
              <Link to="/" className="hover:underline">
                Buy{" "}
                <span>
                  <img
                    src={Arrow}
                    alt="arrow-key"
                    className="inline size-[15px]"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${Running_man})` }}>
          <div className="mt-10 [&>*]:text-center [&>*]:font-semibold">
            <h1 className="text-[2.5em]">RAZER | THE RUNNING <br/>MAN GIVEWAY</h1>
            <h2 className="text-[20px]">SCORE THE DEADLIST GAMING GEAR</h2>
            <div className="flex justify-center gap-5 [&>*]:text-[18px]">
              <Link to="/" className="hover:underline">
                Learn More{" "}
                <span>
                  <img
                    src={Arrow}
                    alt="arrow-key"
                    className="inline size-[15px]"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${Skins})` }}>
          <div className="mt-10 [&>*]:text-center [&>*]:font-semibold">
            <h1 className="text-[2.5em]">RAZER SKINS</h1>
            <h2 className="text-[20px]">
              NOW AVAILABLE FOR IPHONE 17
            </h2>
            <div className="flex justify-center gap-5 [&>*]:text-[18px]">
              <Link to="/" className="hover:underline">
                Learn More{" "}
                <span>
                  <img
                    src={Arrow}
                    alt="arrow-key"
                    className="inline size-[15px]"
                  />
                </span>
              </Link>
              <Link to="/" className="hover:underline">
                Buy{" "}
                <span>
                  <img
                    src={Arrow}
                    alt="arrow-key"
                    className="inline size-[15px]"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${Anni})` }}>
          <div className="mt-10 [&>*]:text-center [&>*]:font-semibold">
            <h1 className="text-[2.5em]">20TH ANNIVERSARY</h1>
            <h2 className="text-[20px]">FOR GAMERS. BY GAMERS.</h2>
            <div className="flex justify-center gap-5 [&>*]:text-[18px]">
              <Link to="/" className="hover:underline">
                Learn More{" "}
                <span>
                  <img
                    src={Arrow}
                    alt="arrow-key"
                    className="inline size-[15px]"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
