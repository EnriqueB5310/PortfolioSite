import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Logo from './assets/art.svg'
import Home from './components/Home'
import Stacks from './components/Stacks'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  

  return (
  <>
      <Header />
     <Home />
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
     <Skills />
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <Projects />  

  <Footer />
    
</>


 
  )
}

export default App
