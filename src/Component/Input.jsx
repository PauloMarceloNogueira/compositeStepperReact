import React from "react";
import "../App.css";
export default function Input({ onChange, placeholder, value, disabled }) {
  return (
    <input
      className="Input"
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={value}
      autoFocus={true}
      disabled={disabled}
    />
  );
}
