import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook,  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai';
import Logo from "../assets/logo.png";

function Navbar() {
    const[nav, setNav] = useState(false);

    const hadnleClick=()=>setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      {/* this is menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      {/* this is hamburger */}
      <div onClick={hadnleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <AiFillCloseCircle/>}
      </div>

      {/* this is mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* this is social icons section */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">

        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-full ">
                <a href="/" className="flex justify-between items-center w-full text-gray-300 ">
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-full">
                <a href="/" className="flex justify-between items-center w-full text-gray-300 ">
                    Github <FaGithub size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a2b52a] rounded-full">
                <a href="/" className="flex justify-between items-center w-full text-gray-300 ">
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#41314d] rounded-full">
                <a href="/" className="flex justify-between items-center w-full text-gray-300 ">
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>

      </div>
    </div>
  );
}

export default Navbar;