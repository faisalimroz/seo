import React from 'react';
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #4b4b4b 0%, #1c1c1c 80%, #2a2a2a 100%)",
      }}
      className="text-white h-14 flex items-center justify-between md:justify-evenly px-4 shadow-lg overflow-x-auto"
    >
      <div className="flex-shrink-0 flex items-center mr-1">
        <a href="#" className="">
          <h1 className="italic lg:text-3xl md:text-xl sm:text-xl font-serif">Lightshot</h1>
          <h2 className="text-xs">screen capture tool</h2>
        </a>
      </div>

      <div className="flex-shrink-0 flex items-center space-x-2 md:space-x-2 ">
        <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded">
          English
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded">
          Sign In
        </button>
      </div>

      <div className="flex flex-shrink-0 space-x-2 md:space-x-3">
        <a href="http://www.facebook.com/Lighshot" className="text-lg">
          <SlSocialFacebook />
        </a>
        <a href="https://twitter.com/Light_shot" className="text-lg">
          <RiTwitterLine />
        </a>
      </div>

      <div className="">
        <button
          style={{
            background: "linear-gradient(180deg, #406db8 0%, #1a2d54 100%)",
          }}
          className="text-white text-xs md:text-sm rounded p-2 py-1  md:px-4"
        >
          Download Lightshot for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;