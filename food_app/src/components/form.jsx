import { useState } from "react"

export const Form = () =>{

    const [text, setText] = useState("");
    const [add, setAdd] = useState([]);

    return <div className='form'>
    <h1>Recipe of food</h1>
     
       <label>Title</label> <br></br>
       <input value = {text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Title"/>
       <br></br>
       <label>Ingredients</label><br></br>
       <input value = {text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Ingredients"/>
       <br></br>
       
       <label>Time to cook</label><br></br>
       <input value = {text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Time to cook"/>
       <br></br>
       
       <label>Instructions</label><br></br>
       <input value = {text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Instructions"/>
       <br></br>
       <button onClick={()=>{
           setAdd([...add,text])
       }}>Add Recipe</button>
    
    {add.map((e) =>(
        <div>{e}</div>
       ))}
       

     </div> 
     
     
   
}