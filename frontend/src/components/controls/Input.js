import React from 'react';

const Input = (props) => {

    const {name,label,value,onChange} = props;

    return (
        <div>
            <label
                className="form-label"
            >{label}</label>
            <input
                className="form-control"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input;