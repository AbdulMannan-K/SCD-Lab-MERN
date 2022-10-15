import React from 'react';

const Button = (props) => {

    const {label,name,onClick}=props;

    return (
        <button
            name={name}
            onClick={onClick}
            className="btn btn-primary"
            type="submit"
        >
            {label}
        </button>
    );
};

export default Button;