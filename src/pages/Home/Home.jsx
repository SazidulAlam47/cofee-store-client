import Hero from "./Hero";
import FeatureSection from "./Features/FeatureSection";
import InstagramSection from "./InstagramSection";
import AllProducts from "./Products/AllProducts";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Wanderlust Coffee</title>
            </Helmet>
            <Hero />
            <FeatureSection />
            <AllProducts />
            <InstagramSection />
        </div>
    );
};

export default Home;
