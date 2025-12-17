import React from 'react';

function Experience(props) {
  return (
    <div className='h-[23.2rem] w-[21rem] lg:w-[28rem] bg-[#111418] rounded p-4 flex flex-col justify-around'>
      <div className='text-white flex flex-col gap-3'>
        <p className='bg-[#F7B900] w-40 px-2 rounded font-normal'>{props.year}</p>
        <p className='text-2xl font-semibold'>{props.field}</p>
        <p className='text-lg text-[#F7B900]'>{props.university}</p>
      </div>
      <div>
        {/* Apply the text size adjustment to content */}
        <p className={`text-[#909294] text-lg ${props.contentClass}`}>{props.content}</p>
      </div>
    </div>
  );
}

export default Experience;
