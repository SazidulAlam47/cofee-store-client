import { useEffect, useState } from "react";
import SingleFeature from "./SingleFeature";

const FeatureSection = () => {
    const [features, setFeatures] = useState();

    useEffect(() => {
        fetch("/data/features.json")
            .then((res) => res.json())
            .then((data) => setFeatures(data));
    }, []);

    return (
        <div className="bg-[#ECEAE3] py-14">
            <div className="container mx-auto px-3 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features?.map((feature) => (
                        <SingleFeature key={feature._id} feature={feature} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
