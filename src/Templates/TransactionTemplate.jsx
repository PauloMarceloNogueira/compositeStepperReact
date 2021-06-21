import React, { useState } from "react";
import "../App.css";
import Stepper from "./Stepper";
import SetCellphone from "../useCase/SetCellphone";
import SetAmount from "../useCase/SetAmount";
import CheckoutConfirm from "../useCase/CheckoutConfirm";
export default function TransactionTemplate() {
  const [transactionState, setTransactionState] = useState({});
  return (
    <Stepper stage={1}>
      <Stepper.Steps>
        <Stepper.Step
          num={1}
          useCase={SetCellphone}
          setTransactionState={setTransactionState}
          transactionState={transactionState}
        />
        <Stepper.Step
          num={2}
          useCase={SetAmount}
          setTransactionState={setTransactionState}
          transactionState={transactionState}
        />
        <Stepper.Step
          num={3}
          useCase={CheckoutConfirm}
          transactionState={transactionState}
        />
      </Stepper.Steps>
    </Stepper>
  );
}
