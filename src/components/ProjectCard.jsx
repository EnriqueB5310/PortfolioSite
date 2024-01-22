import React from 'react'

function ProjectCard(props) {
  return (
   <div className='bg-slate-500 px-4 flex  items-center flex-col text-center'>
<h1 className='text-slate-50 text-lg font-bold pt-5 pb-5'>{props.project}</h1>
<p className='text-slate-50'>{props.bio}</p>

<div className='flex w-10'>
<img src={props.stack1} className='w-10' />
          
</div>

</div>
  )
}

export default ProjectCard