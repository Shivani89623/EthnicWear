import { useState } from "react";

const Dresses=()=>{
    const[hover,setHover]=useState(false)
return(
    <>
    
    <h1 style={{color:hover?"red" :"blue",cursor:"pointer",transition:"0.3s",fontSize:"20px" ,fontWeight:"bold"}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>Dresses for Women</h1>
    </>
)
} 
export default Dresses;