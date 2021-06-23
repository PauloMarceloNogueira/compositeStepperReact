import React, { useState } from "react";
import "../App.css";
import Stepper from "../Templates/Stepper";
import SetCellphone from "../useCase/InputsUseCase/InputCellphone/SetCellphone";
import SetAmount from "../useCase/InputsUseCase/InputAmount/SetAmount";
import CheckoutConfirm from "../useCase/TopupsUseCase/CheckoutConfirm/CheckoutConfirm";
export default function TopupCellphoneDomain() {
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
