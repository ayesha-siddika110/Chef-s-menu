import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipies from './componants/recipies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Recipies></Recipies>
      
    </>
  )
}

export default App
