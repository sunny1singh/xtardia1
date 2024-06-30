import axios from 'axios';

import { useRef } from "react";
import { TiDelete } from "react-icons/ti";
const Login=({handledelete,handlenamea})=>{
    const handleDelete=()=>{
        handledelete()
    }
    const a=useRef()
   
    const handlename=(e)=>{
        e.preventDefault()
        const USERNAME=a.current.value
    handlenamea(USERNAME)
    fetch("http://127.0.0.1:8000/api", {
      method: "get",
      headers: {
          "Content-Type": "application/json"
      },
    
  })
  .then(res => res.json())
  .then(res => {
      console.log(res);
  })
   
        
    }
 return (
 <>
   <form  className="loginform user" >
     <div className="logindata">
        <h3 className="Xtardiaheading" >XTARDIA</h3>
        <input ref={a} className="input" type="text" name="" id="" placeholder="Enter Your Name" />
        <input className="input" type="email" name="" id="" placeholder="Enter Your Email" />
        <input className="input" type="number" name="" id="" placeholder="Enter Your Number" />
        <button onClick={(e)=>handlename(e)}>input</button>
     </div>
     <div className="xtardiadescription">
        <img src="images/delivery.jpg" alt="" />
     </div>
     <TiDelete className="deleteicons" onClick={handleDelete}/>
   </form>

    
 </>
 )
}
export default Login
