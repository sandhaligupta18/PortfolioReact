import React from 'react'

function Projects() {
    let [proj, setProj] = useState("All");
    let [activeButton, setActiveButton] = useState("All");

  return (
    <div className='md:w-[80%] bg-[#343A40] md:ml-[16.9rem]' >
         <h1 className='pt-24   flex justify-center items-center text-white font-bold text-4xl'>Projects</h1>
        <div>
        <div className="flex justify-center align-items-center mb-12" >
                                       <button className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'ReactJS' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("ALL");
                                setActiveButton("ALL")}} >ALL</button>
                            <button className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'ReactJS' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("ReactJS");
                                setActiveButton("ReactJS")}} >React JS</button>
                            <button className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'HTML' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("HTML")
                                setActiveButton("HTML")}} >HTML & CSS</button>
                            <button className={`text-black cursor-pointer pt-2 pb-1 px-5 font-semibold ${activeButton === 'Frontend' ? 'border-b-2 border-yellow-300' : ''}`} onClick={()=>{
                                setProj("Frontend")
                                setActiveButton("Frontend")}} >Responsive Frontend</button>
                        </div>
                        

        </div>


    </div>
  )
}

export default Projects
