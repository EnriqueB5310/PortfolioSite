import React from 'react'
import Logo from '../assets/art.svg'
import Github from '../assets/Github.png'
import Linkedin from '../assets/Linkedin.png'



function Home() {
  return (
   
<div className='flex items-center flex-col text-slate-50'>

<div className='text-center'>
<h1 className='text-2xl pt-9 '>Enrique Barrios</h1>
<h1 className='text-1xl pb-4'>Software Developer</h1>
<p className='text-center pb-5'>Hello! I'm Enrique Barrios, a passionate Developer based in New York City</p>
</div>

<div className='flex'>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-6 rounded">Contact</button>
<button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4   rounded">Resume</button>
</div>

<div className='flex mt-4 mb-4'>
    <img className='w-12 mr-5' src={Github}></img>
    <img className='w-12' src={Linkedin}></img>
</div>
<img src={Logo}></img>





</div>



  )
}

export default Home