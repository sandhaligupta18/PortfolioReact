import React from 'react';
import MyResume from '../../Cards/MyResume';
import Experience from '../../Cards/Experience';

function Resume() {
  return (
    <div id='resume' className='pb-12 lg:w-[80%] bg-[#212529] lg:ml-[16.9rem]'>
      <h1 className='pt-24 flex justify-center items-center text-white font-bold text-4xl'>Resume</h1>
      <div className='grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-16 md:px-9 md:gap-7 gap-14 mt-24'>
        <div>
          <h1 className='text-2xl font-bold text-white'>My Education</h1>
          <div className='flex flex-col gap-6 mt-8'>
            <MyResume year='2021-2024' field='B.Tech - Computer Science' university='Vidya College of Engineering' content='AKTU, Lucknow' />
            <MyResume year='2019-2020' field='Intermediate' university='B.B.S.S.M. Inter College' content='UP Board' />
            <MyResume year='2017-2018' field='High School' university='B.B.S.S.M. Inter College' content='UP Board' />
          </div>
        </div>

        <div>
          <h1 className='text-2xl font-bold text-white'>My Experience</h1>
          <div className='flex flex-col gap-6 mt-8'>
            <Experience
              year='Aug 2024 – Present'
              field='Software Engineer – AI & Automation'
              university='MixORG | Noida'
              content='
                Developed responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap; integrated AI-driven solutions with LLMs, speech-to-speech models, and ASR systems using Python; implemented real-time voice calling with Plivo API and WebSockets; deployed machine learning models on AWS SageMaker; maintained a dynamic WordPress website by customizing themes and plugins; automated workflows with n8n to improve operational efficiency; created Flowy, a node-based automation platform; and built PodcastIQ, an AI-powered tool for analyzing and summarizing podcasts.'
              contentClass='text-sm'  // Apply smaller font size here
            />
            <Experience
              year="Mar 2024 – Jul 2024"
              field=".NET Trainee"
              university="Chetu Software Solutions | Noida"
              content="
              Worked with ASP.NET MVC and .NET Core on enterprise applications, implementing both code-first and database-first approaches using Entity Framework. Applied object-oriented programming principles with C#, designed and executed SQL queries for data manipulation and backend operations, and gained hands-on experience in building scalable and maintainable backend systems."
              contentClass='text-sm'  // Apply smaller font size here
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
