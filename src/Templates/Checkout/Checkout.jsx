import React from "react";

import Button from "../../Component/Button";
import "../../App.css";
import TemplateTitle from '../../Component/TemplateTitle';
import GhostButton from "../../Component/GhostButton"
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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        backgroundColor: "#FFF",
        padding: 16,
      }}
    >
      <TemplateTitle>Confira as informações</TemplateTitle>
        {phone && 
          <div>
            <p className="font-size-14 color-grey">Telefone</p>
            <div style={{flexDirection: "row", display: "flex"}}>
              <div>{phone}</div>  
              <GhostButton onClick={() => {onEdit(1)}}>Editar</GhostButton>        
            </div>
        </div>
        }
        {amount && 
          <div>
            <p className="font-size-14 color-grey">Valor</p>
            <div style={{flexDirection: "row", display: "flex"}}>
            <div>{amount}</div>          
              <GhostButton onClick={() => {onEdit(2)}}>Editar</GhostButton>                
            </div>
        </div>
        }
      <div style={{paddingTop: 24}}>
        <Button style={{marginBottom: 8}} onClick={() => onSubmit()}>Pagar</Button>
        <Button onClick={() => onCancel()}>Cancelar</Button>
      </div>
    </div>
  );
}
