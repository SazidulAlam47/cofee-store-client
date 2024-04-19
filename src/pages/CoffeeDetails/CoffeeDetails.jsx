import { IoMdArrowBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    return (
        <div
            style={{
                backgroundImage: "url(/more/11.png)",
            }}
        >
            <div className="container mx-auto px-3 lg:px-6 py-16 space-y-10">
                <Link to="/" className="flex items-center gap-3">
                    <IoMdArrowBack className="text-2xl" />
                    <span className="text-4xl font-normal text-[#374151]">
                        Back to home
                    </span>
                </Link>
                <div className="bg-[#F4F3F0] py-16 px-3 text-center lg:text-left lg:px-28 rounded grid grid-cols-1 lg:grid-cols-2 gap-5 mx-2 lg:mx-16">
                    <div className="flex items-center">
                        <img
                            src={coffee.photoUrl}
                            alt="coffee"
                            className="mx-auto"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h3 className="text-5xl font-normal text-chocolate">
                            {coffee.name}
                        </h3>
                        <div className="font-raleway space-y-2 text-[#5C5B5B] text-xl">
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Chef:
                                </span>{" "}
                                {coffee.chef}
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Supplier:
                                </span>{" "}
                                {coffee.supplier}
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Taste:
                                </span>{" "}
                                {coffee.taste}
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Category:
                                </span>{" "}
                                {coffee.category}
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Details:
                                </span>{" "}
                                {coffee.details}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
