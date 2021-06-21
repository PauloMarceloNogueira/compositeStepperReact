import React from "react";
import "../App.css";
export default function Button({ children, onClick, style }) {
  return (
    <button style={{ ...style }} className="Buttons" onClick={onClick}>
      {children}
    </button>
  );
}
