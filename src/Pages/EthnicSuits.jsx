
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import eb1 from "../Images/eb1.webp";
import eb2 from "../Images/eb2.webp";
import e2 from "../Images/e2.jpg";
import e3 from "../Images/e3.jpg";
import e4 from "../Images/e4.jpg";
import e5 from "../Images/e5.jpg";
import e6 from "../Images/e6.jpg";
import e7 from "../Images/e7.jpg";
import e8 from "../Images/e8.jpg";
import e9 from "../Images/e9.jpg";
import Carousel from 'react-bootstrap/Carousel';
const EthnicSuits=()=>{
    return(
        <>
<Carousel>
      <Carousel.Item interval={1000}>
        <img src={eb1} width="100%" height="400" alt="First slide" />
        <Carousel.Caption>
    
          <p> Our collection is designed to make you look and feel amazing every day."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
     <img src={eb2} width="100%" height="400" alt="Second slide"  />
        <Carousel.Caption>
          
          <p>"Shop your favorite looks anytime, anywhere</p>
        </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>
     
     <h1 style={{fontFamily:" Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    color: "orange",  textAlign:"center",hover:"voilet"}}>Our  Ethinic suit Collections</h1>

   <div className='card-container' align="center">
     <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={e2} height="200" />
      <Card.Body>
        <Card.Title>Fabindia</Card.Title>
        <Card.Text>
         Women Chanderi Kurta Pant Attached Dupatta Set</Card.Text>
         <h6 style={{color:"red"}}>Category :Kurta with Dupatta Set</h6>                  
        <h6 style={{color:"navy"}}>Price : 1200</h6>
        <Button variant="primary">add to Cart</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={e3} height="200" />
      <Card.Body>
        <Card.Title>Biba</Card.Title>
        <Card.Text>
            Women Floral Print Pure Cotton Anarkali Kurta (Multicolor)</Card.Text>
         <h6 style={{color:"red"}}>Category :Kurta with Dupatta Set</h6>
        <h6 style={{color:"navy"}}>Price : 999</h6>
        <Button variant="primary">add to Cart</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={e4} height="200" />
      <Card.Body>
        <Card.Title>Global Desi Jaipur Kurit</Card.Title>
        <Card.Text>
         Chanderi Kurta Pant Attached Dupatta Set</Card.Text>
         <h6 style={{color:"red"}}>Category :Kurta with Dupatta Set</h6>
        <h6 style={{color:"navy"}}>Price : 1456</h6>
        <Button variant="primary">add to Cart</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={e5} height="200" />
      <Card.Body>
        <Card.Title>Libas</Card.Title>
        <Card.Text>
          Women Silk Blend Kurta Pant Dupatta Set
         </Card.Text>
         <h6 style={{color:"red"}}>Category : Cotton Kurta with Dupatta Set</h6>
        <h6 style={{color:"navy"}}>Price : 889</h6>
        <Button variant="primary">add to Cart</Button>
        
      </Card.Body>
    </Card>

     <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={e6} height="200" />
      <Card.Body>
        <Card.Title>Fabindia</Card.Title>
        <Card.Text>
          Women Floral Print, Printed Viscose Rayon Anarkali Kurta 
        </Card.Text>
         <h6 style={{color:"red"}}>Category : party Wear Kurta Set</h6>
        <h6 style={{color:"navy"}}>Price : 2300</h6>
        <Button variant="primary">add to Cart</Button>
        
      </Card.Body>
    </Card>

     <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={e7} height="200" />
      <Card.Body>
        <Card.Title>Biba</Card.Title>
        <Card.Text>
         Women Chanderi Kurta Pant Attached Dupatta Set</Card.Text>
         <h6 style={{color:"red"}}>Category :Kurta with Dupatta Set</h6>
        <h6 style={{color:"navy"}}>Price : 789</h6>
        <Button variant="primary">add to Cart</Button>
        
      </Card.Body>
    </Card>


     <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={e8} height="200" />
      <Card.Body>
        <Card.Title>Melange by Lifestyle</Card.Title>
        <Card.Text>
          Women Silk Blend Kurta Pant Dupatta Set
         </Card.Text>
         <h6 style={{color:"red"}}>Category :Kurta with Dupatta Set</h6>
        <h6 style={{color:"navy"}}>Price : 1050</h6>
        <Button variant="primary">add to Cart</Button>
        
      </Card.Body>
    </Card>


     <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={e9} height="200" />
      <Card.Body>
        <Card.Title>Aurelia</Card.Title>
        <Card.Text>
          Kurta Pant Attached Dupatta Set</Card.Text>
         <h6 style={{color:"red"}}>Category : Ethnic Kurta with Dupatta Set</h6>
        <h6 style={{color:"navy"}}>Price : 1655</h6>
        <Button variant="primary">add to Cart</Button>
        
      </Card.Body>
    </Card>
        </div>
        </>
    )
}
export default EthnicSuits;