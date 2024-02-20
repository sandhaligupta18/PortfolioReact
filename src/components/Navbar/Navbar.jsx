import { Link } from "react-scroll";
// import logo from '../Assets/S..png'
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useState } from "react";
// import './Navbar.css';
// import GoToTop from './../GoToTop';

export default function Navbar(){
    const [toggleIcon, setToggleIcon] = useState(false);
    const handleClickIcon = () => {
        setToggleIcon(!toggleIcon)
    }
    
 
    const [open , setOpen] = useState(false);
    const handleMenu=()=>{
        console.log(open);
        setOpen((prev) => !prev);
    }

    return(
        <div  className={`bg-[#111418] w-full py-3 z-10 top-0 md:hidden fixed`}>
            <div className=" px-6 md:mx-24 md:px-3 py-1 flex align-items-center justify-between text-white ">
                <Link activeClass="!active" className="cursor-pointer" to="home" spy={true} smooth={true}  offset={-100} duration={500} ><p className='text-xl'>Sandhali</p></Link>
                <div className="lg:hidden flex justify-center gap-6 items-center" onClick={handleClickIcon}>
                  <div className="flex justify-center items-center gap-4">
                 
                            <a href="https://linkedin.com/in/sandhali-gupta-82470325a" rel='noreferrer' target='_blank'><FaLinkedin className='text-lg  text-white' onClick={handleClickIcon}/></a>
                            <a href="https://twitter.com/ChauhanShahad03" rel='noreferrer' target='_blank'><FaXTwitter className='text-lg  text-white ' onClick={handleClickIcon}/></a>
                            <a href="https://github.com/sandhaligupta18" rel='noreferrer' target='_blank'><FaGithub className='text-lg  text-white ' onClick={handleClickIcon}/></a>
                            <a href="https://www.instagram.com/sandhaligupta/" rel='noreferrer' target='_blank'><FaInstagram className='text-lg  text-white' onClick={handleClickIcon}/></a>
                    </div>    


<div className='' onClick={handleMenu}>
    {open === false ?  <FaBars className=" text-lg" />:
    <HiX className=" text-white  text-lg   " />}
    </div>
                    
                </div>
            </div>
            <div className={`bg-gradient lg:hidden bg-opacity-90 z-50 top-0 left-0   w-full bg-black text-white grid ${toggleIcon ? ' block ' : ' hidden' }`} >
                        <div className="flex justify-end" onClick={handleClickIcon}>
                            
                        </div>
                        <div >
                            <nav className=" ham m-3 grid text-sm gap-2">
                                <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className=" hover:text-yellow-300 border-b-[.5px] border-gray-400 cursor-pointer" onClick={handleClickIcon}s>Home</Link>
                                <Link activeClass='active' to="about-me" spy={true} smooth={true} offset={-50} duration={500} className=" hover:text-yellow-300 border-b-[.5px] border-gray-400 cursor-pointer" onClick={handleClickIcon}>About Me</Link>
                                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className=" hover:text-yellow-300 border-b-[.5px] border-gray-400 cursor-pointer" onClick={handleClickIcon}>Skills</Link>
                                <Link activeClass='active' to="resume" spy={true} smooth={true} offset={-50} duration={500} className=" hover:text-yellow-300 border-b-[.5px] border-gray-400 cursor-pointer" onClick={handleClickIcon}>Resume</Link>
                                <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-50} duration={500} className=" hover:text-yellow-300 border-b-[.5px] border-gray-400 cursor-pointer" onClick={handleClickIcon}>Projects</Link>                            
                                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className=" hover:text-yellow-300  cursor-pointer" onClick={handleClickIcon}>Contact Me</Link>
                            </nav>
                        </div>
                    
                    </div>
                    {/* <GoToTop/> */}
        </div>
    )
}