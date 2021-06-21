import React from "react";
import Input from "../../Component/Input";
import Button from "../../Component/Button";
import "../../App.css";
import TemplateTitle from '../../Component/TemplateTitle';
export default function InputLogin({ onSubmit, setValue, value, showStore }) {
  
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
      <TemplateTitle>Bem vindo ao RVPOINT</TemplateTitle>
      {!showStore && 
      <div style={{display: "flex", flexDirection: "column"}}>
        <Input
          onChange={(e) => {
            setValue({...value, document: e.target.value});
          }}
          placeholder={"CPF"}        
        />
        <Input
          onChange={(e) => {
            setValue({...value, username: e.target.value});
          }}
          placeholder={"Usuário"}
        />
        </div>
      }

      {
        showStore && 
        <Input
          onChange={(e) => {
            setValue({...value, username: e.target.value});
          }}
          placeholder={"Loja"}
        />
      }
      <Button onClick={() => onSubmit(value)}>Continuar</Button>
    </div>
  );
}
