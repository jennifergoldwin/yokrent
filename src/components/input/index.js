"use client";
import React from "react";
const CustomInput = ({ type, name, placeholder, label, form }) => {
  return (
    <div className="block py-2">
      <h3>{label}</h3>
      <input
        onChange={(e) =>
          form !== null
            ? form.setValue(name, e.target.value)
            : console.log(e.target.value)
        }
        name={name}
        placeholder={placeholder}
        type={type}
        className="border-gray-300 rounded border py-1 px-4 w-full"
      />
    </div>
  );
};

export default CustomInput;
