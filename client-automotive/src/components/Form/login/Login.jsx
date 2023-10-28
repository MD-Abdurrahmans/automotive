import Swal from 'sweetalert2'
import UseContext from '../../useContext/UseContext';
import { Link, Navigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";


const Login = () => {
const {login,user,googleLogin} = UseContext()


// console.log('auth',data)
    const handleLogin =(e)=>{
        e.preventDefault();

         const form = e.target;
         const  email = form.email.value;
         const  password = form.password.value;
          const users = {email,password}
        

         login(email,password)
         .then((result)=>{
            Swal.fire(
                'Good job!',
                'LogIn Successfully',
                'success'
              )
            console.log(result.user)
            console.log(users)
              
        })
         .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password don"t  match password  !',
                footer: 'please Try again'
              })
            console.log(error)})

         
    }


 

    // google login function


    const  handleGoogleLogin =()=>{

        googleLogin()
        .then(()=>{
            Swal.fire(
                'Good job!',
                'LogIn Successfully',
                'success'
              )
        })
        .catch(()=>{

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'something is wrong  !',
                footer: '<a href="">please Try again</a>'
              })
        })

        if(user){
          return <Navigate to='/'></Navigate>
      }
    }



    return (
        <div>
                        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">

   <img src="https://i.ibb.co/4JMvrm3/Pngtree-login-protection-3d-illustration-13006939-1.png" alt="" />


    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}  className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
 

         <div>
         <span>Continue with:</span> <button onClick={handleGoogleLogin}  className='btn flex items-center space-x-2 '> <FaGoogle className='text-red-500 '></FaGoogle>  Google</button>
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
            <p href="#" className="label-text-alt link link-hover">
                New here?please <Link className='text-blue-700 font-bold' to='/register'>Register</Link> </p>
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

export default Login;