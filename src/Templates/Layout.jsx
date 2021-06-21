import React from "react";

export default function Layout({ children }) {
  return (
    <div style={{ height: "100vh"}}>
      <header
        className="bg-petroleum"
        style={{
          height: 40,          
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></header>
      <body
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          height: "80%",
        }}
      >
        {children}
      </body>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#FFF",
          bottom: 0,
          position: "absolute",
        }}
      ></footer>
    </div>
  );
}
