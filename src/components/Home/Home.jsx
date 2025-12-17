import React from 'react'
import Comp from '../Assets/super-snapper-VcOjsAUvPUs-unsplash.jpg'
import { Link } from 'react-scroll'
// import './Home.css';

function Home() {
  return (
    <div id='home' className=" bg-cover  w-[100%] h-[50rem] lg:h-[40rem] flex justify-center items-center overflow-hidden  "
        style={{ backgroundImage: `url(${Comp})`}} >
     <div className='flex flex-col gap-5 justify-center    items-center lg:ml-[13.5rem] '>
    <p className='text-white lg:text-3xl  text-2xl bold'>Welcome</p>
    <p className='text-white lg:text-[2rem] text-sm font-bold ' >I am a Full-Stack Developer | AI & Automation Engineer</p>
    <p className='text-white text-lg' >I build scalable web applications and AI-powered automation solutions using modern frontend, .NET, and ML technologies.</p>
    <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}   className='text-lg border-2 mt-5 text-[#FFC107] font-semibold rounded-full hover:text-white hover:bg-[#FFC107] border-[#FFC107] h-[3.5rem] w-[9rem]'>
       Hire Me
    </button>
  </div>
    </div>
  )
}

export default Home
