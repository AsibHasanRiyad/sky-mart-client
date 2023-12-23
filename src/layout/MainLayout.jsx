import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Footer from "../components/Footer";


const MainLayout = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <div >
            <Navbar />
           <div>
           <Outlet />
           </div>
           <Footer />
        </div>
    );
};

export default MainLayout;