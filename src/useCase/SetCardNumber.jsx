import React from "react";
import InputCardNumber from '../Templates/InputCardNumber';
// import { Container } from './styles';

function SetCardNumber(props) {
  const onSubmit = (e) => {
    props.setTransactionState({
      ...props.transactionState,
      cardNumber: e,
    });
    props.handleClick();
  };
  return <InputCardNumber onSubmit={onSubmit} state={props.transactionState} />;
}

export default SetCardNumber;
