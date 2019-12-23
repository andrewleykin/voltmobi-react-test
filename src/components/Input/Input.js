import React from "react";
import "./Input.css";

const Input = ({ id, label, value, error, onChange, onBlur, placeholder }) => (
  <div className="ui-kit-input">
    <label htmlFor={id} className="label">
      {label}
    </label>
    <input
      id={id}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
    <span className="error">{error}</span>
  </div>
);

export default Input;
