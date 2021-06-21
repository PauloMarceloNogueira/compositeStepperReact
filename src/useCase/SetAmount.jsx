import React from "react";
import InputAmount from "../Templates/InputAmount";
import Button from "../Component/Button";

function SetAmount(props) {
  if (props.transactionState.phone === "999732158") {
    return (
      <div>
        <h2>Esse telefone está impossibilitado de receber recarga</h2>
        <Button onClick={props.handleBack}>Voltar</Button>
      </div>
    );
  }
  const onSubmit = (e) => {
    props.setTransactionState({
      ...props.transactionState,
      amount: e,
    });
    props.handleClick();
  };
  return <InputAmount onSubmit={onSubmit} state={props.transactionState} />;
}

export default SetAmount;
