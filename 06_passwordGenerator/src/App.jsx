import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef -> kisi bhi cheez ka jab hume refrence lene hota hai tab hum iss hook ko use karte hai

  let passwordRef = useRef(null)

  // Since passwordGenerator fn is going to be used again-n-again thats why we'll use useCallback
  // hook it lets you cache a function definition between re-renders.
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*(){}-_+=[]`~"

    for (let i = 1; i < length; i++) {
      let randomIdx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(randomIdx)
    }
    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])


  const copyPasswordToClipboard = useCallback( () => {
    window.navigator.clipboard.writeText(password) // direct approch but not applicable in server side rendering
    // Statement below only selects the password not copy it. Copying this done by above statement
    // We have used this statement below to give user an effect that Copying is done
    passwordRef.current?.select(); // Optional chaining (?.) -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    
    // we can also decide how much we need to select by setSelectionRange method
    // passwordRef.current?.setSelectionRange(0 , 9);
  }, [password])


  useEffect( () => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-300 bg-gray-700'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='putline-none w-full py-1 px-3' 
            placeholder='Password' readOnly ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >copy</button>
        </div>

        <div className='flex justify-between'>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={8} max={100} value={length} className='cursor-pointer'  
                onChange={(e) => {setLength(e.target.value)}} />
              <label>Length : {length}</label>
            </div>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
              onChange={() => {setNumberAllowed((prev) => !prev)}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="charInput"
              onChange={() => {setCharAllowed((prev) => !prev)}} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
