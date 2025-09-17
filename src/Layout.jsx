import { Outlet } from "react-router-dom";
import TopHeader from "./Component/TopHeader";
import Topmenu from "./Component/Topmenu";
import Footer from "./Component/Footer";
import Search from "./Component/Search";

const Layout=()=>{
    return(
<>
<div id="topnav">
<TopHeader/>
<Search/>
<Topmenu/>

</div>

<Outlet/>

<Footer/>

</>
    )
}
export default Layout;