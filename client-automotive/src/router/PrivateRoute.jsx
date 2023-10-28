import { Navigate } from "react-router-dom";
import UseContext from "../components/useContext/UseContext";
import PropTypes from 'prop-types'
const PrivateRoute = ({children}) => {

    const {user,loading} = UseContext();

    if(loading){
        return <div className="text-red-500 text-5xl text-center z-40 bg-black">
            <span className="loading loading-bars  w-[140px] h-[140px] "></span>
        </div>
    }


    if(user){
        return children

    }

     return <Navigate to='/login'></Navigate>


}


export default PrivateRoute;



PrivateRoute.propTypes = {
    children:PropTypes.object
   }
