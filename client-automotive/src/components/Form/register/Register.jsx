// import { useContext } from "react";
// import { authContext } from "../../../authProvider/AuthProvider";
import { useState } from "react";
import UseContext from "../../useContext/UseContext";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import Swal from 'sweetalert2'
import { Link, Navigate } from "react-router-dom";
const Register = () => {

const {signUp,user,profieUpdate} = UseContext();
const [userUid,setUserUid] = useState();
    const handleRegister =(e)=>{
        e.preventDefault();

         const form = e.target;

         const  name = form.name.value;
         const  image = form.image.value;
         const  email = form.email.value;
         const  password = form.password.value;
  
          const users = {name,image,email,password}
      


          if(! /.*[A-Z].*/.test(password)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password  must be one Capital  latter!',
                footer: '<a href="">please Try again</a>'
              })
          }else if(/^.{1,5}$/.test(password)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password  must be 6 characters!',
                footer: '<a href="">please Try again</a>'
              })
          }else if(!/.*[@#$%^&+=!]/.test(password)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password  must be one special  characters!',
                footer: '<a href="">please Try again</a>'
              })
          }else{

             console.log(users)
             signUp(email,password)
         .then((result)=>{

            profieUpdate(name,image)
            .then(()=>{
                Swal.fire(
                    'Good job!',
                    'Your Account created Successfully',
                    'success'
                  )
            })
            .catch((error)=>{  console.log(error)})

            console.log(result.user)
            setUserUid(result.user.uid)

          })
         .catch((error)=>{  Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'something wrong !',
            footer: '<a href="">please Try again</a>'
          })
            console.log(error)})
          }
 
      
         
    }
    if(user){
      return <Navigate to='/'></Navigate>
  }

    console.log('uid',userUid)
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">

   <img src="https://i.ibb.co/PmBR34s/Pngtree-purple-office-ui-registration-illustration-4978562.png" alt="" />


    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}  className="card-body">
      <h1 className="text-5xl font-bold">Register now!</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name="image" placeholder="image" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p href="#" className="label-text-alt link link-hover">already have an account?please <Link  className="text-blue-700 font-bold"  to='/login' >Login</Link> </p>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;