import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaPhoneAlt,
    FaTwitter,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const Footer = () => {
    const handleSend = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500,
        });
        e.target.reset();
    };

    return (
        <footer>
            <div
                className="py-16 text-chocolate"
                style={{
                    backgroundImage: "url(/more/13.jpg)",
                }}
            >
                <div className="container mx-auto px-3 md:px-6">
                    <img
                        src="/more/logo1.png"
                        alt="logo"
                        className="w-14 h-16 mx-auto md:mx-0"
                    />
                </div>
                <div className="container mx-auto px-3 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-normal">
                            Wanderlust Coffee
                        </h2>
                        <p className="font-raleway font-normal text-base text-chocolate-black md:pr-6">
                            Always ready to be your friend. Come & Contact with
                            us to share your memorable moments, to share with
                            your best companion.
                        </p>
                        <div className="flex gap-2 justify-center md:justify-start">
                            <FaFacebook size={25} />
                            <FaTwitter size={25} />
                            <FaInstagram size={25} />
                            <FaLinkedin size={25} />
                        </div>
                        <h2 className="text-4xl font-normal">Get in Touch</h2>
                        <div className="flex gap-3 items-center justify-center md:justify-start">
                            <FaPhoneAlt size={20} />
                            <span className="font-raleway font-normal text-lg text-chocolate-black">
                                +88 01555 021 112
                            </span>
                        </div>
                        <div className="flex gap-3 items-center justify-center md:justify-start">
                            <FaEnvelope size={20} />
                            <span className="font-raleway font-normal text-lg text-chocolate-black">
                                sazidulalam20@gmail.com
                            </span>
                        </div>
                        <div className="flex gap-3 items-center justify-center md:justify-start">
                            <IoLocationSharp size={20} />
                            <span className="font-raleway font-normal text-lg text-chocolate-black">
                                220, Dilkhola Road, Khulna
                            </span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl font-normal">
                            Connect with Us
                        </h2>
                        <form
                            onSubmit={handleSend}
                            className="flex flex-col gap-4 items-center lg:items-start w-full"
                        >
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                style={{ outline: "none" }}
                                className="input w-full max-w-md placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                style={{ outline: "none" }}
                                className="input w-full max-w-md placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all"
                                required
                            />
                            <textarea
                                type="text"
                                placeholder="Message"
                                name="message"
                                style={{ outline: "none" }}
                                className="input w-full max-w-md placeholder:font-raleway border-2 border-transparent focus:border-chocolate-light focus:shadow-lg transition-all h-28 py-2"
                            ></textarea>
                            <button
                                type="submit"
                                className="btn border-2 border-chocolate text-xl font-normal bg-transparent rounded-full hover:bg-chocolate hover:text-white hover:border-chocolate"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div
                className="py-2"
                style={{
                    backgroundImage: "url(/more/24.jpg)",
                }}
            >
                <h1 className="text-white font-normal text-lg text-center">
                    Copyright Wanderlust Coffee ! All Rights Reserved
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
