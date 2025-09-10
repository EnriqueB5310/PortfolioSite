import React from 'react'

import { VscGithubAlt } from "react-icons/vsc";
import { VscDebugContinueSmall } from "react-icons/vsc";





function ProjectCard({title,bio,link,demo,image}) {
  return(
    <div className="container mx-auto py-[50px]">
      <div className="flex flex-col items-center justify-center">
        {/* Cards */}
        <div className="bg-slate-700 w-[380px] h-[320px] rounded-[20px] lg:w-[1000px] lg:h-[400px] shadow-lg ">
          <div className="flex flex-col lg:flex-row text-white text-center">
            {/* Image */}
            <div className="lg:px-5 lg:py-[50px] ">
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="lg:w-[2000px] lg:h-[290px] w-[0px] h-[0px] mx-auto rounded-[15px]"
                />
              )}
            </div>

            <div className="flex flex-col justify-center lg:pr-4">
              {/* Title */}
              <div className="font-bold text-primaryTextColor text-[30px] lg:mt-[0px] mt-[30px]">
                <h1>{title}</h1>
              </div>

              {/* Description */}
              <div className="mt-[10px] text-[20px]">
                <p>{bio}</p>
              </div>

              <div className="flex space-x-[15px] justify-center items-center mt-[20px]">
                <a
                  href={link}
                  className="bg-blue-500 hover:bg-bHoverColor translate-colors duration-300 text-white font-bold py-1 px-4 rounded hover:animate-pulse flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                 <span className='pr-3'> Github </span>
                  <VscGithubAlt size={20}/>
                </a>
                {demo && (
                  <a
                    href={demo}
                    className="bg-violet-500 hover:bg-bHoverColor translate-colors duration-300 text-white font-bold py-1 px-4 flex rounded hover:animate-pulse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     <span className='pr-3'> Demo </span>
                    <VscDebugContinueSmall size={20} />
                 
                  </a>
                )}
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default ProjectCard