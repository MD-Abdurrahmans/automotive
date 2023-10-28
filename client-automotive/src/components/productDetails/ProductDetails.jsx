import { Navigate, useLoaderData } from "react-router-dom";
import  Rating  from 'react-rating';
import Swal from "sweetalert2";
import {  useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const ProductDetails = () => {
const [cart,setCart] = useState(false)

  
  const  brandDetails = useLoaderData();

    const {brand,image,name,description,price,ratings,color} = brandDetails || {};

    console.log('details',brandDetails)
// function add to cart 

 if(cart){
  return <Navigate to='/myCarts' ></Navigate>
 }else{
  ""
 }

const hanldeAddToCart =(e)=>{

    const userCart = {brand,image,name,description,price,ratings}
    e.preventDefault();
    console.log('done doen',userCart)


     fetch('https://server-automotive-6lj38stzh-rajs-projects-d77d3858.vercel.app/cart',{

          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(userCart)

     })
     .then((res)=>res.json())
     .then((data)=>{

      if(data.insertedId){
        Swal.fire(' successfully cart added')
        setCart(true)
      
       }
     
     

     })

}



console.log('image', image,name,brand)


    return (
        <div className="container mx-auto min-h-screen  mt-24">
          
          <div className=" w-full  md:flex  lg:items-center ">
            <div className="md:w-1/2 mr-4">
            <img data-aos="fade-left"  src={image} className="" alt="" />
            </div>

             <div data-aos="fade-right "  className="md:w-1/2 text-justify py-8  md:py-0 px-5 md:px-0 ">
             <h1 className="text-3xl">{name}</h1>
         

             <Rating 

emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
}
fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-700">
<path  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"  />
</svg>
}
         initialRating={ratings}
                 readonly
                  />
                     <div className="flex space-x-10">
                     <h1 className="text-2xl ">BRAND: {brand}</h1>
                     <h1 className="text-2xl ">COLOR: {color}</h1>
                     </div>
             <h1 className="text-2xl text-red-600 font-bold md:pb-7 lg:pb-0 ">Price: ${price}</h1>
             <h1 className="text-base">{description}</h1>

               <form onSubmit={hanldeAddToCart} className="w-full">
                <button className="btn w-full mt-6  bg-red-600 text-white">Add to cart</button>
               </form>

             </div>
          </div>

            
        </div>
    );
};

export default ProductDetails;