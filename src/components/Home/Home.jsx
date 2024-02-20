import React from 'react'
import Comp from '../Assets/blur-1867997_1280.jpg'
// import './Home.css';

function Home() {
  return (
    <div id='home' className=" bg-cover  w-[100%] h-[50rem] lg:h-[40rem] flex justify-center items-center overflow-hidden  "
        style={{ backgroundImage: `url(${Comp})`}} >
     <div className='flex flex-col gap-5 justify-center    items-center md:ml-[13.5rem] '>
    <p className='text-white lg:text-3xl  text-2xl bold'>Welcome</p>
    <p className='text-white lg:text-[4rem] text-4xl font-bold ' >I am a Web Developer.</p>
    <p className='text-white text-2xl' >based in meerut, India</p>
    <button className='text-lg border-2 mt-5 text-[#FFC107] font-semibold rounded-full hover:text-white hover:bg-[#FFC107] border-[#FFC107] h-[3.5rem] w-[9rem]'>Hire Me</button>
  </div>
    </div>
  )
}

export default Home
