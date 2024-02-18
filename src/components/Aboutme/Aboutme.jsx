import React from 'react'

function Aboutme() {
  return (
    <div className='h-[80rem] md:h-[50rem] md:w-[80%] bg-[#212529] md:ml-[16.9rem]'>
        <h1 className='pt-24   flex justify-center items-center text-white font-bold text-4xl'>Know Me More</h1>
    <div className='flex md:flex-row mt-16 md:mt-28 mx-4 md:mx-16 gap-8 md:gap-[9rem] flex-col'>
    <div className='flex flex-col gap-4 text-center '>
         <p className='text-white text-3xl font-bold '>I'm <span className='text-[#FFC107]'>Sandhali Gupta, </span> a Web Developer</p>
         <p className='text-[#909294] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius
             ipsum a! Nobis repudiandae molestias asperiores fkjhg hfgkjf jkfjgin kdfgur kfjgif  jkhfkjghfd dkngjd d kkjjkdk dkjf fjhgkdfj jhfgfu hfgfg  quis dolores tenetur accusantium, hic beatae optio, officiis temporibus.</p>
         <p  className='text-[#909294] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Autem corrupti deleniti accusamus culpa sequi ad. Temporibus h dfkjghfd dkfgjkf jhdfgjhu jnjf jdhuak  gfkjg, unde beatae?</p>
         </div>
         <div className='flex gap-4 flex-col w-22 text-lg'>
         <p className='text-white border-b-[.5px] border-[#909294] h-10'>Name: <span className='text-current'>Sandhali</span></p>
     <p className='text-white h-10 border-b-[.5px] border-[#909294]'>Email:<span className='text-[#FFC107]'>sandhaligupta18@gmail.com</span></p>
     <p className='text-white h-10 border-b-[.5px] border-[#909294]'>Age: <span>21</span></p>
     <p className='text-white h-10 border-b-[.5px] border-[#909294]'>From: <span>Meerut, India</span>
     </p>
     <button className='h-14 w-48 text-white  font-semibold bg-[#FFC107] rounded-full mt-4'>Download Now</button>
         </div>
    </div>
    
    <div className='flex flex-row mt-20 justify-center items-center px-10' >
    <div className='h-36 w-56 px-4 border-r-[.5px] border-dotted flex justify-center items-center flex-col '>
      <p className='text-[3rem] font-bold text-[#909294]'>2+</p>
      <p className='text-lg font-normal text-white' > Years Experience</p>
    </div>
    <div className='h-36 w-56 px-4 border-r-[.5px] border-dotted flex justify-center items-center flex-col '>
    <p className='text-[3rem] font-bold text-[#909294]'>6+</p>
      <p className='text-lg font-normal text-white'>Projects</p>
    </div>
    <div className='h-36 w-56 px-4 border-r-[.5px] border-dotted flex justify-center items-center flex-col '>
    <p className='text-[3rem] font-bold text-[#909294]'>6+</p>
      <p className='text-lg font-normal text-white'>Certificates </p>
    </div>

    </div>
    </div>
  )
}

export default Aboutme
