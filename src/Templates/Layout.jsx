import React from "react";

export default function Layout({ children }) {
  return (
    <div style={{ height: "100vh", backgroundColor: "#282c34" }}>
      <header
        style={{
          height: 40,
          backgroundColor: "#FFF",
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
          height: "100%",
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
          height: 40,
          backgroundColor: "#FFF",
          bottom: 0,
          position: "absolute",
        }}
      ></footer>
    </div>
  );
}
