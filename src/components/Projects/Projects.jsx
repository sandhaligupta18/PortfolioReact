import React, { useState } from 'react';
import { FaHospitalUser, FaFileMedicalAlt, FaRobot } from 'react-icons/fa';
import textutil from '../Assets/Screenshot (154).png';
import pizzapallete from '../Assets/Screenshot (155).png';
import productlanding from '../Assets/Screenshot (156).png';
import Amazon from '../Assets/Screenshot (157).png';
import DigitalClock from '../Assets/Screenshot (158).png';
import CountDown from '../Assets/Screenshot (159).png';
import portfolio from '../Assets/Screenshot (164).png';
import todo from '../Assets/Screenshot (162).png';
import calculator from '../Assets/Screenshot (163).png';
import MyProjects from '../../Cards/MyProjects';

const filters = ['All', 'AI & Automation', 'React JS', 'HTML & CSS', 'JavaScript'];

const projects = [
  {
    name: 'Hospital Patient Follow-up System',
    category: 'AI & Automation',
    icon: <FaHospitalUser />,
    content: 'Built an AI-powered multilingual voice assistant for patient follow-ups, including patient interest verification and real-time voice calls.',
    tech: 'Python, FastAPI, PostgreSQL, LLMs, ASR/TTS, Plivo API, WhatsApp, WebSockets',
  },
  {
    name: 'NLPFlow (Flowy)',
    category: 'AI & Automation',
    icon: <FaRobot />,
    content: 'Created a no-code AI workflow platform for designing and executing media automation pipelines with multiple GenAI services.',
    tech: 'Python, FastAPI, JavaScript, PostgreSQL, OpenAI, Gemini, Deepgram, Perplexity',
  },
  {
    name: 'Documental',
    category: 'AI & Automation',
    icon: <FaFileMedicalAlt />,
    content: 'Developed an AI-based mental health assessment assistant using DSM-5 criteria, rule-based diagnosis workflows, and clinical report generation.',
    tech: 'Python, FastAPI, PostgreSQL, FHIR, LLMs',
  },
  {
    name: 'TextUtils',
    category: 'React JS',
    src: textutil,
    href: 'https://text-utils-beryl.vercel.app/',
    content: 'React text utility with case conversion, whitespace cleanup, text-to-speech, and color customization features.',
    tech: 'React.js, JavaScript, CSS',
  },
  {
    name: 'Portfolio',
    category: 'React JS',
    src: portfolio,
    href: 'https://portfolio-react-kohl-chi.vercel.app/',
    content: 'Personal portfolio built with React and Tailwind CSS to present skills, education, experience, and projects.',
    tech: 'React.js, Tailwind CSS',
  },
  {
    name: 'Product Landing',
    category: 'HTML & CSS',
    src: productlanding,
    href: 'https://product-landing-gamma.vercel.app/',
    content: 'Responsive cosmetics product landing page focused on clean product presentation and polished UI layout.',
    tech: 'HTML, CSS',
  },
  {
    name: 'Amazon Clone',
    category: 'HTML & CSS',
    src: Amazon,
    href: 'https://amazon-clone-zeta-ecru-75.vercel.app/',
    content: 'Responsive e-commerce interface inspired by Amazon, with careful attention to layout and visual hierarchy.',
    tech: 'HTML, CSS',
  },
  {
    name: 'PizzaPalette',
    category: 'HTML & CSS',
    src: pizzapallete,
    href: 'https://pizzapalette.vercel.app/',
    content: 'Pizza ordering website layout with login and signup pages for an engaging restaurant browsing experience.',
    tech: 'HTML, CSS, JavaScript',
  },
  {
    name: 'Calculator',
    category: 'JavaScript',
    src: calculator,
    href: 'https://pizzapalette-opdn.vercel.app/',
    content: 'Functional calculator for accurate basic arithmetic operations through a simple browser interface.',
    tech: 'HTML, CSS, JavaScript',
  },
  {
    name: 'ToDo',
    category: 'JavaScript',
    src: todo,
    href: 'https://to-do-list-kappa-pink.vercel.app/',
    content: 'Task management app that allows users to add, edit, delete, and organize daily tasks.',
    tech: 'HTML, CSS, JavaScript',
  },
  {
    name: 'Count Down',
    category: 'JavaScript',
    src: CountDown,
    href: 'https://count-down-blue.vercel.app/',
    content: 'Countdown timer website that lets users set custom timers and stops automatically at zero.',
    tech: 'HTML, CSS, JavaScript',
  },
  {
    name: 'Digital Clock',
    category: 'JavaScript',
    src: DigitalClock,
    href: 'https://digital-clock-ten-sigma.vercel.app/',
    content: 'Digital clock interface that displays accurate real-time values in the browser.',
    tech: 'HTML, CSS, JavaScript',
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div id="projects" className="lg:w-[80%] bg-[#343A40] lg:ml-[16.9rem]">
      <h1 className="pt-24 flex justify-center items-center text-white font-bold text-4xl">Projects</h1>

      <div className="flex flex-wrap justify-center items-center mt-16 mb-12 gap-5 lg:gap-7 px-5">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`text-white cursor-pointer pt-2 pb-1 font-semibold ${activeFilter === filter ? 'border-b-2 border-[#F7B900]' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 pb-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:mx-14 lg:mx-14">
        {visibleProjects.map((project) => (
          <MyProjects key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
