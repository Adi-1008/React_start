import { useState } from "react"

function App() {
  const[color,setColor] = useState("black");

  return (
    <div className='h-screen' style={{backgroundColor: color}}>
      <nav className='flex flex-wrap justify-center gap-8 shadow-lg px-3 py-2 bg-slate-600'>
        <button className='bg-red-600 w-20 rounded-2xl' onClick={() => setColor("red")}>Red</button>
        <button className='bg-green-600 w-20 rounded-2xl' onClick={() => setColor("green")}>Green</button>
        <button className='bg-purple-600 w-20 rounded-2xl' onClick={() => setColor("purple")}>Purple</button>
        <button className='bg-white w-20 rounded-2xl' onClick={() => setColor("white")}>White</button>
        <button className='bg-yellow-600 w-20 rounded-2xl' onClick={() => setColor("yellow")}>Yellow</button>
        <button className='bg-orange-600 w-20 rounded-2xl' onClick={() => setColor("orange")}>Orange</button>
        <button className='bg-blue-600 w-20 rounded-2xl' onClick={() => setColor("blue")}>Blue</button>
        <button className='bg-black text-white w-20 rounded-2xl' onClick={() => setColor("black")}>Black</button>
      </nav>
    </div>
  )
}

export default App
