import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Search=()=>{
    const[name,setName] =useState("");
    
const[mydata, setMydata] = useState([]);
const handleSubmit =async()=>{
  let api =`http://localhost:3000/products/?name=${name}`
  const Response = await axios(api)
  console.log(Response.data)
  setMydata(Response.data)
}
const ans =mydata.map((key)=>{
  return(
    <>
    <tr>
         <Card style={{ width: '18rem', margin:"10px" }}>
      <Card.Img variant="top" src={key.images}  height="200" />
      <Card.Body>
        <Card.Title>{key.brand}</Card.Title>
        <Card.Text>
           {key.name}
           <br />
           <span style={{color:"red"}}>Category : {key.category}</span> 
           <br />
           <span style={{color:"navy" , fontWeight:"bold"}}>Price : {key.price}</span> 
        </Card.Text>
      <Button variant="primary" onClick={()=>{dispatch(addTocart({id:key.id, name:key.name, brand:key.brand, category:key.category, price:key.price, images:key.images, qnty:1}))}}>Add To Cart</Button>
      </Card.Body>
    </Card>
      </tr>
        </>
       ) })
    return(
        <>
       Enter products Name: <input type="text"  placeholder="products Search here.."style={{boxSizing:"border-box",width:"80%"}}  value={name}    onChange={(e)=>{setName(e.target.value)}} />
        <button onClick={handleSubmit} style={{background:"pink"}}>Search</button>
        <div id='topCollection' style={{width:"90%", margin:"auto"}}>
      
        {ans}

 </div>
        
        </>
    )
} 

export default Search;