import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="container mx-auto min-h-screen  flex justify-center items-center">
          <div className="flex items-center">
        
               <img src="https://i.ibb.co/KsRh2QH/Pngtree-error-404-page-not-found-6681621.png" className="w-1/2" alt="" />
            <div>
            <h1 className=" text-6xl font-extrabold text-red-600">PAGE NOT FOUND</h1>
                <Link to='/' >
                <button className="btn mt-2 bg-red-600 text-white">Go Home</button>
                </Link>
            </div>
          </div>
        </div>
    );
};

export default Error;