import React from 'react'

function Aboutme() {
  return (
    <div id='about-me' className='pb-12 lg:w-[80%] bg-[#212529] lg:ml-[16.9rem]'>
        <h1 className='pt-24   flex justify-center items-center text-white font-bold text-4xl'>Know Me More</h1>
    <div className='flex lg:flex-row mt-16 lg:mt-28 mx-6 md:mx-10 lg:mx-16 gap-8 lg:gap-[9rem] flex-col'>
    <div className='flex flex-col gap-4 text-center '>
         <p className='text-white text-3xl font-bold '>I'm <span className='text-[#FFC107]'>Sandhali Gupta, </span> a Web Developer</p>
         <p className='text-[#909294] text-lg'>I'm Sandhali Gupta, a Computer Science undergraduate dedicated to crafting captivating web experiences. Proficient in JavaScript and React, I thrive on creating dynamic and visually appealing websites.  My commitment to excellence is reflected in my dedication to hard work and attention to detail. </p>
         <p  className='text-[#909294] text-lg'>With a solid foundation in computer science, I'm eager to contribute my skills to innovative projects. I thrive in collaborative environments, embracing the opportunity to learn, grow, and achieve together as a dedicated team player.</p>
         </div>
         <div className='flex gap-4 flex-col  text-lg'>
         <p className='text-white border-b-[.5px] border-[#909294] h-10'>Name: <span className='text-current'>Sandhali Gupta</span></p>
     <p className='text-white h-10 border-b-[.5px] w-[19rem] border-[#909294]'>Email: <span className='text-[#FFC107]'>sandhaligupta18@gmail.com</span></p>
     <p className='text-white h-10 border-b-[.5px] border-[#909294]'>Age: <span>21</span></p>
     <p className='text-white h-10 border-b-[.5px] border-[#909294]'>From: <span>Meerut, India</span>
     </p>
     <button className='h-14 w-48 text-white  font-semibold bg-[#FFC107] rounded-full mt-4'><a href="https://drive.google.com/file/d/1_PvS-hv3753Ji1JmQcxUKfc7ba6nzbuH/view?usp=drive_link">Download CV</a></button>
         </div>
    </div>
    
    </div>
  )
}

export default Aboutme
