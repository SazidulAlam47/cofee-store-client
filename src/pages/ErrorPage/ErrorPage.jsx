import { Link } from "react-router-dom";
import Footer from "../../components/HeaderFooter/Footer";
import Header from "../../components/HeaderFooter/Header";
import { IoMdArrowBack } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <>
            <Header />
            <Helmet>
                <title>Wanderlust Coffee | 404</title>
            </Helmet>
            <div>
                <Link
                    to="/"
                    className="flex items-center justify-center gap-3 mt-16"
                >
                    <IoMdArrowBack className="text-2xl" />
                    <span className="text-4xl font-normal font-rancho text-[#374151]">
                        Back to home
                    </span>
                </Link>
                <div>
                    <img src="/404/404.gif" alt="404" className="mx-auto" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ErrorPage;
