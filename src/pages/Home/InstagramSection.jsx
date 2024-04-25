import axios from "axios";
import { useEffect, useState } from "react";

const InstagramSection = () => {
    const [instagramPics, setInstagramPics] = useState();

    useEffect(() => {
        axios
            .get("/data/instagram.json")
            .then((res) => setInstagramPics(res.data));
    }, []);

    return (
        <div className="container mx-auto px-3 md:px-6 py-28">
            <div className="text-center pb-10">
                <p className="font-raleway font-normal text-xl text-chocolate-black">
                    Follow Us Now
                </p>
                <h3 className="text-5xl font-normal text-chocolate">
                    Follow on Instagram
                </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 justify-items-center">
                {instagramPics?.map((instagramPic) => (
                    <div key={instagramPic._id}>
                        <img src={instagramPic.picture} alt="coffee" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramSection;
