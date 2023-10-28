import { Link, NavLink } from "react-router-dom";
import UseContext from "../useContext/UseContext";
import Swal from "sweetalert2";

const Nav = () => {

  const {user,logOut} = UseContext();

    const links =<>
    
    <li>
         <NavLink to='/' >Home</NavLink>
    </li>
    <li>
         <NavLink to='/products' >
      

        Add Product
      

         </NavLink>
    </li>


    <li>
         <NavLink to='/myCarts' >My Cart</NavLink>
    </li>

 
    </>

// logout function

const  handleLogout = ()=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You want to logout!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Logout it!'
  }).then((result) => {
    if (result.isConfirmed) {
      logOut()
      .then(()=>{
      
        Swal.fire(
          'Deleted!',
          'LogOUT.',
          'success'
        )
    
      })
      .catch((error)=>{console.log(error)})
   
    }
  })
  

}


// function bg dark and light them


const  setDarkMode = ()=>{

     
     document.querySelector("body").setAttribute('data-theme','dark');
   
}
const  setLightMode = ()=>{

     
     document.querySelector("body").setAttribute('data-theme','light');
   
}


const toggle = (e)=>{

    if(e.target.checked){

       setDarkMode()
    }else setLightMode();
}


//  max-w-screen-xl px-8 md:px-16 lg:px-24 py-5 my-10



    return (
        <div className="bg-red-600 text-white  ">
            <div className=" navbar  container  mx-auto   z-40">
  <div className="navbar-start z-40   ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-600  rounded-box w-52">
         
         {links}
  
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-[18px] md:text-xl ">
         <img src="https://i.ibb.co/G98sqjc/Pngtree-hot-wheels-car-vector-12158979-1.png" className="w-20 h-20 hidden md:block " alt="" />
         <span className="  md:pb-10 logos ">Auto_Royal</span>
       {/* dark and light theme */}
         <div  title="click me">

<label htmlFor="Toggle1" className="inline-flex md:mb-10 items-center space-x-4 cursor-pointer  dark:text-gray-100">
	{/* <span>Left</span> */}
	<span className="relative ">
		<input id="Toggle1" type="checkbox" onChange={toggle}  className="hidden peer " />
		<div className="w-10 h-6 rounded-full shadow-inner     bg-gray-400 peer-checked:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1    rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800 "></div>
	</span>
	{/* <span>Right</span> */}
</label>
</div>

    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
   {links}

    </ul>
  </div>
  <div className="navbar-end space-x-1 md:space-x-7">
  
<div className={`flex  md:space-x-7 ${user? 'hidden' :'' } `}>
{
    user? 
  
    <p onClick={handleLogout}   className="hover:text-red-600 font-bold cursor-pointer text-white hover:border-red-600  border-r-2 border-gray-700 pr-2  ">
          LogOut </p>
      :

    <Link to='/login'>
  
    <p className="hover:text-red-600 font-bold cursor-pointer   text-red-700 hover:border-red-600  border-r-2 border-gray-700 pr-2  ">
          Login </p>
    </Link>
  }




</div>





 {
   user ? 

  <div className="dropdown dropdown-end flex items-center z-40">
      <span className="hidden md:block" >{user.displayName}</span>
      <label tabIndex={0} className="btn  btn-ghost btn-circle avatar">
    
        <div className="w-10 rounded-full ">
       
        <img src={user?.photoURL}/>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-red-600   text-white rounded-box w-52">
        <li>
      <span className=" md:hidden" >{user.displayName}</span>

        </li>
        <li>
        <Link to='/register' >
 
 <p className="font-bold cursor-pointer text-white  ">
        Register </p>
 </Link>  
        </li>

        <li>

        <div className={`flex   md:space-x-7 ${user? 'block' :'' } `}>
{
    user? 
  
    <p onClick={handleLogout}   className="hover:text-red-600 font-bold cursor-pointer text-white hover:border-red-600  border-r-2 border-gray-700 pr-2  ">
          LogOut </p>
      :
    <Link to='/login'>
  
    <p className="hover:text-red-600 font-bold cursor-pointer  text-red-700  hover:border-red-600  border-r-2 border-gray-700 pr-2  ">
          Login </p>
    </Link>
  }




</div>
        </li>
      
      </ul>
    </div> 
   
   : ''
 }




  </div>
</div>
        </div>

        
    );
};

export default Nav;

