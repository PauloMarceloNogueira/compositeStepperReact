import React from "react";
import TemplateTitle from "../Component/TemplateTitle"
import Button from '../Component/Button';
import "../App.css";
import { useHistory, useLocation } from 'react-router-dom';
export default function ReceiptTemplate(props) {
  let history = useHistory();
  const location = useLocation()
  console.log(props, location)
  const {phone, amount} = location.state;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",    
        
      }}
    >
      <TemplateTitle>Comprovante de recarga</TemplateTitle>
      <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
       {amount && 
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
            <div className="font-size-16 color-petroleum bold">Valor</div>
            <div className="font-size-24 color-petroleum bold">R$ {amount}</div>
          </div>}
        {phone && <div style={{paddingTop: 8, paddingBottom: 24, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
          <div className="font-size-14 color-grey">Telefone</div>
          <div className="font-size-14 color-grey">{phone}</div>
        </div>}
        <Button onClick={() => history.push("/")}>
          Voltar para Início
        </Button>
        
      </div>
    </div>
  );
}
