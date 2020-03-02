import React from "react";
import InputMask from "react-input-mask";
import "./Input.css";
import { FieldItem } from "../Cart/CartForm/types";

interface ComponentProps extends FieldItem {
  phone: boolean;
  mask?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<ComponentProps> = ({
  id,
  label,
  phone,
  error,
  ...props
}) => {
  const Input = phone ? InputMask : "input";
  const newProps = { ...props };
  if (phone) {
    newProps.mask = "+7(999)999-99-99";
  }
  return (
    <div className="ui-kit-input">
      <label htmlFor={id + ""} className="label">
        {label}
      </label>
      // @ts-ignore
      <Input id={id + ""} {...newProps} />
      <span className="error">{error}</span>
    </div>
  );
};

export default Input;
