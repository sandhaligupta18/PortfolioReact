import React from 'react'

function MyProjects(props) {
  return (
<div className="h-[17rem] w-[20rem] lg:w-[19rem] text-center rounded-lg  relative overflow-hidden">
            <img src={props.src} alt="Project-img" className='w-full h-full block '/>
            <div className="group flex justify-center align-items-center bg-transparent h-full w-full absolute top-0 left-0 hover:bg-[#51585e]  hover:bg-opacity-60  transition-opacity duration-300 ease-in-out">
                
                <a href={props.href} target="_blank" rel="noreferrer" className="absolute text-[#F7B900] text-3xl font-medium  text-center transition transform translate-y-[19rem] group-hover:translate-y-10 duration-500">{props.name}
                <p className='text-sm mt-3 text-white '>{props.content}</p>
                </a>
        
            </div>
        </div>
  )
}

export default MyProjects
