import { Outlet } from "react-router-dom";
import Nav from "../../components/header/Nav";
import Footer from "../../components/footer/Footer";


const Root = () => {
    return (
        <div>
             
              <Nav></Nav>
              <div className="min-h-screen    ">
                <Outlet></Outlet>

              </div>

              <Footer></Footer>
        </div>
    );
};

export default Root;