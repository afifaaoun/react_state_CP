
import React, {useState} from 'react'

const Test = () => {
    let [nom, setNom] = useState("afifa");
console.log(nom);
  return (
    <div>
        <h1> hello! my name is {nom}</h1>
        <input type="text" onChange={(e)=>setNom(e.target.value)}/>
        <h1>{"hello"+ nom}</h1>
        
    </div>
  )
}

export default Test
