import React from 'react'

function Aboutme() {
  return (
    <div id="about-me" className="pb-12 lg:w-[80%] bg-[#212529] lg:ml-[16.9rem]">
      <h1 className="pt-24 flex justify-center items-center text-white font-bold text-4xl">Know Me More</h1>
      <div className="flex lg:flex-row mt-16 lg:mt-28 mx-6 md:mx-10 lg:mx-16 gap-8 lg:gap-[9rem] flex-col">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-white text-xl font-bold">
            I'm <span className="text-[#FFC107]">Sandhali Gupta,</span> a Computer Science graduate and Generative AI Engineer.
          </p>
          <p className="text-[#909294] text-lg">
            I build LLM applications, RAG pipelines, voice AI systems, and workflow automation solutions using modern GenAI frameworks, APIs, and cloud technologies.
          </p>
          <p className="text-[#909294] text-lg">
            At MixORG Consulting, I work with LangChain, Hugging Face, OpenAI, Gemini, Claude, ASR/TTS systems, Plivo, WhatsApp Business, n8n, and AWS SageMaker to deliver practical AI-powered products.
          </p>
          <p className="text-[#909294] text-lg">
            I also bring full-stack foundations in JavaScript, React, Python, FastAPI, .NET Core, C#, SQL, Bootstrap, and Tailwind CSS, helping me connect polished interfaces with reliable backend systems.
          </p>
        </div>
        <div className="flex gap-4 flex-col text-lg">
          <p className="text-white border-b-[.5px] border-[#909294] h-10">Name: <span>Sandhali Gupta</span></p>
          <p className="text-white min-h-10 border-b-[.5px] w-[19rem] border-[#909294]">Email: <span className="text-[#FFC107]">sandhaligupta18@gmail.com</span></p>
          <p className="text-white border-b-[.5px] border-[#909294] h-10">Phone: <span>8279747947</span></p>
          <p className="text-white border-b-[.5px] border-[#909294] h-10">From: <span>Meerut, India</span></p>
          <a className="h-14 w-48 text-white font-semibold bg-[#FFC107] rounded-full mt-4 flex items-center justify-center" href="/Sandhali_Gupta.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
