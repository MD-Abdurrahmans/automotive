// old server https://server-automotive-1rh7eh8s8-rajs-projects-d77d3858.vercel.app

import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/root/Root";
import Error from "../layouts/error/Error";
import Home from "../pages/home/Home";
import Products from "../pages/addProducts/Products";
import Register from "../components/Form/register/Register";
import Login from "../components/Form/login/Login";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../components/brandProducts/BrandProducts";
import ProductDetails from "../components/productDetails/ProductDetails";
import Update from "../components/updateForm/Update";
import MyCart from "../pages/myCarts/MyCart";
  


const router = createBrowserRouter([


     {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('brand.json')
            },
            {
                path:'/products',
                element:<PrivateRoute><Products></Products></PrivateRoute>
            },
            
            {
                path:'/brandProducts/:id',
                element:<PrivateRoute><BrandProducts></BrandProducts></PrivateRoute>,
                loader:()=>fetch('https://server-automotive-6lj38stzh-rajs-projects-d77d3858.vercel.app/products')
                 
            },
            {
                path:'/productDetails/:id',
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://server-automotive-6lj38stzh-rajs-projects-d77d3858.vercel.app/products/${params.id}`)
                 
            },
            {
                path:'/update/:id',
                element:<PrivateRoute> <Update></Update> </PrivateRoute>,
                loader:({params})=>fetch(`https://server-automotive-6lj38stzh-rajs-projects-d77d3858.vercel.app/cart/${params.id}`)
                 
            },
            {
                path:'/myCarts',
                element:<PrivateRoute> <MyCart></MyCart> </PrivateRoute>,
                loader:()=>fetch(`https://server-automotive-6lj38stzh-rajs-projects-d77d3858.vercel.app/cart`)
                 
            },

            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },


        ]
     }

])


export default router

