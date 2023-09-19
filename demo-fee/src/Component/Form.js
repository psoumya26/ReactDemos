import { useState } from "react";
//hooks---. present state   next state
function Form() {
    const [name,setName]=useState("");//name
    //HOOKS---useState
    console.log(name)
    const [tnc,setTnc]=useState(false);//checkbox
    const [interest,setInterest]=useState("");//select box
    function getFormData(e)
    {
      console.warn(name,tnc,interest)
      e.preventDefault()
    }
    return (
      <div className="App">
       <h1>Handle Form in React</h1>
       <form onSubmit={getFormData}>
         <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
         <select onChange={(e)=>setInterest(e.target.value)}>
           <option>Select Options</option>
           <option>Marvel</option>
           <option>DC</option>
         </select> <br /><br />
         <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
         <br /><br />
         <button type="submit">Submit</button>
         <button>Clear</button>
  
       </form>
      </div>
    );
  }
  
  export default Form;