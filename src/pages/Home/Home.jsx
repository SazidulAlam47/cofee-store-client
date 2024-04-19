import Hero from "./Hero";
import FeatureSection from "./Features/FeatureSection";
import InstagramSection from "./InstagramSection";
import AllProducts from "./Products/AllProducts";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const allCoffees = useLoaderData();
    return (
        <div>
            <Hero />
            <FeatureSection />
            <AllProducts allCoffees={allCoffees} />
            <InstagramSection />
        </div>
    );
};

export default Home;
