import React from "react";

import Button from "../../Component/Button";
import "../../App.css";
import TemplateTitle from '../../Component/TemplateTitle';
export default function FeedbackTemplate({ onSubmit, state }) {  
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
      <TemplateTitle>{!state.error ? "Sucesso!" : "Erro!"}</TemplateTitle>
      <div>
        <h3>{state.success}</h3>
        <p>{state.message}</p>
      </div>
      <Button onClick={() => onSubmit()}>Continuar</Button>
    </div>
  );
}
