import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CoffeeDetails = () => {
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
                            src="https://trickbd.com/wp-content/uploads/2024/04/17/5.png"
                            alt="coffee"
                            className="mx-auto"
                        />
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-5xl font-normal text-chocolate">
                            Niceties
                        </h3>
                        <div className="font-raleway space-y-2 text-[#5C5B5B] text-xl">
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Name:
                                </span>{" "}
                                Americano Coffee
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Chef:
                                </span>{" "}
                                Mr. Matin Paul
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Supplier:
                                </span>{" "}
                                Cappu Authorizer
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Taste:
                                </span>{" "}
                                Sweet and hot
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Category:
                                </span>{" "}
                                Americano
                            </p>
                            <p>
                                <span className="font-semibold text-[#1B1A1A]">
                                    Details:
                                </span>{" "}
                                Espresso with hot water
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
