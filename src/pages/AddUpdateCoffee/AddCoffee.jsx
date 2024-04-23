import { Helmet } from "react-helmet-async";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const chef = form.get("chef");
        const supplier = form.get("supplier");
        const taste = form.get("taste");
        const category = form.get("category");
        const price = form.get("price");
        const details = form.get("details");
        const photoUrl = form.get("photoUrl");
        const data = {
            name,
            chef,
            supplier,
            taste,
            category,
            price,
            details,
            photoUrl,
        };

        fetch("https://cofee-store-server.onrender.com/coffees", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Coffee Added!",
                        text: "The coffee has been added successfully.",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    e.target.reset();
                }
            });
    };

    return (
        <div
            style={{
                backgroundImage: "url(/more/11.png)",
            }}
        >
            <Helmet>
                <title>Wanderlust Coffee | Add Coffee</title>
            </Helmet>
            <div className="container mx-auto px-3 md:px-6 py-16 space-y-10">
                <Link to="/" className="flex items-center gap-3">
                    <IoMdArrowBack className="text-2xl" />
                    <span className="text-4xl font-normal text-[#374151]">
                        Back to home
                    </span>
                </Link>
                <div className="bg-[#F4F3F0] py-16 px-5 sm:px-10 lg:px-28 rounded space-y-5">
                    <h3 className="text-5xl font-normal text-chocolate text-center">
                        Add New Coffee
                    </h3>
                    <p className="font-raleway font-normal text-lg md:text-xl text-chocolate-black px-1 sm:px-4 lg:px-12 text-center">
                        It is a long established fact that a reader will be
                        distraceted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>
                    <form onSubmit={handleAddCoffee}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text font-raleway font-semibold">
                                        Name
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter coffee name"
                                    style={{ outline: "none" }}
                                    className="input placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all"
                                    required
                                />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text font-raleway font-semibold">
                                        Chef
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    name="chef"
                                    placeholder="Enter coffee chef"
                                    style={{ outline: "none" }}
                                    className="input placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all"
                                    required
                                />
                            </label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text font-raleway font-semibold">
                                        Supplier
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    name="supplier"
                                    placeholder="Enter coffee supplier"
                                    style={{ outline: "none" }}
                                    className="input placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all"
                                    required
                                />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text font-raleway font-semibold">
                                        Taste
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    name="taste"
                                    placeholder="Enter coffee taste"
                                    style={{ outline: "none" }}
                                    className="input placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all"
                                    required
                                />
                            </label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text font-raleway font-semibold">
                                        Category
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Enter coffee category"
                                    style={{ outline: "none" }}
                                    className="input placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all"
                                    required
                                />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text font-raleway font-semibold">
                                        Price
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    name="price"
                                    placeholder="Enter coffee price"
                                    style={{ outline: "none" }}
                                    className="input placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all"
                                    required
                                />
                            </label>
                        </div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-raleway font-semibold">
                                    Details
                                </span>
                            </div>
                            <input
                                type="text"
                                name="details"
                                placeholder="Enter coffee details"
                                style={{ outline: "none" }}
                                className="input placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all"
                                required
                            />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-raleway font-semibold">
                                    Photo
                                </span>
                            </div>
                            <input
                                type="text"
                                name="photoUrl"
                                placeholder="Enter photo URL"
                                style={{ outline: "none" }}
                                className="input placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all"
                                required
                            />
                        </label>
                        <button className="btn btn-block mt-6 border-2 border-chocolate hover:border-chocolate bg-chocolate-light hover:bg-transparent text-2xl font-normal">
                            Add Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;
