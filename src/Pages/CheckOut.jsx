import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckOut=()=>{
    const   navigate = useNavigate();
    const[input,setInput]=useState({})
  
    const CartData = useSelector(state=>state.mycart.cart);  
    let products=0;
    let totalAmount=0;
     const ans=CartData.map((key)=>{
             products+=key.qnty;
             totalAmount+=key.price*key.qnty;
     })
const handleInput=(e)=>{
    let name =e.target.name 
    let value =e.target.value 
       setInput(values=>({...values, [name]:value}));
     console.log(input);
}
const handleSubmit=async(e)=>{
        e.preventDefault();
        let api ="http://localhost:3000/order"
        const response= await axios.post(api,input)
         alert("data Saved successfully!");
       navigate("/paydone");

     }

    return(
        <>
           <h1 style={{color:"red", fontSize:"25px"}}>DELIVERY ADDRESS</h1>
           <h6 align="center"> Total Item : {products} </h6>
           <h3 align="center" style={{color:"green", fontSize:"20px"}}> Order total : {totalAmount} </h3>
            <Form style={{margin:"auto", width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name*</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact Number*</Form.Label>
        <Form.Control type="text" name="Number" onChange={handleInput}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>House no./Building name*</Form.Label>
        <Form.Control type="text" name="Houseno" onChange={handleInput}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Road Name/Area/Colony*</Form.Label>
        <Form.Control type="text" name="Roadname" onChange={handleInput} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> PinCode*</Form.Label>
        <Form.Control type="text" name="pincode" onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City*</Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput}/>
         </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>State*</Form.Label>
        <Form.Control type="text" name="state" onChange={handleInput}/>
      </Form.Group>
      <div>
      <Button variant="primary" type="submit" onClick={handleSubmit} > Submit </Button>
      </div>

      
    </Form>
        </>
    )
}
export default CheckOut;