import Loading from "../Images/Loading.gif";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const PaymentDone=()=>{
    const [isLoading, setIsLoading] = useState(true);
      const notify = () => toast("Order placed successfully!");

    setTimeout(()=>{
          setIsLoading(false);
    }, 2000);

    return(
        <>
    
         {isLoading ? (<>
             <center>
            <img src={Loading} />
         </center>
          </>) : (<> 
         <div align="center">
        <button onClick={notify}  style={{ color:"white",background:"green"}}>Payment Done!!</button>
        <   ToastContainer />
      </div>

         </>)}
        
         
        </>
    )
}

export default PaymentDone;