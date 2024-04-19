import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleProduct = () => {
    const id = 1;
    return (
        <div className="bg-[#F5F4F1] w-full p-7 flex gap-3 flex-col sm:flex-row items-center rounded-md">
            <div>
                <img
                    src="https://trickbd.com/wp-content/uploads/2024/04/17/1.png"
                    alt="coffee"
                />
            </div>
            <div className="flex-grow text-xl font-raleway text-[#5C5B5B] space-y-2">
                <p>
                    <span className="font-semibold text-[#1B1A1A]">Name:</span>{" "}
                    Americano Coffee
                </p>
                <p>
                    <span className="font-semibold text-[#1B1A1A]">Chef:</span>{" "}
                    Mr. Matin Paul
                </p>
                <p>
                    <span className="font-semibold text-[#1B1A1A]">Price:</span>{" "}
                    890 Taka
                </p>
            </div>
            <div className="flex gap-4 sm:flex-col">
                <Link
                    to={`/coffee-details/${id}`}
                    className="bg-[#D2B48C] w-10 h-10 flex justify-center items-center text-white rounded"
                >
                    <MdRemoveRedEye size={25} />
                </Link>
                <Link
                    to={`/update-coffee/${id}`}
                    className="bg-[#3C393B] w-10 h-10 flex justify-center items-center text-white rounded"
                >
                    <MdEdit size={25} />
                </Link>
                <button className="bg-[#EA4744] w-10 h-10 flex justify-center items-center text-white rounded active:scale-95 transition-all">
                    <MdDelete size={25} />
                </button>
            </div>
        </div>
    );
};

export default SingleProduct;
