import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
