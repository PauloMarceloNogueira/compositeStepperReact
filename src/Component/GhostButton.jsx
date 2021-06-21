import React from "react";
import "../App.css";
export default function GhostButton({ children, onClick, style, disabled }) {
  let classes = "GhostButtons";
  if (disabled) {
    classes = classes + "GhostButtons button-disabled";
  }
  return (
    <button style={{ ...style }} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
