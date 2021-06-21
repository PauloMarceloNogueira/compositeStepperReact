import React, { useState } from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";
import "../App.css";
export default function InputAmount({ onSubmit }) {
  const [value, setValue] = useState(0);
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
      <h4>Digite o Valor</h4>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={"Valor"}
      />
      <Button onClick={() => onSubmit(value)}>Continuar</Button>
    </div>
  );
}
