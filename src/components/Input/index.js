import React  from "react";
const InputField = ({ value, label, name, placeholder, type, onChange, props }) => {
    return(
        <input
        type={type}
        value={value}
        name={name}
        className="p-2 rounded-lg bg-transparent border-transparent flex-1 w-full h-full"
        placeholder={placeholder}
        onChange={onChange}
        />
    )
};

export default InputField;