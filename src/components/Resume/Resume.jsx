import React from 'react'
import MyResume from '../../Cards/MyResume'

function Resume() {
  return (
    <div className='h-[90rem] md:h-[70rem] md:w-[80%] bg-[#212529] md:ml-[16.9rem]'>
  <h1 className='pt-24   flex justify-center items-center text-white font-bold text-4xl'>Resume</h1>
     <div className='grid grid-cols-2 px-16 gap-14 mt-24 '>
        <div>
  <h1 className='text-2xl  font-bold  text-white '>My Education</h1>
        <div className='flex flex-col gap-6 mt-8'>
        <MyResume year='2021-2024' field='Computer Science' university='AKTU, Lucknow' content='Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.' />
        <MyResume year='2021-2024' field='Computer Science' university='AKTU, Lucknow' content='Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.' />
        <MyResume year='2021-2024' field='Computer Science' university='AKTU, Lucknow' content='Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.' />
        </div>

        </div>
        <div>
<h1 className='text-2xl font-bold text-white'>My Experience </h1>  
 <div  className='flex flex-col gap-6 mt-8'>
 <MyResume />
  <MyResume />
 </div>

        </div>
     </div>
     
    </div>
  )
}

export default Resume
