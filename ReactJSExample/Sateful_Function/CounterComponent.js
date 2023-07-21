// This is a simple example of Staeful application

import { useState } from "react";

const CounterComponent = () =>{

    let [Counter,setcounter]=useState(0)

    let btnHandler=() =>{
        console.log("Btn Clicked")
        setcounter(Counter+1)
    }

    return (
       
       <div>
        <h3>
         <p>Counter: {Counterounter}</p>
         <button  onClick={btnHandler}>Click Here</button>
         </h3>
       </div>

    
    );
}

export default CounterComponent;
