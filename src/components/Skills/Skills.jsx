import React from "react";
import Skill from "../../Cards/Skill";

import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaRobot,
} from "react-icons/fa";

import {
  SiAmazonaws,
  SiDotnet,
  SiFastapi,
  SiOpenai,
} from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className="pb-12 lg:w-[80%] bg-[#2C3135] lg:ml-[16.9rem]">
      <h1 className="pt-24 flex justify-center items-center text-white font-bold text-4xl">
        My Skills
      </h1>

      <div className="sm:mx-16 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 mt-24 lg:mx-10 md:mx-4 gap-8">
        <Skill
          icon={<FaBrain size={32} />}
          skill="LLMs, RAG & GenAI"
          content="I build LLM applications, RAG pipelines, clinical report generation flows, and AI assistants using OpenAI, Claude, Gemini, LangChain, Hugging Face, and vector databases."
        />

        <Skill
          icon={<FaRobot size={32} />}
          skill="Voice AI & Automation"
          content="I create voice AI systems with ASR/TTS, Plivo, WhatsApp Business, WebSockets, and n8n to automate calls, messaging, and workflow operations."
        />

        <Skill
          icon={<FaPython size={32} />}
          skill="Python, Flask & FastAPI"
          content="Python is my core AI/backend language for building APIs, automation services, model integrations, and production-ready AI workflows."
        />

        <Skill
          icon={<SiFastapi size={32} />}
          skill="Backend APIs"
          content="I design API-driven systems with FastAPI, PostgreSQL, SQL, authentication flows, third-party service integrations, and scalable data handling."
        />

        <Skill
          icon={<SiDotnet size={32} />}
          skill=".NET Core, ASP.NET & C#"
          content="I have hands-on experience with ASP.NET MVC, .NET Core, Entity Framework, C#, OOP, code-first, and database-first application development."
        />

        <Skill
          icon={<FaCode size={32} />}
          skill="Frontend Development"
          content="I build responsive interfaces using JavaScript, React.js, HTML, CSS, Bootstrap, and Tailwind CSS with a focus on usability and clean presentation."
        />

        <Skill
          icon={<SiAmazonaws size={32} />}
          skill="Cloud & Model Deployment"
          content="I deploy open-source LLMs and machine learning models on AWS SageMaker for scalable AI-powered solutions."
        />

        <Skill
          icon={<FaDatabase size={32} />}
          skill="Databases"
          content="I work with PostgreSQL and SQL to model data, write queries, and support AI, web, and healthcare-oriented application workflows."
        />

        <Skill
          icon={<SiOpenai size={32} />}
          skill="AI Service Integrations"
          content="I integrate OpenAI, Gemini, Claude, Deepgram, Perplexity, Razorpay, Plivo, and WhatsApp Business APIs into practical products."
        />

        <Skill
          icon={<FaGitAlt size={32} />}
          skill="Tools"
          content="I use Git, GitHub, WordPress, n8n, and collaborative engineering workflows to ship maintainable software."
        />
      </div>
    </div>
  );
}

export default Skills;
