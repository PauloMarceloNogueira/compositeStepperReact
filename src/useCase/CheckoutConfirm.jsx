import React from "react";
import Checkout from "../Templates/Checkout";

function CheckoutConfirm(props) {
  const onSubmit = (e) => {
    props.setTransactionState({
      ...props.transactionState,
      amount: e,
    });
    props.handleClick();
  };
  return (
    <Checkout
      onSubmit={onSubmit}
      phone={props.transactionState.phone}
      amount={props.transactionState.amount}
      onCancel={() => {
        console.log("cancelou");
      }}
      onEdit={(key) => {
        props.setNum(key);
      }}
    />
  );
}

export default CheckoutConfirm;
