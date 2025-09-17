
import logo from "../images/logo.webp";
import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Topmenu=()=>{
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
   const handleSubmit=async(e)=>{
    e.preventDefault();
     let api=`http://localhost:3000/admin/?adminid=${email}`;

     const response = await axios.get(api);
     console.log(response.data);

      if (response.data.length>=1)
      {
            if (response.data[0].password==password)
            {
                 navigate("/admin")
            }
            else 
            {
              alert("Invalid password!!")
            }
      }
      else 
      {
        alert("Invalid Email!");
      }
    }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    return(
        <>
          <div id="topmenu">
            <div id="logo">
              <img src={logo}  />
            </div>
             <div id="hamburger" onClick={toggleMenu}>&#9776;</div>
              <div id="mainmenu"  className={menuOpen ? "active" : ""}>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="home">Home</Nav.Link>
            <Nav.Link href="Kurtis&kurtas">Kurtis&kurtas</Nav.Link>
            <Nav.Link href="Ethnic Suits">Ethnic Suits</Nav.Link>
             <Nav.Link as={Link} to="mycart">My Cart</Nav.Link>
             <Nav.Link href="Ethnic sets with Dupatta">Ethnic Sets With Dupatta</Nav.Link>
              <Nav.Link href="Dresses">Dresses</Nav.Link>
          </Nav>
            </div>
<div style={{color:"black", fontWeight:"800"}}>     </div>
       

            <div id="rightmenu">
               <Button variant="primary" onClick={handleShow} style={{backgroundColor:"pink"}}>
      Admin Login
      </Button>
            </div>
         </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
       Login
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        
        </>
    )
} 
export default Topmenu;