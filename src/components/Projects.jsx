import React from 'react'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
   
   <>
    <h1 className='text-slate-50 pt-10 pb-10 text-2xl font-bold text-center'>Projects</h1>

    <div className='flex justify-center'>
<ProjectCard
project="Flight API"
bio="A webAPI made in Java's Spring framework that handles the storage and mock purchases of flights"
stack1=" https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
/>

    </div>
</>

  )
}

export default Projects