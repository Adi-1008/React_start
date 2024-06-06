import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(5)
  const increase = () =>{
    if(count>=20)
      {
        alert("Can't go above 20")
        return
      }
    count = count+1;
    setCounter(count)
  }
  const decrease = () =>{
    if(count<=5)
      {
        alert("Can't go below 5")
        return;
      }
    count = count-1;
    setCounter(count)
  }
  const res = () =>{
    count=5;
    setCounter(count)
  }
  return (
    <>
      <h1>Making a basic counter</h1>
      <h2>Value : {count}</h2>
      <button onClick={increase}>Value Up</button>
      <button onClick={decrease}>Value Down</button>
      <button onClick={res}>Reset</button>
    </>
  )
}

export default App
