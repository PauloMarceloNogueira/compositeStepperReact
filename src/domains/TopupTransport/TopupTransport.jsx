import React, { useState } from "react";
import "../../App.css";
import Stepper from "../../Templates/Stepper";
// Import useCases
import SetCellphone from "../../useCase/InputsUseCase/InputCellphone/SetCellphone";
import SetCardNumber from "../../useCase/InputsUseCase/InputCardNumber/SetCardNumber";
import CheckoutConfirm from '../../useCase/TopupsUseCase/CheckoutConfirm/CheckoutConfirm';
export default function TopupTransport() {
  const [transactionState, setTransactionState] = useState({});
  return (
    <Stepper stage={1}>
      <Stepper.Steps>
        {/* Import Steps to useCases */}
        <Stepper.Step
          num={1}
          useCase={SetCellphone}
          setTransactionState={setTransactionState}
          transactionState={transactionState}
        />        
        <Stepper.Step
          num={2}
          useCase={SetCardNumber}
          setTransactionState={setTransactionState}
          transactionState={transactionState}
        />
        <Stepper.Step
          num={3}
          useCase={CheckoutConfirm}
          setTransactionState={setTransactionState}
          transactionState={transactionState}
        />          
      </Stepper.Steps>
    </Stepper>
  );
}
