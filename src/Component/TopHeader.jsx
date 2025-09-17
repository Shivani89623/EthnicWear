import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const TopHeader=()=>{
    const CartData= useSelector(state=>state.mycart.cart);
  const CartLength= CartData.length;
  
  const navigate = useNavigate();
return(
    <>
     
    <div id="topheader" style={{ background: "pink", padding: "8px", fontWeight: "bold", textAlign:"right", lineHeight:"1.2", position:"relative", display:"inline-block" }}>
      <marquee behavior="scroll" direction="right">
        🎉 Welcome to Our Fashion Store – Flat 50% OFF on Kurtis & Suits! 🎉
      </marquee>
         < FaShoppingCart  onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer",fontSize:"20px"}}/> 
          {CartLength>0 &&<span style={{position:"absolute",top:"-1px", right:"2px", lineHeight:"3",color:"white",background:"red",fontSize:"10px",fontWeight:"bold",borderRadius:"50%",padding:"2px 4px",textAlign:"center",maxWidth:"20px"}}>{CartLength}</span>}
       
    </div>

    </>
)
}
export default TopHeader;