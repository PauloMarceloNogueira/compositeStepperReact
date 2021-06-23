import React, { useState } from "react";
import Input from "../../Component/Input";
import Button from "../../Component/Button";
import "../../App.css";
import TemplateTitle from '../../Component/TemplateTitle';
export default function UpdateProfileTemplate({ onSubmit, state }) {
  console.log(state, "state")
  const [value, setValue] = useState({
    document: state?.document,
    birthdate: state?.birthdate,
    username: state?.username,
    cellphone: state?.cellphone,
  });

  const enableButton = value.document && value.birthdate && value.username && value.cellphone
  
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
      {state?.loading && <p>Loading...</p>}
      <TemplateTitle>Atualizar seus dados</TemplateTitle>
      <Input
        disabled={!!state.username}
        onChange={(e) => {
          setValue({...value, username: e.target.value});
        }}
        placeholder={"Usuário"}
        value={state?.username}
      />
      <Input
        disabled={!!state.cellphone}
        onChange={(e) => {
          setValue({...value, cellphone: e.target.value});
        }}
        placeholder={"Celular"}
        value={state?.cellphone}
      />
      <Input
        disabled={!!state.birthdate}
        onChange={(e) => {
          setValue({...value, birthdate: e.target.value});
        }}
        placeholder={"Data de nascimento"}
        value={state?.birthdate}
      />
      <Input
        disabled={!!state.document}
        onChange={(e) => {
          setValue({...value, document: e.target.value});
        }}
        placeholder={"Documento"}
        value={state?.document}
      />
      <Button onClick={() => onSubmit(value)} disabled={!enableButton}>Continuar</Button>
    </div>
  );
}
