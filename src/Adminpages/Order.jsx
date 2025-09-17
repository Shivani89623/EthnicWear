
import { useState,useEffect } from 'react';
import axios from 'axios';

const Order=()=>{
    const[mydata,setMydata] =useState([]);
const loadData=async()=>{
  let api ="http://localhost:3000/order";
  const Response= await axios.get(api);
  
  setMydata(Response.data);
}
useEffect(()=>{
  loadData();
},[])
const ans=()=>mydata.map((item)=>{
    return(
        <>
        <tr>
            <td>{item.name}</td>
             <td>{item.Number}</td>
             <td>{item.Houseno}</td>
              <td>{item.Roadname}</td>
               <td>{item.city}</td>
                <td>{item.state}</td>
        </tr>
        </>
    )
})

return(
    <>
    <h1 style={{ textAlign: "center", color: "darkgoldenrod" }}> welcome to order page!!</h1>
    <h4 style={{textAlign:"center",color:"orange"}}>Your Customer Detail Here</h4>
    <table  border="1 "style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse",boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <thead>
        <tr  border="1"style={{ backgroundColor: "#4CAF50", color: "white"  }}>
          <th >Name</th>
          <th>Number</th>
          <th>Houseno</th>
          <th>Roadname</th>
          <th>city</th>
          <th>state</th>
        </tr>
      </thead>
      <tbody>
         {ans()}
      </tbody>
      </table>

    </>
)
 }
 export default Order;