import {  useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
const [update,setUpdate] = useState(false)


const  brandUpdate = useLoaderData();



    const {brand,image,name,price,ratings,_id} = brandUpdate || {};

  
    if(update){
      return <Navigate to='/myCarts'></Navigate>
    }else{
      ""
    }


    const handleUpdate =(e)=>{
  
        e.preventDefault();
               const form =  e.target;
       
       
               const name = form.name.value;
               const brand = form.brand.value;
               const price = form.price.value;
               const ratings = form.ratings.value;
               const image = form.image.value;
    
                const products =  {name,brand,price,ratings,image} 
             
               
          console.log(products)
               // api end point
       
             
               fetch(`https://server-automotive-6lj38stzh-rajs-projects-d77d3858.vercel.app/cart/${_id}`,{
       
                method:'PUT',
                headers:{
                  'content-type':'application/json',
                },
            
                 body:JSON.stringify(products)
                 
       
               })
               .then((res)=>res.json())
               .then((data)=>{              
                if(data){
                 Swal.fire('Products UPDATED successfully!')
                 setUpdate(true)
                console.log(data)
                }
              
               

               })
              
              
               .catch((error)=>{
                 Swal.fire('somethng is wrong')
                 console.log(error)})
       
       
               
       
       
       
           }



       

    return (
        <div className="container mx-auto   mt-14 ">


        <h1 className="text-3xl md:text-6xl  text-red-600 text-center p-11" >Update </h1>

         <form  onSubmit={handleUpdate} >

         <div className="w-full flex flex-wrap justify-between     ">
                
                {/* name field */}
            <div className="form-control w-1/2  ">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">
    <span>Name</span>
    <input type="text"  name="name"  defaultValue={name} className="input input-bordered w-full mr-2" />
  </label>
</div>
            
                {/* Type field */}
            <div className="form-control w-1/2  ">
  <label className="label">
    <span className="label-text">Brand/Type</span>
  </label>
  <label className="input-group">
    <span>Brand</span>
    <input type="text"  name="brand"  defaultValue={brand} className="input input-bordered w-full mr-2" />
  </label>
</div>

     


                {/* Price field */}
            <div className="form-control w-1/2   ">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
    <span>Price</span>
    <input type="text"  name="price"  defaultValue={price} className="input input-bordered  mr-2 w-full" />
  </label>
</div>
                {/* Ratings field */}
            <div className="form-control w-1/2   ">
  <label className="label">
    <span className="label-text">Ratings</span>
  </label>
  <label className="input-group">
    <span>Ratings</span>
    <input type="text"  name="ratings"  defaultValue={ratings} className="input input-bordered  mr-2 w-full" />
  </label>
</div>

                {/* Image 1 field */}
            <div className="form-control w-1/2   ">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <label className="input-group">
    <span>Image</span>
    <input type="text"  name="image"  defaultValue={image} className="input input-bordered  w-full" />
  </label>
</div>

   
                {/* Add Products  */}
            <div className="form-control w-full   mt-10  ">

  <label className="input-group">

    <input type="submit"  value='UPDATE PRODUCT'  className="btn bg-black text-white hover:bg-red-600  w-full" />
  </label>
</div>


            </div>
         </form>


        </div>
    );
};

export default Update;