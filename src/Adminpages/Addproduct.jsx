import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
const AddProduct=()=>{
  const [input, setInput] = useState({});
  const [image, setImage] = useState("");

  const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;

     setInput(values=>({...values, [name]:value}));
     console.log(input);
  }
  const handleImage=(e)=>{
          setImage(e.target.files[0]);
  }


 const handleSubmit=async(e)=>{
       e.preventDefault();
       let cloudApi="https://api.cloudinary.com/v1_1/dullcbflu/image/upload"
       const formData = new FormData();
       formData.append("file", image);
        formData.append("upload_preset", "EthnicWear");
        const response = await axios.post(cloudApi, formData);
        console.log(response.data.url);
  
        let api="http://localhost:3000/products";
        const response1 = await axios.post(api, {...input, images:response.data.url});

        alert("Product Succesfully Added!");

 }
  return(
        <>
        <div >
         <h2> Add New Product</h2>
          <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Brand</Form.Label>
        <Form.Select name="brand" aria-label="Default select example" onChange={handleInput}>
      <option>Select Brand</option>
      <option value="Biba">Biba</option>
      <option value="Aurelia">Aurelia</option>
      <option value="Global Desi Jaipur Kurit">Global Desi  Jaipur Kurti</option>
       <option value="Melange by Lifestyle">Melange by Lifestyle</option>
        
        <option value="Aks">Aks</option>
        <option value="Fabindia">Fabindia</option>
        <option value="Indya">Indya</option>
        <option value="Libas">Libas</option>

    </Form.Select>
      </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
       
       <Form.Select name="category" aria-label="Default select example" onChange={handleInput}>
      <option >Select Category</option>
      <optgroup label="Kurtas & Kurtis">
    <option value="Straight Kurta">Straight Kurta</option>
    <option value="Anarkali Kurta">Anarkali Kurta</option>
    <option value="A-line Kurti">A-line Kurti</option>
     <option value="High-low Kurti">High-low Kurti</option>
  </optgroup>

  <optgroup label="Ethnic Sets">
    <option  value="Kurta with Palazzo Set">Kurta with Palazzo Set</option>
    <option value="Kurta with Skirt Set">Kurta with Skirt Set</option>
    <option value="Kurta with Dupatta Set">Kurta with Dupatta Set</option>
     <option></option>
  </optgroup>
  <optgroup label="Sarees">
    <option value="Silk Saree">Silk Saree</option>
    <option value="Cotton Saree">Cotton Saree</option>
    <option  value="Chiffon/Georgette Saree">Chiffon/Georgette Saree</option>
     <option  value="Designer Saree">Designer Saree</option>
  </optgroup>
  <optgroup label="Lehengas & Ghagras">
    <option>Bridal Lehenga</option>
    <option>Party Wear Lehenga</option>
    <option>Indo-Western Lehenga</option>
  </optgroup>
  <optgroup label="Salwar Suits & Dress Material">
    <option>Palazzo Suit</option>
    <option>Churidar Suit</option>
    <option>Unstitched Dress Material</option>
     
  </optgroup>
    </Form.Select>                                                                           
      </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price </Form.Label>
        <Form.Control type="text" name="price"  onChange={handleInput}/>
      </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Product Image</Form.Label>
        <Form.Control type="file" name="file"  onChange={handleImage} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default AddProduct;