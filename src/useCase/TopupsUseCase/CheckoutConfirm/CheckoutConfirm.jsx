import React from "react";
import { useHistory } from 'react-router-dom';
import Checkout from "../../../Templates/Checkout/Checkout";

function CheckoutConfirm(props) {
  let history = useHistory();
  const onSubmit = () => {
    history.push({
      pathname: "/receipt",
      state: props.transactionState 
    })
  };
  return (
    <Checkout
      onSubmit={onSubmit}
      phone={props.transactionState.phone}
      amount={props.transactionState.amount}
      onCancel={() => {
        history.push({
          pathname: "/",
        });
      }}
      onEdit={(key) => {
        props.setNum(key);
      }}
    />
  );
}

export default CheckoutConfirm;
