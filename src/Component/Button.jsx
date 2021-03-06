import React from "react";
import "../App.css";
export default function Button({ children, onClick, style, disabled }) {
  let classes = "bg-blue Buttons";
  if (disabled) {
    classes = classes + "bg-blue Buttons button-disabled";
  }
  return (
    <button style={{ ...style }} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
