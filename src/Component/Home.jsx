import React from "react";
import "../App.css";

export default function HomeButton({ children, onClick, style, icon }) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 100}}>
    <button style={{ ...style }} className="Buttons-Home" onClick={onClick}>
      {icon}
    </button>      
    <p className="color-petroleum font-size-12">{children}</p>
    </div>
  );
}
