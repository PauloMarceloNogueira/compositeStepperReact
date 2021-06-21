import React, { useState } from "react";
import "../../App.css";
import Stepper from "../../Templates/Stepper";
// Import useCases
import InputLogin from '../../useCase/InputLogin/InputLogin';
import InputStore from '../../useCase/InputStore/InputStore';
import ValidateCPF from '../../useCase/ValidateCPF/ValidateCPF';
export default function UsersLoginDomain() {
  const [transactionState, setTransactionState] = useState({});
  return (
    <Stepper stage={1}>
      <Stepper.Steps>
        {/* Import Steps to useCases */}
        <Stepper.Step
          num={1}
          useCase={InputLogin}
          setTransactionState={setTransactionState}
          transactionState={transactionState}
        /> 
        <Stepper.Step
          num={1}
          useCase={ValidateCPF}
          setTransactionState={setTransactionState}
          transactionState={transactionState}
        /> 
        <Stepper.Step
          num={2}
          useCase={InputStore}
          setTransactionState={setTransactionState}
          transactionState={transactionState}
        />       
      </Stepper.Steps>
    </Stepper>
  );
}
