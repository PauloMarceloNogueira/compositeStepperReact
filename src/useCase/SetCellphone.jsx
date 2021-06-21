import React from "react";
import InputCellphone from "../Templates/InputCellphone";
// import { Container } from './styles';

function SetCellphone(props) {
  const onSubmit = (e) => {
    props.setTransactionState({
      ...props.transactionState,
      phone: e,
    });
    props.handleClick();
  };
  return <InputCellphone onSubmit={onSubmit} />;
}

export default SetCellphone;
