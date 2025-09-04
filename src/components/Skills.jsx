import React from 'react'
import { VscBracketDot } from "react-icons/vsc";
import SkillCard from './SkillCard';
import Typescript from '../assets/typescript.svg'
import ReactLogo from '../assets/react.svg'
import SpringLogo from '../assets/spring.svg'
import AWS from '../assets/aws.svg'
import MongoLogo from '../assets/mongodb.svg'
import NodeLogo from '../assets/node.svg'
import DockerLogo from '../assets/docker.svg'
import ExpressLogo from '../assets/express.svg'
import JavaLogo from '../assets/java.svg'
import PythonLogo from '../assets/python.svg'
import JSLogo from '../assets/javascript.svg'
import CSharpLogo from '../assets/csharp.svg'
import HtmlLogo from '../assets/html.svg'
import PostGresLogo from '../assets/postgresql.svg'
import TailwindLogo from '../assets/tailwindcss.svg'
import GitLogo from '../assets/git.svg'


function Skills() {
  return (
<div className='flex  font-black  flex-col text-slate-50 pb-60 lg:mt-[10rem] lg:pb-1'>

<div className='flex lg:justify-center lg:text-center hover:text-purple-600 duration-500'>

<VscBracketDot size={60}/>
<h4 className='text-[60px] ml-2 mt-2 text-left  lg:text-center leading-[46px]'>Skills</h4>
</div>
<p className='mt-4 mb-4 ml-3 lg:text-center'>Comitted to continuous learning and refining my skills</p>
<div className='grid grid-cols-2 lg:grid-cols-6 gap-2 lg:text-center justify-center '>
<SkillCard image={Typescript} text={"Typescript"} />
<SkillCard image={ReactLogo} text={"React"} />
<SkillCard image={SpringLogo} text={"Spring Boot"} />
<SkillCard image={AWS} text={"AWS"}/>
<SkillCard image={ExpressLogo} text={"ExpressJS"} />
<SkillCard image={NodeLogo} text={"NodeJS"} />
<SkillCard image={JavaLogo} text={"Java"} />
<SkillCard image={CSharpLogo} text={"C#"} />
<SkillCard image={PythonLogo} text={"Python"} />
<SkillCard image={JSLogo} text={"Javascript"} />
<SkillCard image={MongoLogo} text={"MongoDB"} />
<SkillCard image={PostGresLogo} text={"PostgeSQL"} />
<SkillCard image={HtmlLogo} text={"HTML/CSS"} />
<SkillCard image={DockerLogo} text={"Docker"} />
<SkillCard image={TailwindLogo} text={"Tailwind"}/>
<SkillCard image={GitLogo} text={"Git"}/>
</div>

</div>
  )
}

export default Skills