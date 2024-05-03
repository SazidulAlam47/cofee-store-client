import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { RiCupLine } from "react-icons/ri";
import PropTypes from "prop-types";

import SingleProductSkeleton from "./SingleProductSkeleton";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AllProducts = () => {
    const {
        data: showingCoffees,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["coffees"],
        queryFn: async () => {
            const res = await axios.get(
                "https://cofee-store-server.onrender.com/coffees"
            );
            return res.data;
        },
    });

    const staticPart = (
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
    );

    if (isPending) {
        return (
            <div className="container mx-auto px-3 md:px-6 py-28">
                {staticPart}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
                    {Array(4)
                        .fill(null)
                        .map((_, index) => (
                            <SingleProductSkeleton key={index} />
                        ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-3 md:px-6 py-28">
            {staticPart}
            {showingCoffees.length ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
                    {showingCoffees?.map((coffee) => (
                        <SingleProduct
                            key={coffee._id}
                            coffee={coffee}
                            refetch={refetch}
                        />
                    ))}
                </div>
            ) : (
                <div className="min-h-40 flex justify-center items-center">
                    <h4 className="font-medium text-center text-4xl">
                        there is no product at this moment
                    </h4>
                </div>
            )}
        </div>
    );
};

AllProducts.propTypes = {
    allCoffees: PropTypes.array.isRequired,
};

export default AllProducts;
