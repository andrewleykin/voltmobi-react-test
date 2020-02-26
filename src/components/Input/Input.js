import React from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import "./Input.css";

const Input = ({ id, label, phone, error, ...props }) => {
  const Input = phone ? InputMask : "input";
  const newProps = { ...props };
  if (phone) {
    newProps.mask = "+7(999)999-99-99";
  }
  return (
    <div className="ui-kit-input">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <Input id={id} type="text" {...newProps} />
      <span className="error">{error}</span>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  phone: PropTypes.bool,
  error: PropTypes.string
};

Input.defaultProps = {
  label: "Введите :",
  phone: false,
  error: ""
};

export default Input;
