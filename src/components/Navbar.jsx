import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook,  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai';
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

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
          <li>
          <Link to="home" smooth={true} offset={50} duration={500} >
          Home
        </Link>
          </li>
          <li>
          <Link to="about" smooth={true} offset={50} duration={500} >
          About
        </Link>
          </li>
          <li>
          <Link to="skills" smooth={true} offset={50} duration={500} >
          Skills
        </Link>
          </li>
          <li>
          <Link to="projects" smooth={true} offset={50} duration={500} >
          Projects
        </Link>
          </li>
          <li>
          <Link to="contact" smooth={true} offset={50} duration={500} >
          Contact
        </Link>
          </li>
        </ul>
      {/* this is hamburger */}
      <div onClick={hadnleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <AiFillCloseCircle/>}
      </div>

      {/* this is mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">
        <Link onClick={hadnleClick} to="home" smooth={true} offset={50} duration={500} >
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={hadnleClick} to="about" smooth={true} offset={50} duration={500} >
          About
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={hadnleClick} to="skills" smooth={true} offset={50} duration={500} >
          Skills
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={hadnleClick} to="projects" smooth={true} offset={50} duration={500} >
          Projects
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={hadnleClick} to="contact" smooth={true} offset={50} duration={500} >
          Contact
        </Link>
        </li>
      </ul>
      {/* this is social icons section */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">

        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-full ">
                <a href="https://www.linkedin.com/in/thazibadrib/" className="flex justify-between items-center w-full text-gray-300 ">
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-full">
                <a href="https://github.com/thazibadrib" className="flex justify-between items-center w-full text-gray-300 ">
                    Github <FaGithub size={30}/>
                </a>
            </li>
        </ul>

      </div>
    </div>
  );
}

export default Navbar;
