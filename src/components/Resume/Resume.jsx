import React from 'react'
import MyResume from '../../Cards/MyResume'
import Experience from '../../Cards/Experience'

function Resume() {
  return (
    <div id='resume' className= ' pb-12  lg:w-[80%] bg-[#212529] lg:ml-[16.9rem]'>
  <h1 className='pt-24   flex justify-center items-center text-white font-bold text-4xl'>Resume</h1>
     <div className='grid justify-center sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2   lg:px-16 md:px-9 md:gap-7 gap-14 mt-24 '>
        <div>
  <h1 className='text-2xl  font-bold  text-white '>My Education</h1>
        <div className='flex flex-col gap-6 mt-8 '>
        <MyResume year='2021-2024' field='B.Tech - Computer Science' university='Vidya College of Engineering' content='AKTU, Lucknow' />
        <MyResume year='2019-2020' field='Intermediate' university='B.B.S.S.M. Inter College' content='UP Board' />
        <MyResume year='2017-2018' field='High School' university='B.B.S.S.M. Inter College' content='UP Board' />
        </div>

        </div>
        <div>
<h1 className='text-2xl font-bold text-white'>My Experience </h1>  
 <div  className='flex flex-col gap-6 mt-8'>
 <Experience year='July 2023-Aug 2023' field='Web Development Intern' university='CodeClause , Remote' content='
 Completed assigned tasks showing proficiency in HTML, CSS,
 JavaScript, and responsive design.
 Practically applied acquired skills to efficiently fulfill task
requirements.
Adapted quickly and learned rapidly to effectively tackle assigned
tasks during the internship period.'/>

  <Experience year='Feb 2024-Present ' field='Web Development intern' university='Code Alpha , Remote' content=' I honed my skills in web development, specializing in HTML, CSS, JavaScript, and Tailwind CSS. I gained extensive experience in JavaScript.Additionally, I utilized Git and GitHub for version control and code submission. This experience has not only enhanced my technical abilities but also strengthened my proficiency in project management.'  />
 </div>

        </div>
     </div>
     
    </div>
  )
}

export default Resume
