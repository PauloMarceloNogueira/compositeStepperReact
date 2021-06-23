import React, { useState } from "react";
import Input from "../../Component/Input";
import Button from "../../Component/Button";
import "../../App.css";
import TemplateTitle from '../../Component/TemplateTitle';
export default function InputDocumentTemplate({ onSubmit, state }) {
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
      <TemplateTitle>Vamos te ajudar a recuperar seu login</TemplateTitle>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={"Nome de usuário"}
        value={state?.amount}
      />
      <Button onClick={() => onSubmit(value)}>Continuar</Button>
    </div>
  );
}
