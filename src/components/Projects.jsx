import React from 'react'
import ProjectCard from './ProjectCard'
function Projects() {


const projects = [{

title: "Youtube Mp3 Converter",
description: "Converts Youtube videos into mp3 or mp4 format for offline viewing",
image: null,
demo: "https://ytmp3-iqma.onrender.com/",
tech: null,

}]



  return (
   
   <>
   <section id="projects" className=" min-h-[910px] bg-primary">
      
        <div className="font-bold pt-[90px] text-[60px] text-white flex justify-center text-center ">
          <h1>Projects</h1>
        </div>
        <div className="container lg:flex lg:justify-center mx-auto">
         <ProjectCard
         
         project="Mp3 Converter"
         bio="Converts youtube videos into mp3 or mp4 format for offline use"
         
         />
        </div>
     
    </section>
</>

  )
}

export default Projects