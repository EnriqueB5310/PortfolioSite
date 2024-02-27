import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Stacks() {

  const frontEnd = [
    {
      title: "JavaScript",
      icon: <IoLogoJavascript size={50} />,
    },
    {
      title: "React.js",
      icon: <FaReact size={50} />,
    },
    {
      title: "TailwindCSS",
      icon: <SiTailwindcss size={50} />,
    },
  ];

  const backEnd = [
    {
      title: "Node.JS",
      icon: <FaNodeJs size={50} />,
    },
    {
      title: "Express.JS",
      icon: <SiExpress size={50} />,
    },
    {
      title: "MongoDB",
      icon: <SiMongodb size={50} />,
    },
  ];

  const tools = {

    title: "Git",
    icon: <FaGithub size={50} />


  }

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-slate-900 lg:min-h-screen mx-auto "
    >
     
        
        <div className="mt-[6px]">
          <h1 className="text-[60px] hover:text-blue-500 hover:duration-500 lg:text-[60px] 2xl:text-[80px] md:text-[50px] text-white font-bold">
            Tech Stack
          </h1>
        </div>

        
        <div className="mt-9 space-y-5 lg:space-y-0 flex flex-col items-center lg:flex-row lg:space-x-10 mb-[50px] 2xl:mb-[80px] ">
         
          <div className="w-[350px] h-[450px] flex flex-col items-center justify-evenly bg-slate-700 rounded-[20px] shadow-lg transition">
            <h1 className="text-white text-4xl font-bold mb-5 ">Front-End</h1>
            <ul>
              {frontEnd.map((skill) => {
                return (
                  <li key={skill.title} className="flex items-center mb-3">
                    <div className="text-white translate-colors duration-300 hover:text-bHoverColor">
                      {skill.icon}
                    </div>
                    <span className="text-xl text-white ml-2">
                      {skill.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          
          <div className="w-[350px] h-[450px] bg-primary flex flex-col items-center bg-slate-700 justify-evenly rounded-[20px] shadow-lg ">
            <h1 className="text-white text-4xl font-bold mb-5">Back-End</h1>
            <ul>
              {backEnd.map((skill, index) => {
                return (
                  <li key={index} className="flex items-center mb-3">
                    <div className="text-white translate-colors duration-300 hover:text-bHoverColor">
                      {skill.icon}
                    </div>
                    <span className="text-xl text-white ml-2">
                      {skill.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
 
    </section>
  );
}

export default Stacks