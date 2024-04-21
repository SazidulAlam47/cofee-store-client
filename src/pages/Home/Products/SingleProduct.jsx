import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const SingleProduct = ({ coffee, showingCoffees, setShowingCoffees }) => {
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://cofee-store-server.onrender.com/coffees/${coffee._id}`,
                    {
                        method: "DELETE",
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            //remove from UI
                            setShowingCoffees(
                                showingCoffees.filter(
                                    (item) => item._id !== coffee._id
                                )
                            );

                            Swal.fire({
                                title: "Deleted!",
                                text: "The Coffee has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000,
                            });
                        }
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Cancelled",
                    text: "The Coffee remains safe",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        });
    };
    return (
        <div className="bg-[#F5F4F1] w-full p-7 flex gap-3 flex-col sm:flex-row items-center rounded-md">
            <div>
                <img src={coffee.photoUrl} alt="coffee" className="max-w-44" />
            </div>
            <div className="flex-grow text-xl font-raleway text-[#5C5B5B] space-y-2">
                <p>
                    <span className="font-semibold text-[#1B1A1A]">Name:</span>{" "}
                    {coffee.name}
                </p>
                <p>
                    <span className="font-semibold text-[#1B1A1A]">Chef:</span>{" "}
                    {coffee.chef}
                </p>
                <p>
                    <span className="font-semibold text-[#1B1A1A]">Price:</span>{" "}
                    {coffee.price} Taka
                </p>
            </div>
            <div className="flex gap-4 sm:flex-col">
                <Link
                    to={`/coffee-details/${coffee._id}`}
                    className="bg-[#D2B48C] w-10 h-10 flex justify-center items-center text-white rounded"
                >
                    <MdRemoveRedEye size={25} />
                </Link>
                <Link
                    to={`/update-coffee/${coffee._id}`}
                    className="bg-[#3C393B] w-10 h-10 flex justify-center items-center text-white rounded"
                >
                    <MdEdit size={25} />
                </Link>
                <button
                    onClick={handleDelete}
                    className="bg-[#EA4744] w-10 h-10 flex justify-center items-center text-white rounded active:scale-95 transition-all"
                >
                    <MdDelete size={25} />
                </button>
            </div>
        </div>
    );
};

SingleProduct.propTypes = {
    coffee: PropTypes.object.isRequired,
    showingCoffees: PropTypes.array.isRequired,
    setShowingCoffees: PropTypes.func.isRequired,
};

export default SingleProduct;
