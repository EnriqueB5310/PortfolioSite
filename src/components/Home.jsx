import React from 'react'
import Logo from '../assets/art.svg'
import Github from '../assets/Github.png'
import Linkedin from '../assets/Linkedin.png'



function Home() {
  return (
 
 <section className='Home'>
<div className='flex items-center font-black  flex-col text-slate-50 pb-60 lg:pb-0'>

<div className='text-center'>
<h1 className='text-5xl font-black pt-9 mb-3 hover:text-violet-600 hover:duration-500'>Enrique Barrios</h1>
<h1 className='text-2xl pb-4 font-bold text-blue-500'>Full Stack Software Developer</h1>
<p className='text-center pb-5'>Hello! I'm Enrique Barrios. Computer Science graduate and a passionate developer based in New York City eager to secure a position and further hone my skills in full stack development. With proficiency in Java, Spring boot, C#, React, AWS, And Postgres I seek to apply my technical skill in a role that benefits the masses</p>
</div>

<div className='flex'>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-6 rounded">Contact</button>
<button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4   rounded">Resume</button>
</div>

<div className='flex mt-4 mb-4'>
  <a href='https://github.com/EnriqueB5310' target="_blank">  <img  className='w-12 mr-5' src={Github}></img> </a>
    <a><img className='w-12' src={Linkedin}></img> </a>  
</div>
<img src={Logo}></img>



<div>
  
</div>

</div> 

</section>



  )
}

export default Home