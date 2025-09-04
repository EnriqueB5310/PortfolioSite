import React from 'react'
import ProjectCard from './ProjectCard'
import Mp3Mp4 from '../assets/mp3mp4.png'
import Portfolio from '../assets/portfolio.png'
import Church from '../assets/church.jpg'
import { IoIosDesktop } from "react-icons/io";




function Projects() {


const projects = [{

title: "Youtube Mp3 Converter",
bio: "Converts Youtube videos into mp3 or mp4 format for offline viewing",
image: Mp3Mp4,
demo: "https://ytmp3-iqma.onrender.com/",
tech: null,
link: "https://github.com/EnriqueB5310/MP3Converter"

},

{
 
  title: "Portfolio Site",
bio: "Personal webpage displaying resume, contacts and projects (You're on it!)",
image: Portfolio,
demo: "https://ytmp3-iqma.onrender.com/",
tech: null,

},
{
  title:"ComicsVine api wrapper",
  bio: "Wrapper api made in SpringBoot to cache the calls of the Comicvine API",
  image: null,
  tech: null,
  link: "https://github.com/EnriqueB5310/CB-wrapper",
  demo: null
},

{

  title:"Queen Of Lady Peace",
  bio:"Buissness page for Queen of Lady Peace church located in Allentown PA",
  image: Church,
  link: null ,
  demo: "https://qopchurch.org/",
  tech: null

}


]



  return (
   
   <>
   <section id="projects" className=" min-h-[910px] bg-primary">
      
       <div className='flex lg:justify-center sm:text-center font-black text-slate-50 hover:text-purple-600 duration-500'>
       
       <IoIosDesktop size={60}/>
       <h4 className='text-[60px] ml-2 mt-2 text-left  lg:text-center leading-[46px]'>Projects</h4>
       
       </div>
       <p className='mt-4 mb-4 ml-3 lg:text-center text-slate-50 font-black'>Explore some of my recent projects</p>
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