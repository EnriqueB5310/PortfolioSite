import React from 'react'
import ProjectCard from './ProjectCard'
import Mp3Mp4 from '../assets/mp3mp4.png'


function Projects() {


const projects = [{

title: "Youtube Mp3 Converter",
bio: "Converts Youtube videos into mp3 or mp4 format for offline viewing",
image: Mp3Mp4,
demo: "https://ytmp3-iqma.onrender.com/",
tech: null,

},

{
 
  title: "Youtube Mp3 Converter",
bio: "Converts Youtube videos into mp3 or mp4 format for offline viewing",
image: Mp3Mp4,
demo: "https://ytmp3-iqma.onrender.com/",
tech: null,

}


]



  return (
   
   <>
   <section id="projects" className=" min-h-[910px] bg-primary">
      
        <div className="font-bold pt-[90px] text-[60px] text-white flex justify-center text-center ">
          <h1 className='mb-20 hover:text-violet-600 hover:duration-500'>Projects</h1>
        </div>
        <div className="container lg:grid lg:justify-center mx-auto">
        {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              bio={project.bio}
              link={project.link}
              demo={project.demo}
            />
          ))}
        </div>
     
    </section>
</>

  )
}

export default Projects