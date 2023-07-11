import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label, classLabel }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            <p className={classLabel}>{label}</p>
        </Link>
    );
};

export default ButtonMailto;