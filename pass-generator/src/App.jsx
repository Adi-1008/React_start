import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordRef = useRef(null)

  const copyPassToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  ,[password])

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%&*+-?"

    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(idx)
    }

    setpassword(pass)
  }, [length, numAllowed, charAllowed, setpassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-screen ml-96 shadow-md rounded-lg px-4 my-8 text-orange-600'>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 max-w-md">
          <input type="text"
          className="outline-none w-full py-1 px-3"
          placeholder='Password'
          value={password}
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPassToClipboard}
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={14}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked = {numAllowed}
            id='numberInput'
            onChange={()=>{
              setNumAllowed((prev) => !prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='characterAllowed'
            onChange={()=>{
              setcharAllowed((prev)=>!prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
