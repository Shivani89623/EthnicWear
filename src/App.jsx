import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import AdminDashBoard from "./AdminDashBoard";
import AddProduct from "./Adminpages/Addproduct";
import MyCart from "./Pages/MyCart";
import KurtisKurtas from "./Pages/KurtisKurtas";
import EthnicSuits from "./Pages/EthnicSuits";
import EthnicSetswithDupatta from "./Pages/EthnicSetswithDupatta";
import Dresses from "./Pages/Dresses";
import CheckOut from "./Pages/CheckOut";
import Order from "./Adminpages/Order";
import PaymentDone from "./Pages/PaymentDone";


const App=()=>{
  return(

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="mycart" element={<MyCart/>}/>
      <Route path="kurtis&kurtas" element={<KurtisKurtas/>}/>
      <Route path="Ethnic Suits" element={<EthnicSuits/>}/>
      <Route path="Ethnic Sets With Dupatta" element={<EthnicSetswithDupatta/>}/>
      <Route path="Dresses" element={<Dresses/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
        <Route path="paydone" element={<PaymentDone/>}/>
            
      
      </Route>

    </Routes>
     <Routes>
             <Route path="/admin" element={<AdminDashBoard/>}>
              <Route path="addproduct" element={<AddProduct/>}/>
              <Route path="order" element={<Order/>}/>
                
             </Route>
             </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;