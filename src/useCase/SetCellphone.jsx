import React from "react";
import InputCellphone from "../Templates/InputCellphone";
// import { Container } from './styles';

function SetCellphone(props) {
  console.log(props, "PROPS")
  const onSubmit = (e) => {
    props.setTransactionState({
      ...props.transactionState,
      phone: e,
    });
    props.handleClick();
  };
  return <InputCellphone onSubmit={onSubmit} state={props.transactionState} />;
}

export default SetCellphone;
