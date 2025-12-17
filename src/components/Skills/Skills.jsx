import React from "react";
import Skill from "../../Cards/Skill";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaRobot,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDotnet,
  SiCsharp,
} from "react-icons/si";

function Skills() {
  return (
    <div
      id="skills"
      className="pb-12 lg:w-[80%] bg-[#2C3135] lg:ml-[16.9rem]"
    >
      {/* Heading */}
      <h1 className="pt-24 flex justify-center items-center text-white font-bold text-4xl">
        My Skills
      </h1>

      {/* Skills Grid */}
      <div className="sm:mx-16 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 mt-24 lg:mx-10 md:mx-4 gap-5">

        <Skill
          icon={<FaHtml5 size={32} />}
          skill="HTML5"
          content="HTML is the foundation of my frontend development work. I use semantic HTML to build structured, accessible, and SEO-friendly web pages."
        />

        <Skill
          icon={<FaCss3Alt size={32} />}
          skill="CSS3 / Bootstrap / Tailwind CSS"
          content="I design responsive and visually appealing interfaces using modern CSS frameworks like Bootstrap and Tailwind CSS."
        />

        <Skill
          icon={<FaJs size={32} />}
          skill="JavaScript (ES6+)"
          content="JavaScript enables me to build interactive and dynamic web applications using modern ES6+ features."
        />

        <Skill
          icon={<FaReact size={32} />}
          skill="React.js"
          content="React is my primary frontend framework for building scalable and component-based user interfaces."
        />

        <Skill
          icon={<SiDotnet size={32} />}
          skill=".NET Core & C#"
          content="I develop secure and scalable backend systems using .NET Core and C#, following MVC architecture."
        />

        <Skill
          icon={<FaDatabase size={32} />}
          skill="SQL"
          content="I work with relational databases to design schemas, write optimized queries, and manage data efficiently."
        />

        <Skill
          icon={<FaRobot size={32} />}
          skill="Python & AI Automation"
          content="I use Python to build AI-driven solutions, integrate LLMs, automate workflows, and work with ASR/TTS systems."
        />

        <Skill
          icon={<FaGitAlt size={32} />}
          skill="Git & GitHub"
          content="I use Git and GitHub for version control, collaboration, and clean code management."
        />

      </div>
    </div>
  );
}

export default Skills;
