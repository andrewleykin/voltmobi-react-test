import React from "react";
import InputMask from "react-input-mask";
import "./Input.css";

const Input = ({ id, label, phone, error, ...props }) => {
  const Input = phone ? InputMask : "input";
  return (
    <div className="ui-kit-input">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <Input id={id} type="text" {...props} />
      <span className="error">{error}</span>
    </div>
  );
};

export default Input;
