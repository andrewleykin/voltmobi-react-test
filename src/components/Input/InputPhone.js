import React from "react";
import InputMask from "react-input-mask";
import "./Input.css";

const InputPhone = ({
  id,
  label,
  error,
  value,
  onChange,
  onBlur,
  placeholder
}) => (
  <div className="ui-kit-input">
    <label htmlFor={id} className="label">
      {label}
    </label>
    <InputMask
      id={id}
      mask="+7(999)999-99-99"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
    />
    <span className="error">{error}</span>
  </div>
);
export default InputPhone;
