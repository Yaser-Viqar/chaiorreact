import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow")

  return (
   <div 
   style={{
    backgroundColor: color,
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0}}>
   <div style={{ position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "space-around",
        padding: "15px 0",
        borderTop: "1px solibgchangerd #962d2d"}}>
       <button onClick={() => setColor("green")} style={{backgroundColor:"green", color:"black"}}>green</button>
      <button onClick={() => setColor("yellow")} style={{backgroundColor:"yellow", color:"black"}}>yellow</button>
      <button onClick={() => setColor("white")} style={{backgroundColor:"white", color:"black"}}>white</button>
      <button onClick={() => setColor("blue")} style={{backgroundColor:"blue", color:"black"}}>blue</button>
      </div>

   </div>
  )
}

export default App
