import React from 'react'
import Card from './Card'
function Stacks() {
  return (
    <div className='bg-slate-950'>

<h1 className='text-slate-50 pt-20 pb-10 text-2xl font-bold text-center'>My tech stack</h1>

<div className='flex flex-col  lg:flex-row lg:justify-center items-center'>

<div className='flex flex-row justify-center lg:ml-5 bg-slate-500 rounded-md pl-20 pr-20'>
        <div className='flex-row'>
        <h1 className='text-slate-50 text-lg font-bold pt-5 pb-5'>Front-end</h1>

        <div className='flex'>  
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='w-10 '></img>
        <h1 className='text-slate-50 text-lg font-bold pt-5 ml-5'>JS</h1>
        </div>

        <div className='flex'>
            
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='w-10' />
          
        <h1 className='text-slate-50 text-lg font-bold pt-5 ml-5'>React</h1>
        </div>

        <div>
        <h1 className='text-slate-50 text-lg font-bold pt-5 pb-5'>Tailwind</h1>
        </div>
        </div>
        </div>



        <div className='flex flex-row justify-center lg:ml-5 bg-slate-500 rounded-md lg:mt-0 mt-10 pl-20 pr-20'>
        <div className='flex-row'>
        <h1 className='text-slate-50 text-lg font-bold pt-5 pb-5'>Back-end</h1>
        <h1 className='text-slate-50 text-lg font-bold pt-5'>Node</h1>
        <h1 className='text-slate-50 text-lg font-bold pt-5'>Express</h1>
        <h1 className='text-slate-50 text-lg font-bold pt-5 pb-5'>Spring</h1>
        </div>
        </div>
        </div>
</div>
    
  )
}

export default Stacks