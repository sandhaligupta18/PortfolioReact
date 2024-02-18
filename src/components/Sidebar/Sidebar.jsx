import React from 'react'
import { Link } from 'react-scroll'
import image from  '../Assets/WhatsApp Image 2024-02-11 at 2.57.12 PM.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className='container hidden  md:visible w-[17rem] h-[40rem]  fixed top-0 left-0 md:flex flex-col justify-evenly bg-[#111418] '>
        <div className='flex flex-col gap-4 justify-center items-center' >
            <div className='h-[11rem] w-[11rem] rounded-full overflow-hidden image   '><img src={image} alt="" className='object-cover h-[130%] w-full ' /></div>
            <p className='text-white text-2xl '>Sandhali Gupta</p>
        </div>
        <div  >
            <nav className='flex flex-col gap-7 justify-center items-center'>
                <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className=" hover:text-[#FFC107]  cursor-pointer text-xl text-white" >Home</Link>
                <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className=" hover:text-yellow-[#FFC107]   cursor-pointer text-xl text-white" >Home</Link>
                <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className=" hover:text-yellow-[#FFC107]   cursor-pointer text-xl text-white" >Home</Link>
                <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className=" hover:text-yellow-[#FFC107]   cursor-pointer text-xl text-white" >Home</Link>
                <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className=" hover:text-yellow-[#FFC107]   cursor-pointer text-xl text-white" >Home</Link>
                <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className=" hover:text-yellow-[#FFC107]   cursor-pointer text-xl text-white" >Home</Link>
                </nav>
                
        </div>
        <div className="flex justify-center items-center gap-4">
                 
                 <a href="https://linkedin.com/in/sandhali-gupta-82470325a" rel='noreferrer' target='_blank'><FaLinkedin className='text-sm  text-white' /></a>
                 <a href="https://twitter.com/ChauhanShahad03" rel='noreferrer' target='_blank'><FaXTwitter className='text-sm  text-white '/></a>
                 <a href="https://github.com/sandhaligupta18" rel='noreferrer' target='_blank'><FaGithub className='text-sm  text-white ' /></a>
                 <a href="https://www.instagram.com/sandhaligupta/" rel='noreferrer' target='_blank'><FaInstagram className='text-sm  text-white' /></a>
         </div> 
      
    </div>
  )
}

export default Sidebar
