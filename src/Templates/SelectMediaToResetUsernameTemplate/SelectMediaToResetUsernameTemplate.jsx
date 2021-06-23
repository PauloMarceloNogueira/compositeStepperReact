import React from "react";
import Button from "../../Component/Button";
import "../../App.css";
import TemplateTitle from '../../Component/TemplateTitle';
export default function SelectMediaToResetUsernameTemplate({ onSubmit, userInfo }) {
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
      <TemplateTitle>Selecione como quer receber o nome de usuário</TemplateTitle>
      {
        userInfo.map(info => {
          return (
            <div>
              {info.email && <Button onClick={() => onSubmit(info.email)}>{info.email}</Button>}
              <br />
              {info.phone && <Button onClick={() => onSubmit(info.phone)}>{info.phone}</Button>}
            </div>
          )
        })
      }
      
    </div>
  );
}
