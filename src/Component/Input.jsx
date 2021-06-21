import React from "react";
import "../App.css";
export default function Input({ onChange, placeholder, value }) {
  return (
    <input
      className="Input"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
}
