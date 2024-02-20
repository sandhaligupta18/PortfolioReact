import React from 'react'
import { useState } from 'react';
import textutil from '../Assets/Screenshot (154).png';
import pizzapallete from '../Assets/Screenshot (155).png';
import productlanding from '../Assets/Screenshot (156).png';
import Amazon from '../Assets/Screenshot (157).png';
import DigitalClock from '../Assets/Screenshot (158).png';
import CountDown from '../Assets/Screenshot (159).png';
import gym from '../Assets/Screenshot (160).png';
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
                                proj === "All" && <div className='grid gap-5 pb-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-items-center mx-14 ' >
                                    <MyProjects src={textutil} href="https://text-utils-beryl.vercel.app/" name="TextUtils" />
                                    <MyProjects src={gym} href="https://gym-chi-one.vercel.app/" name="Portfolio" />
                                    <MyProjects src={productlanding} href="https://product-landing-gamma.vercel.app/" name="Product Landing" />
                                    <MyProjects src={Amazon} href="https://amazon-clone-zeta-ecru-75.vercel.app/" name="Amazon Clone" />
                                    <MyProjects src={pizzapallete} href="https://pizzapalette.vercel.app/" name="PizzaPallete" />
                                    <MyProjects src={calculator} href="https://pizzapalette-opdn.vercel.app/" name="Calculator" />
                                    <MyProjects src={todo} href="https://to-do-list-kappa-pink.vercel.app/" name="ToDo" />
                                    <MyProjects src={DigitalClock} href="https://digital-clock-ten-sigma.vercel.app/" name="Digital Clock" />
                                    <MyProjects src={CountDown} href="https://password-generator-gilt-six.vercel.app/" name="Count Down" />
                                </div>
                            }
                            {
                                proj === "ReactJS" && <div className='grid mx-52 pb-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center align-items-center  ' >
                                    <MyProjects  src={textutil} href="https://text-utils-beryl.vercel.app/" name="TextUtils" />
                                    <MyProjects src={gym} href="https://gym-chi-one.vercel.app/" name="Portfolio" />
                                    
                                </div>
                            }
                            {
                                proj === "HTML" && <div className='grid gap-2 pb-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-items-center mx-14 ' >
                                <MyProjects src={productlanding} href="https://product-landing-gamma.vercel.app/" name="Product Landing" />
                                <MyProjects src={Amazon} href="https://amazon-clone-zeta-ecru-75.vercel.app/" name="Amazon" />
                                <MyProjects src={pizzapallete} href="https://pizzapalette.vercel.app/" name="Pizza Pallete" />
                                </div>
                            }
                            {
                                proj === "JavaScript" && <div className='grid gap-5 mx-52 pb-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center align-items-center' >
                              
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
