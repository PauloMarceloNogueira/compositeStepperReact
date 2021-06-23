import React, { useState } from "react";
import "../../App.css";
import Stepper from "../../Templates/Stepper";
// Import useCases
import InputUsernameUseCase from "../../useCase/InputsUseCase/InputUsernameUseCase/InputUsernameUseCase"
import VerifyDocumentAndReceiveUserInfo from '../../useCase/VerifyDocumentAndReceiveUserInfo/VerifyDocumentAndReceiveUserInfo';
import SelectMediaToResetUsernameUseCase from "../../useCase/ResetUsernameUseCase/SelectMediaToResetUsernameUseCase/SelectMediaToResetUsernameUseCase"
import SelectUserToResetUsernameUseCase from "../../useCase/ResetUsernameUseCase/SelectUserToResetUsernameUseCase/SelectUserToResetUsernameUseCase"
import FeedbackResetUserUseCase from "../../useCase/ResetUsernameUseCase/FeedbackResetUserUseCase/FeedbackResetUserUseCase"

export default function ResetUsernameDomain() {
  const [resetUsernameState, setResetUsernameState] = useState({});
  return (
    <div>
    <Stepper stage={1}>
      <Stepper.Steps>
        {/* Import Steps to useCases */}
        <Stepper.Step
          num={1}
          useCase={InputUsernameUseCase}
          setResetUsernameState={setResetUsernameState}
          resetUsernameState={resetUsernameState}
        />
        <Stepper.Step
          num={2}
          useCase={VerifyDocumentAndReceiveUserInfo}
          setResetUsernameState={setResetUsernameState}
          resetUsernameState={resetUsernameState}
        />    
        <Stepper.Step
          num={3}
          useCase={SelectUserToResetUsernameUseCase}
          setResetUsernameState={setResetUsernameState}
          resetUsernameState={resetUsernameState}
        />               
        <Stepper.Step
          num={4}
          useCase={SelectMediaToResetUsernameUseCase}
          setResetUsernameState={setResetUsernameState}
          resetUsernameState={resetUsernameState}
        />  
        <Stepper.Step
          num={5}
          useCase={FeedbackResetUserUseCase}
          setResetUsernameState={setResetUsernameState}
          resetUsernameState={resetUsernameState}
        />               
      </Stepper.Steps>
    </Stepper>
    </div>
  );
}
