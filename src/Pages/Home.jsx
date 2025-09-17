
import w1 from "../Images/w1.webp";
import w2 from "../Images/w2.webp";
import w3 from "../Images/w3.webp";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addTocart } from "../CartSlice";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const Home =()=>{
  const [mydata, setMydata] = useState([]);
const dispatch = useDispatch();
const loadData=async()=>{
    let api="http://localhost:3000/products";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
}

useEffect(()=>{
  loadData();
}, [])


const ans= mydata.map((key)=>{
   return(
    <>
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

    </>
   )
})
return(
    <>

<Carousel>
      <Carousel.Item interval={1000} lineHeight="5">
        <img src={w1} width="100%" height="400" alt="First slide" />
        <Carousel.Caption>
          <h3 style={{textAlign:"left", lineHeight:"6"}}>“Wear Your Style, Own Your Story”</h3>
          <p> Our collection is designed to make you look and feel amazing every day."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
     <img src={w2} width="100%" height="400" alt="Second slide"  />
        <Carousel.Caption>
          <h3>“Be Bold, Be Different”</h3>
          <p>"Shop your favorite looks anytime, anywhere</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={w3} width="100%" height="400" alt="Third slide" />
        <Carousel.Caption>
          <p>
          Comfortable fabrics, modern cuts, and versatile looks that fit your lifestyle."</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <h1 style={{fontFamily:" Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    color: "violet", textAlign: "center", fontWeight:"bold"}}>Our Collections</h1>

      
 <div id='topCollection' style={{width:"90%", margin:"auto"}}>
      
        {ans}

 </div>
    </>
)
}
export default Home;