import React, { useState } from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";
import "../App.css";
export default function InputCellphone({ onSubmit }) {
  const [value, setValue] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 16,
      }}
    >
      <h4>Digite seu celular</h4>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={"Celular"}
      />
      <Button
        onClick={() => {
          onSubmit(value);
        }}
      >
        COntinuar
      </Button>
    </div>
  );
}
