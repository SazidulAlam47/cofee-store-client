import PropTypes from "prop-types";

const SingleFeature = ({ feature }) => {
    return (
        <div className="text-center sm:text-left px-8 sm:px-0">
            <div className="mb-4">
                <img
                    src={feature.icon}
                    alt="icon"
                    className="mx-auto sm:mx-0"
                />
            </div>
            <h3 className="font-normal text-3xl mb-2 text-chocolate">
                {feature.title}
            </h3>
            <p className="font-raleway font-normal text-chocolate-black">
                {feature.description}
            </p>
        </div>
    );
};

SingleFeature.propTypes = {
    feature: PropTypes.object.isRequired,
};

export default SingleFeature;
