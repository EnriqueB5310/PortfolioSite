import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Logo from './assets/art.svg'
import Home from './components/Home'
import Stacks from './components/Stacks'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
      <Header />
     <Home />
<Stacks />
     
    
</>


 
  )
}

export default App
