import { useState } from 'react'

import './App.css'

function App() {
    let [counter, setCounter] = useState(0);

    let addValue = () =>{
      setCounter(counter +1);
      //console.log("clicked", counter);
    }

    let removeValue =() =>{
      if(counter > 0){        
      setCounter(counter-1);
      }else if(counter === 0){
          alert("Value can't be less then zero");
      }
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
