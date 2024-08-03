import { useState } from 'react'

import './App.css'

function App() {
    let [counter, setCounter] = useState(17);

    let addValue = () =>{
      setCounter(counter +1);
      //console.log("clicked", counter);
    }

    let removeValue =() =>{
      setCounter(counter-1);
    }
    

  return (
    <>
     <h1> Simple Counter Website in reactJs</h1>
     <h2>Value : {counter}</h2>

     <button onClick={addValue}>Add value</button><br />
     <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
