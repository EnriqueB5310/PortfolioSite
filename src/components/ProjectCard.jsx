import React from 'react'

function ProjectCard(props) {
  return (
   <div className='bg-slate-500 px-10'>
<h1 className='text-slate-50 text-lg font-bold pt-5 pb-5'>{props.project}</h1>
</div>
  )
}

export default ProjectCard