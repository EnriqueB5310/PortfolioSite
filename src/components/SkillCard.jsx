import React from 'react'

function SkillCard({image,text}) {
  return (
    <div className='flex flex-row rounded-md border py-3 mx-3 my-4 lg:w-[45%] hover:animate-bounce '>

<img className='w-12 pl-2 mr-2 ' src={image}/>
<h1 pl-3>{text}</h1>


    </div>
  )
}

export default SkillCard