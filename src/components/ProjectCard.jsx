import React from 'react'

function ProjectCard(props) {
  return (
   <div className='bg-slate-700 px-4 flex  items-center flex-col justify-center text-center break-words lg:max-w-sm'>
<h1 className='text-slate-50 text-lg font-bold pt-5 pb-5'>{props.project}</h1>
<p className='text-slate-50 break-words text-pretty pb-8 whitespace-pre'>{props.bio}</p>

<div className='flex w-10'>
<img src={props.stack1} className='w-10' />
          
</div>

</div>
  )
}

export default ProjectCard