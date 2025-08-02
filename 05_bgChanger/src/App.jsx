import { useState } from "react"
import Btn from "./components/Btn"
function App() {
  const [color , setColor] = useState("olive")


  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="flex flex-wrap justify-center bottom-12 fixed px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-cyan-500 px-3 py-2 rounded-3xl">
          <Btn btnColor="red" btnText="Red" textColor="white" onClick={() => setColor("red")}/>
          <Btn btnColor="green" btnText="Green" textColor="white" onClick={() => setColor("green")}/>
          <Btn btnColor="blue" btnText="Blue" textColor="white" onClick={() => setColor("blue")}/>
          <Btn btnColor="olive" btnText="Olive" textColor="white" onClick={() => setColor("olive")}/>
          <Btn btnColor="gray" btnText="Gray" textColor="white" onClick={() => setColor("gray")}/>
          <Btn btnColor="yellow" btnText="Yellow" textColor="black" onClick={() => setColor("yellow")}/>
          <Btn btnColor="pink" btnText="Pink" textColor="black" onClick={() => setColor("pink")}/>
          <Btn btnColor="purple" btnText="Purple" textColor="white" onClick={() => setColor("purple")}/>
          <Btn btnColor="white" btnText="White" textColor="black" onClick={() => setColor("white")}/>
          <Btn btnColor="aqua" btnText="Aqua" textColor="black" onClick={() => setColor("aqua")}/>
          <Btn btnColor="black" btnText="Black" textColor="white" onClick={() => setColor("black")}/>
        </div>
      </div>
    </div>
  )
}

export default App
