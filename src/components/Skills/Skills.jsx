import React from 'react'
import Skill from '../../Cards/Skill'
import { FaHtml5 } from "react-icons/fa";


function Skills() {
  return (
    <div className='h-[80rem] md:h-[62rem] md:w-[80%] bg-[#2C3135] md:ml-[16.9rem]'>
        <h1 className='pt-24   flex justify-center items-center text-white font-bold text-4xl'>My Skills</h1>
      <div className='grid md:grid-cols-2 mt-24 mx-10 md:mx-20 gap-12'>
      <Skill icon={<FaHtml5/>} skill="HTML" content="HTML is the foundation of the web, allowing us to create user-friendly and captivating online experiences. With its building blocks, We craft websites that are both beautiful and easy to use. HTML isn't just code; it's the tool that brings our ideas to life." />
      <Skill icon={<FaHtml5/>} skill="CSS" content="CSS is like the paintbrush for websites. It lets us create beautiful designs and make web pages look amazing. With CSS, We give websites their unique style and make sure they're easy to use and look great on any device."/>
      <Skill  icon={<FaHtml5/>} skill="JavaScript" content="JavaScript brings websites to life by making them interactive and fun to use. It helps developers create all sorts of cool things on the web, from flashy designs to making buttons do clever tricks."/>
      <Skill icon={<FaHtml5/>} skill="React JS" content="React revolutionizes user interfaces with its declarative, component-based architecture. It simplifies creating user interfaces by breaking them into reusable components. This makes websites faster, more flexible, and easier to maintain."/>
      <Skill icon={<FaHtml5/>} skill="Core Java" content="HTML is the foundation of the web, allowing us to create user-friendly and captivating online experiences. With its building blocks, We craft websites that are both beautiful and easy to use. HTML isn't just code; it's the tool that brings our ideas to life."/>
      <Skill icon={<FaHtml5/>} skill="Tailwind CSS" content="HTML is the foundation of the web, allowing us to create user-friendly and captivating online experiences. With its building blocks, We craft websites that are both beautiful and easy to use. HTML isn't just code; it's the tool that brings our ideas to life."/>

      </div>

    </div>
  )
}

export default Skills