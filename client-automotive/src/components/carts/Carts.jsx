
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types'
import { FaPenFancy } from "react-icons/fa";


const Carts = ({cart,carts,setCarts}) => {

    // console.log(carts)
    const {brand,image,name,price,_id} = cart || {};


    // funciton cart remove 

    const  handleCartRemove =(_id)=>{


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {



             
                // console.log(_id);
       
                fetch(`http://localhost:5000/cart/${_id}`,{
                    
                method: "DELETE",
       
                })
                .then((res)=>res.json())
                .then(()=>{
                    Swal.fire(
                        'Deleted!',
                        'Your cart has been deleted.',
                        'success'
                      )
                          
                      const  remaining = carts?.filter(cart =>cart?._id  !== _id)

                        setCarts(remaining)
                       


                //    console.log(data)
               })
               .catch(()=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">please try again</a>'
                  })
            
            })


              }
          

             
          })


    }


    return (
        <div className=" ">

   <div className="flex       border-x-2 border-t-2  flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">


	<ul className="flex flex-col divide-y divide-gray-700">
		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={image} />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leadi sm:pr-8">{name}</h3>
							<p className="text-sm dark:text-gray-400">{brand}</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">{price}€</p>
							{/* <p className="text-sm line-through dark:text-gray-600">75.50€</p> */}
						</div>
					</div>

					<div className="flex text-sm divide-x">
						<button onClick={()=>handleCartRemove(_id)}  type="button" className="flex hover:text-red-600 items-center px-2 py-1 pl-0 space-x-1">
               <FaTrashAlt></FaTrashAlt>
							<span>Remove</span>
						</button>
            <Link to ={`/update/${_id}`}  >
            <button className="flex hover:text-red-600 items-center px-2 py-1 pl-0 space-x-1">
             
                <FaPenFancy></FaPenFancy>
              <span>Update</span>
      
            </button>
            </Link>
					</div>

				</div>
			</div>
		</li>



	</ul>



	<div className="flex justify-end space-x-4 ">
          <Link  to='/' >
     <button type="button" className="px-6 py-2 hover:bg-red-600  hover:text-white border rounded-md dark:border-violet-400">Back
			<span className="sr-only sm:not-sr-only">to shop</span>
		</button>
     </Link>
		<button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
			<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
		</button>
	</div>
</div>
        </div>
    );
};

export default Carts;





Carts.propTypes = {

  cart:PropTypes.object,
  carts:PropTypes.array,
  setCarts:PropTypes.func

}

