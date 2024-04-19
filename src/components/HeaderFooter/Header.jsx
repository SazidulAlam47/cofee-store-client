import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div
            style={{
                backgroundImage: "url(/more/15.jpg)",
            }}
        >
            <Link
                to="/"
                className="flex items-center gap-3 justify-center py-4"
            >
                <div>
                    <img
                        src="/more/logo1.png"
                        alt="logo"
                        className="w-11 h-23"
                    />
                </div>
                <h1 className="text-3xl md:text-4xl font-normal text-white">
                    Wanderlust Coffee
                </h1>
            </Link>
        </div>
    );
};

export default Header;
