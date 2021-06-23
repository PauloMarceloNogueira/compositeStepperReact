import React, { useState } from "react";
import "../../App.css";
import Stepper from "../../Templates/Stepper";
// Import useCases
import SetCellphone from "../../useCase/SetCellphone";

export default function TemplateName() {
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
      </Stepper.Steps>
    </Stepper>
  );
}
