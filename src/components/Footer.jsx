import React from "react";
// import {  FaFacebookF,  FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

import logoo from "../assets/logoo.png";

const Footer = () => {

  return (
    <footer className="text-black bg-white dark:bg-black dark:text-white">
      <div data-testid="footer-container" className="flex justify-between other:flex-col">
        <div data-testid="logo-container" className="flex flex-col justify-between px-10 w-[30%] other:justify-center other:items-center other:w-full">

          <img src={logoo} className="py-24 w-40 text-white dark:invert other:pt-8 other:py-4 other:w-80"  alt="" />
          <br />
          {/* <button className="px-10 py-2 text-white bg-black rounded-md max-w-[26rem] w-4/5 tab:px-3 dark:text-black other:w-full other:p-3 my-16 other:text-2xl dark:bg-white">405-232-1515</button> */}
          <Link to='/contact#contact' className="px-10 py-2 text-white bg-black rounded-md max-w-[26rem] w-4/5 tab:px-3 dark:text-black other:w-full other:p-3 my-16 other:text-2xl dark:bg-white">Contact Us</Link>
        </div>
        <div className="flex justify-between p-6 space-x-6 w-[30%] other:space-x-10 other:w-full">
          <div className="w-1/2 ">
            <h1 className="font-serif pb-12 text-xl  text-yellow-400">Location</h1>
            <p className=" font-thin">428 Dean A McGee Ave
            Oklahoma City , OK 73102</p>
            <a className="font-thin underline" href="https://www.google.com/maps?daddr=428+Dean+A+McGee+Ave++Oklahoma+City+OK+73102+US">Get Directions</a>
            </div>
          <div className="w-1/2 flex flex-col ">
            <h1 className="font-serif text-xl pb-12 text-yellow-400">Hours</h1>
            <strong className="">Mon - Fri</strong>
            <p className="font-thin text-wrap">8:00 am - 7:00 pm</p>
            <strong className="">Sat - Sun</strong>
            {/* <p className="font-thin text-wrap">Phones will be answered</p> <br />

            <p className="font-thin text-wrap">Phones are answered 24/7</p> */}

            {/* <ul className="flex items-center pr-8 space-x-6 mt-8 other:py-8 dark:text-white">
          <li><Link to=""><FaTiktok /></Link></li>
          <li><Link to=""><FaInstagram /></Link></li>
          <li><Link to=""><FaFacebookF/></Link></li>
        </ul> */}
            
            </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 items-center">
        <p className="font-extralight text-sm dark:text-neutral-50 text-center w-1/4 text-neutral-500 space-x-2">Powered by <a href="https://www.highfivemedia.com/" target="blank" className="underline">High Five Media</a><span>|</span><a href="https://hchokc.org/privacy-policy" target="blank" className="underline">Privacy Policy</a></p>
      <p className="pb-10 pt-3 px-24 text-sm font-light text-center">© {new Date().getFullYear()} he contents of this website are owned or licensed by High Five Media Group LLC. It is unlawful to copy this website or any of its content without High Five Media's consent.</p>
    </div>
    
    </footer>
  );
};

export default Footer;