import React, { useState } from "react";
import Input from "../../Component/Input";
import Button from "../../Component/Button";
import "../../App.css";
import TemplateTitle from '../../Component/TemplateTitle';
export default function InputAmount({ onSubmit, state }) {
  const [value, setValue] = useState(0);
  console.log(state, "STATE")
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
      <TemplateTitle>Digite o valor da recarga</TemplateTitle>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={"R$ 0,00"}
        value={state?.amount}
      />
      <Button onClick={() => onSubmit(value)}>Continuar</Button>
    </div>
  );
}
