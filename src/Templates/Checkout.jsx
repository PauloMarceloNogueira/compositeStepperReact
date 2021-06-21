import React from "react";

import Button from "../Component/Button";
import "../App.css";
export default function Checkout({
  phone,
  amount,
  onSubmit,
  onCancel,
  onEdit,
}) {
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
      <h4>Confirme a recarga</h4>
      <div>
        Telefone: {phone}
        <button onClick={() => onEdit(1)}>Alterar</button>
      </div>
      <div>
        Valor: {amount}
        <button onClick={() => onEdit(2)}>Alterar</button>
      </div>
      <Button onClick={() => onSubmit()}>Continuar</Button>
      <Button onClick={() => onCancel()}>Cancelar</Button>
    </div>
  );
}
