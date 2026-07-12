import React from 'react';
import MyResume from '../../Cards/MyResume';
import Experience from '../../Cards/Experience';

function Resume() {
  return (
    <div id="resume" className="pb-12 lg:w-[80%] bg-[#212529] lg:ml-[16.9rem]">
      <h1 className="pt-24 flex justify-center items-center text-white font-bold text-4xl">Resume</h1>
      <div className="grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-16 md:px-9 md:gap-7 gap-14 mt-24">
        <div>
          <h1 className="text-2xl font-bold text-white">My Education</h1>
          <div className="flex flex-col gap-6 mt-8">
            <MyResume year="Aug 2020 - Jun 2024" field="B.Tech - Computer Science Engineering" university="Vidya College of Engineering, Meerut" content="Bachelor of Technology focused on computer science engineering fundamentals, software development, and applied project work." />
            <MyResume year="2020" field="12th" university="B.B.S.S.M. Inter College" content="Completed higher secondary education before pursuing engineering." />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">My Experience</h1>
          <div className="flex flex-col gap-6 mt-8">
            <Experience
              year="Aug 2024 - Present"
              field="Generative AI Engineer"
              university="MixORG Consulting Pvt. Ltd. | Noida"
              content="Developed AI-powered applications using LLMs, RAG pipelines, ASR/TTS systems, LangChain, and Hugging Face. Deployed open-source LLMs on AWS SageMaker, integrated OpenAI, Gemini, Claude, Plivo, WhatsApp Business, and Razorpay APIs, and automated workflows using n8n."
              contentClass="text-sm leading-6"
            />
            <Experience
              year="Mar 2024 - Jul 2024"
              field=".NET Trainee"
              university="Chetu Software Solution | Noida"
              content="Built backend applications using ASP.NET, .NET Core, Entity Framework, and C# following MVC architecture. Implemented code-first and database-first approaches for efficient application development."
              contentClass="text-sm leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
