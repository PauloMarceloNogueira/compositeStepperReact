import React from "react";
import Button from "../../Component/Button";
import "../../App.css";
import TemplateTitle from '../../Component/TemplateTitle';
export default function SelectUserToResetUsernameTemplate({ onSubmit, state }) {
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
      <TemplateTitle>Selecione o usuário</TemplateTitle>
      {
        state.userInfo.map(info => {
          return (
            <div>            
              {info.username && <Button onClick={() => onSubmit(info.username)}>{info.username}</Button>}
            </div>
          )
        })
      }
      
    </div>
  );
}
