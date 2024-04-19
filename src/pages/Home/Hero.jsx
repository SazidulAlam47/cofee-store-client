const Hero = () => {
    return (
        <div
            className="hero min-h-screen text-center sm:text-left"
            style={{
                backgroundImage: "url(/more/3.png)",
            }}
        >
            <div className="container mx-auto px-3 md:px-6 grid grid-cols-1 md:grid-cols-2 text-white">
                <div className="hidden md:block"></div>
                <div className="px-4 md:px-0">
                    <h1 className="mb-5 text-4xl md:text-5xl font-bold">
                        Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className="mb-5 font-raleway font-normal text-sm md:text-base">
                        It&apos;s coffee time - Sip & Savor - Relaxation in
                        every sip! Get the nostalgia back!! Your companion of
                        every moment!!! Enjoy the beautiful moments and make
                        them memorable.
                    </p>
                    <button className="btn bg-chocolate-light px-6 py-2 font-normal text-2xl rounded-none border-2 border-chocolate-light hover:bg-transparent hover:border-white hover:text-white">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
