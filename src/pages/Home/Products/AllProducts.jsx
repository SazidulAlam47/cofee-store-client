import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { RiCupLine } from "react-icons/ri";

const AllProducts = () => {
    return (
        <div className="container mx-auto px-3 md:px-6 py-28">
            <div className="text-center pb-10">
                <p className="font-raleway font-normal text-xl text-chocolate-black">
                    --- Sip & Savor ---
                </p>
                <h3 className="text-5xl font-normal text-chocolate">
                    Our Popular Products
                </h3>
                <Link
                    to="/add-coffee"
                    className="btn mt-4 border-2 border-chocolate hover:border-chocolate bg-chocolate-light hover:bg-transparent text-2xl font-normal"
                >
                    <span className="text-white text-shadow">Add Coffee</span>
                    <RiCupLine className="text-chocolate" />
                </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </div>
        </div>
    );
};

export default AllProducts;
