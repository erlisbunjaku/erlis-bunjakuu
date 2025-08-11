"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { React, useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4   flex items-center justify-between z-50
           transition-all duration-300 ease-in-out ${
    isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
  }`}
      >
        <a href="#top">
          <Image
            src={assets.logo_dark}
            alt="My Name"
            className="w-40 cursor-pointer mr-14"
          />
        </a>

        {/* Navigation Links */}
        <ul
  className={`hidden md:flex items-center gap-6 lg:gap-8
    rounded-full px-12 py-3 bg-white bg-opacity-50 backdrop-blur-lg
      transition-shadow duration-300 ease-in-out
    ${!isScroll ? "shadow-[0_2px_6px_rgba(0,0,0,0.1)]" : ""}`}
>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex 
        items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full
        ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} alt="arrow icon" className="w-3" />
          </a>

          <button
            onClick={openMenu}
            className="block md:hidden ml-3 cursor-pointer"
          >
            <Image src={assets.menu_black} alt="menu black" className="w-6" />
          </button>
        </div>

        {/* -- ----  mobile menu ---- -- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-white 
  translate-x-full transition-transform duration-500"
        >
          <div onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close icon"
              className="w-5 
            cursor-pointer absolute right-6 top-6"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              Abotu me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
