import { Link, Outlet } from "react-router-dom";
const AdminDashBoard=()=>{
    return(
        <>
         
           <div id="adminheader">
              <marquee behavior="scroll" direction="right">Welcome To Admin DashBoard</marquee> 
           </div>
          <div id="adminwrapper">
              <div id="leftmenu"> 
                   
               <Link to="addproduct" className="adminmenu"><h1 style={{color:"black" ,fontSize:"medium" }} className="hero">Upload Product</h1> </Link>   
                 <Link to="order" className="adminmenu"><h1 style={{color:"black" ,fontSize:"medium" }} className="hero">Order Product</h1> </Link>   
                 
              </div>
              <div id="admindata">
                 <Outlet/>

              </div>

           </div>
        
        </>
    )
}

export default AdminDashBoard;