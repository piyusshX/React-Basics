import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5
  // function addValue() {
  //   counter++
  //   console.log("Counter incremented to ", counter)
  // }

  // As we can see that the val of the counter is changing but we are facing the problem in UI updation
  // of the that variable. 

  // To solve the problem related to UI updating and etc React came in exitense and it uses Hooks to solve 
  // these problems. To solve this problem we can use  useState  hook. First we need to import that hook
  // Syntax for improting -> import { hookName1, hookName2,... } from 'react'

  // useState -> let [varName, funName] = useState(defaultValue)
  // funName -> it takes the value and update in the varName in the whole UI everywhere
  
  let [counter, setCounter] = useState(5)
  let [errorMsg, message] = useState("")

  function incValue() {
    if (counter < 20) {
      message("")
      setCounter(counter + 1)
    }
    else message("Counter's maximum limit is reached!")
  }

  function decValue() {
    if (counter > 0) {
      message("")
      setCounter(counter - 1)
    }
    else message("Counter's minimum limit is reached!")
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value : {counter} </h2>
      <button 
      onClick={incValue}
      >Increase Value</button>
      <br />
      <button
      onClick={decValue}
      >Decrease Value</button>
      <p> {errorMsg} </p>
    </>
  )
}

export default App
