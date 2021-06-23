import React, { useState } from "react";
import Input from "../../Component/Input";
import Button from "../../Component/Button";
import TemplateTitle from "../../Component/TemplateTitle"
import "../../App.css";
export default function InputCellphone({ onSubmit, state }) {
  console.log(state)
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
      <TemplateTitle>Qual o celular irá receber a recarga?</TemplateTitle>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={"(00) 00000-0000"}
        value={state?.phone}
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
