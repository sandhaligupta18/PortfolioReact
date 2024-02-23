import React from 'react'
import { useState } from 'react';
import textutil from '../Assets/Screenshot (154).png';
import pizzapallete from '../Assets/Screenshot (155).png';
import productlanding from '../Assets/Screenshot (156).png';
import Amazon from '../Assets/Screenshot (157).png';
import DigitalClock from '../Assets/Screenshot (158).png';
import CountDown from '../Assets/Screenshot (159).png';
import gym from '../Assets/Screenshot (164).png';
import todo from '../Assets/Screenshot (162).png';
import calculator from  '../Assets/Screenshot (163).png'
import MyProjects from '../../Cards/MyProjects';


function Projects() {
    let [proj, setProj] = useState("All");
    let [activeButton, setActiveButton] = useState("All");

  return (
    <div id='projects' className=' lg:w-[80%] bg-[#343A40] lg:ml-[16.9rem]' >
         <h1 className='pt-24   flex justify-center items-center text-white font-bold text-4xl'>Projects</h1>
        <div>
        <div className="flex justify-center align-items-center mt-16 mb-12 gap-5 lg:gap-7" >
                                   <button className={`text-white cursor-pointer pt-2 pb-1  font-semibold ${activeButton === 'All' ? 'border-b-2 border-[#F7B900]' : ''}`} onClick={()=>{
                                setProj("All");
                                setActiveButton("All")}} >ALL</button>
                            <button className={`text-white cursor-pointer pt-2 pb-1  font-semibold ${activeButton === 'ReactJS' ? 'border-b-2 border-[#F7B900]' : ''}`} onClick={()=>{
                                setProj("ReactJS");
                                setActiveButton("ReactJS")}} >React JS</button>
                            <button className={`text-white cursor-pointer pt-2 pb-1  font-semibold ${activeButton === 'HTML' ? 'border-b-2 border-[#F7B900]' : ''}`} onClick={()=>{
                                setProj("HTML")
                                setActiveButton("HTML")}} >HTML & CSS</button>
                            <button className={`text-white cursor-pointer pt-2 pb-1  font-semibold ${activeButton === 'JavaScript' ? 'border-b-2 border-[#F7B900]' : ''}`} onClick={()=>{
                                setProj("JavaScript")
                                setActiveButton("JavaScript")}} >JavaScript</button>
                        </div>
                        <div>
                            {
                                proj === "All" && <div className='grid gap-5 md:gap-5 lg:gap-5 pb-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-items-center md:mx-14  lg:mx-14' >
                                    <MyProjects src={textutil} href="https://text-utils-beryl.vercel.app/" name="TextUtils" content="Developed a personalized text utility application with React, featuring text transformation functionalities such as upper/lowercase conversion, space removal,text-to-speech,etc, with customizable color buttons." />
                                    <MyProjects src={gym} href="https://portfolio-react-kohl-chi.vercel.app/" name="Portfolio" content="Crafted with Reactjs and Tailwind CSS to showcase my expertise, projects, education, certification and experience in one dynamic portfolio." />
                                    <MyProjects src={productlanding} href="https://product-landing-gamma.vercel.app/" name="Product Landing" content="Crafted a dynamic cosmetics product landing page solely through HTML and CSS, emphasizing a seamless user interface design to showcase all products elegantly" />
                                    <MyProjects src={Amazon} href="https://amazon-clone-zeta-ecru-75.vercel.app/" name="Amazon Clone" content="Engineered a responsive Amazon clone leveraging HTML and CSS, prioritizing meticulous UI design to replicate the e-commerce giant's interface." />
                                    <MyProjects src={pizzapallete} href="https://pizzapalette.vercel.app/" name="PizzaPallete" content="Developed a captivating layout for Pizza Palette, integrating HTML, CSS, and JavaScript to offer users an engaging experience, including easy-to-use features for ordering pizzas and seamless login/signup pages." />
                                    <MyProjects src={calculator} href="https://pizzapalette-opdn.vercel.app/" name="Calculator" content="Engineered a fully functional calculator utilizing HTML, CSS, and JavaScript, enabling seamless mathematical calculations with precision and efficiency." />
                                    <MyProjects src={todo} href="https://to-do-list-kappa-pink.vercel.app/" name="ToDo" content="Designed and implemented a versatile todo web application using HTML, CSS, and JavaScript, allowing users to effortlessly add, delete, and edit tasks for enhanced productivity." />
                                    <MyProjects src={DigitalClock} href="https://digital-clock-ten-sigma.vercel.app/" name="Digital Clock" content="Developed a precise digital clock using HTML, CSS, and JavaScript, providing accurate time display for seamless timekeeping." />
                                    <MyProjects src={CountDown} href="https://password-generator-gilt-six.vercel.app/" name="Count Down" content="Created a dynamic countdown website using HTML, CSS, and JavaScript, enabling users to set custom timers and automatically halting when reaching zero for streamlined time management." />
                                </div>
                            }
                            {
                                proj === "ReactJS" && <div className='grid gap-5 lg:mx-52 md:mx-12 pb-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center align-items-center  ' >
                                    <MyProjects  src={textutil} href="https://text-utils-beryl.vercel.app/" name="TextUtils" />
                                    <MyProjects src={gym} href="https://portfolio-react-kohl-chi.vercel.app/" name="Portfolio" />
                                    
                                </div>
                            }
                            {
                                proj === "HTML" && <div className='grid gap-5 pb-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-items-center mx-14 ' >
                                <MyProjects src={productlanding} href="https://product-landing-gamma.vercel.app/" name="Product Landing" />
                                <MyProjects src={Amazon} href="https://amazon-clone-zeta-ecru-75.vercel.app/" name="Amazon" />
                                <MyProjects src={pizzapallete} href="https://pizzapalette.vercel.app/" name="Pizza Pallete" />
                                </div>
                            }
                            {
                                proj === "JavaScript" && <div className='grid gap-5 lg:mx-52 md:mx-12 pb-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center align-items-center' >
                              
                                <MyProjects src={calculator} href="https://pizzapalette-opdn.vercel.app/" name="Calculator" />
                                <MyProjects src={todo} href="https://to-do-list-kappa-pink.vercel.app/" name="ToDo" />
                                <MyProjects src={CountDown} href="https://count-down-blue.vercel.app/" name="Count Down" />
                                <MyProjects src={DigitalClock} href="https://digital-clock-ten-sigma.vercel.app/" name="Digital Clock" />
                                </div>
                            }


                        </div>
                        

        </div>


    </div>
  )
}

export default Projects
