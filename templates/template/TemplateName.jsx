import React, { useState } from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";
import "../App.css";
import TemplateTitle from '../Component/TemplateTitle';
export default function TemplateName({ onSubmit, state }) {
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
      <TemplateTitle>NOME_DO_TEMPLATE</TemplateTitle>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={"Template_Value"}
        value={state?.amount}
      />
      <Button onClick={() => onSubmit(value)}>Continuar</Button>
    </div>
  );
}
