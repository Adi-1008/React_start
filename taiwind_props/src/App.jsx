import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black'>TailWind test</h1>
      <Card laptop = "HP Pavilion" btnText="Click Me"/>
      <Card laptop = "Dell Inspiron"/>
    </>
  )
}

export default App
