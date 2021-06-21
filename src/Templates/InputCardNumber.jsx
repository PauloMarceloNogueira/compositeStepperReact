import React, { useState } from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";
import TemplateTitle from "../Component/TemplateTitle"
import "../App.css";
export default function InputCardNumber({ onSubmit, state }) {
  const [value, setValue] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",        
      }}
    >
      <TemplateTitle>Qual o número do cartão?</TemplateTitle>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={"000000000-0"}
        value={state?.cardNumber}
      />
      <Button
        disabled={!!value.length ? false : true}
        onClick={() => {
          onSubmit(value);
        }}
      >
        Continuar
      </Button>
    </div>
  );
}
