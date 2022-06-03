import React from "react";
import PropTypes from "prop-types";

const Greeting = (props) => {
    return (
        <div>
            <h1>{`Hello ${props.ahmed} how are you ? 
                I'am ${props.age} years old  

                ${props.day}

            `}</h1>
        </div>
    );
};

Greeting.defaultProps = {
    day: "Monday",
    ahmed: "anyone",
};

Greeting.propTypes = {
    day: PropTypes.string,
};

export default Greeting;
