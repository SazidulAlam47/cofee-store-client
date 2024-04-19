import Hero from "./Hero";
import FeatureSection from "./Features/FeatureSection";
import InstagramSection from "./InstagramSection";
import AllProducts from "./Products/AllProducts";

const Home = () => {
    return (
        <div>
            <Hero />
            <FeatureSection />
            <AllProducts />
            <InstagramSection />
        </div>
    );
};

export default Home;
