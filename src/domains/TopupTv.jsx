import React, { useState } from "react";
import "../App.css";
import Stepper from "../Templates/Stepper";
import SetAmount from "../useCase/SetAmount";
import CheckoutConfirm from "../useCase/CheckoutConfirm";
import SetCardNumber from '../useCase/SetCardNumber';
export default function TopupTvDomain() {
  const [transactionState, setTransactionState] = useState({});
  return (
    <Stepper stage={1}>
      <Stepper.Steps>       
      <Stepper.Step
          num={1}
          useCase={SetCardNumber}
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
