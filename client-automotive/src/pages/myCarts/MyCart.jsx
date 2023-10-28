import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Carts from "../../components/carts/Carts";
import { FaShoppingCart } from "react-icons/fa";

const MyCart = () => {

    const loadCarts = useLoaderData()

     const [carts,setCarts] = useState(loadCarts)

    return (
        <div className="container mx-auto">
            <div className="flex  items-center p-10 justify-center">
                
        <h2 className="text-2xl  md:text-5xl   font-semibold "> 
         YOUR CART 
           </h2> 
 
 <div> <FaShoppingCart className="text-4xl flex items-center  text-red-600 relative  " ></FaShoppingCart>
 
 

 </div>
            </div>
         <div className="grid  px-4 md:px-0 my-8 md:my-0 grid-cols-1 md:grid-cols-2 gap-4">
            
         {
                carts?.map(cart=> <Carts key={cart._id} 
                    carts={carts}
                    setCarts={setCarts}
                    cart={cart} ></Carts>)
             }

         </div>
  
        </div>
    );
};

export default MyCart;