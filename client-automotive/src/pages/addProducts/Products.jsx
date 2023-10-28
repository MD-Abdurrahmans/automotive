import Swal from 'sweetalert2'


const Products = () => {
    
    const handleAddProduct =(e)=>{
 e.preventDefault();
        const form =  e.target;


        const name = form.name.value;
        const fuel_Type = form.fuel_Type.value;
        const brand = form.brand.value;
        const color  = form.color.value;
        const doors = form.doors.value;
        const cylinders = form.cylinders.value;
        const engine = form.engine.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const image = form.image.value;
        const description = form.description.value;
        // const Ratings = form.Ratings.value;
         const products =  {name,fuel_Type,brand,color,doors,cylinders,engine,price,ratings,image,description} 
      
        console.log(products)

        // api end point

      
        fetch('http://localhost:5000/products',{

         method:'POST',
         headers:{
           'content-type':'application/json',
         },
          body:JSON.stringify(products)
        
          

        })
        .then((res)=>res.json())
        .then((data)=>{
          // console.log(data)
         if(data.insertedId){
          form.reset();
        
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Products added successfully!',
            showConfirmButton: false,
            timer: 1500
          })

       
         }
       
       
        
        })
       
        .catch((error)=>{
          Swal.fire('somethng is wrong')
          console.log(error)})


        




    }


    return (
        <div className="container mx-auto   mt-14 ">


        <h1 className="text-3xl md:text-6xl  text-red-600 text-center p-11" >ADD CAR</h1>

         <form  onSubmit={handleAddProduct} >

         <div className="w-full flex flex-wrap justify-between     ">
                
                {/* name field */}
            <div className="form-control w-1/2  ">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">
    <span>Name</span>
    <input type="text"  name="name"  placeholder="Name" className="input input-bordered w-full mr-2" />
  </label>
</div>
                {/* fuel_Type field */}
            <div className="form-control w-1/2  ">
  <label className="label">
    <span className="label-text">fuel_Type</span>
  </label>
  <label className="input-group">
    <span>fuel_Type</span>
    <input type="text"  name="fuel_Type"  placeholder="fuel_Type" className="input input-bordered  w-full" />
  </label>
</div>
                {/* Type field */}
            <div className="form-control w-1/2  ">
  <label className="label">
    <span className="label-text">Brand/Type</span>
  </label>
  <label className="input-group">
    <span>Brand</span>
    <input type="text"  name="brand"  placeholder="BRAND  MUST  CAPITAL LATTER " className="input input-bordered w-full mr-2" />
  </label>
</div>

                {/* Color field */}
            <div className="form-control w-1/2   ">
  <label className="label">
    <span className="label-text">Color</span>
  </label>
  <label className="input-group">
    <span>Color</span>
    <input type="text"  name="color"  placeholder="Color" className="input input-bordered  w-full" />
  </label>
</div>
                {/* Doors field */}
            <div className="form-control w-1/2   ">
  <label className="label">
    <span className="label-text">Doors</span>
  </label>
  <label className="input-group">
    <span>Doors</span>
    <input type="text"  name="doors"  placeholder="Doors" className="input input-bordered  mr-2 w-full" />
  </label>
</div>
                {/* Cylinders field */}
            <div className="form-control w-1/2   ">
  <label className="label">
    <span className="label-text">Cylinders</span>
  </label>
  <label className="input-group">
    <span>Cylinders</span>
    <input type="text"  name="cylinders"  placeholder="Cylinders" className="input input-bordered  w-full" />
  </label>
</div>
                {/* engine field */}
            <div className="form-control w-1/2   ">
  <label className="label">
    <span className="label-text">engine</span>
  </label>
  <label className="input-group">
    <span>engine</span>
    <input type="text"  name="engine"  placeholder="engine" className="input input-bordered mr-2  w-full" />
  </label>
</div>

                {/* Price field */}
            <div className="form-control w-1/2   ">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
    <span>Price</span>
    <input type="text"  name="price"  placeholder="Price" className="input input-bordered   w-full" />
  </label>
</div>
                {/* Ratings field */}
            <div className="form-control w-1/2   ">
  <label className="label">
    <span className="label-text">Ratings</span>
  </label>
  <label className="input-group">
    <span>Ratings</span>
    <input type="text"  name="ratings"  placeholder="Ratings" className="input input-bordered  mr-2 w-full" />
  </label>
</div>

                {/* Image 1 field */}
            <div className="form-control w-1/2   ">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <label className="input-group">
    <span>Image</span>
    <input type="text"  name="image"  placeholder="Image" className="input input-bordered  w-full" />
  </label>
</div>

                {/* Description 1 field */}
            <div className="form-control w-full    ">
  <label className="label">
    <span className="label-text">Description</span>
  </label>
  <label className="input-group w-full ">
    <span>Description</span>
   <textarea name="description" id="" cols="400"  className="border" rows="10"></textarea>
  </label>
</div>


                {/* Add Products  */}
            <div className="form-control w-full   mt-10  ">

  <label className="input-group">

    <input type="submit"  value='ADD PRODUCT'  className="btn bg-black text-white hover:bg-red-600  w-full" />
  </label>
</div>


            </div>
         </form>


        </div>
    );
};

export default Products;