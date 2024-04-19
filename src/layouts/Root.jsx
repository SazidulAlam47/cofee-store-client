import { Outlet } from "react-router-dom";
import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";

const Root = () => {
    return (
        <div className="font-rancho">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
