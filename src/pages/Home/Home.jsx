import Hero from "./Hero";
import FeatureSection from "./Features/FeatureSection";
import InstagramSection from "./InstagramSection";
import AllProducts from "./Products/AllProducts";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const allCoffees = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Wanderlust Coffee</title>
            </Helmet>
            <Hero />
            <FeatureSection />
            <AllProducts allCoffees={allCoffees} />
            <InstagramSection />
        </div>
    );
};

export default Home;
