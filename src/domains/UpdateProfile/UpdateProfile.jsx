import React, { useState } from "react";
import "../../App.css";
import Stepper from "../../Templates/Stepper";
// Import useCases
import GetDataProfileFromJWT from "../../useCase/GetDataProfileFromJWT/GetDataProfileFromJWT";
import UpdateProfileUseCase from "../../useCase/UpdateProfileUseCase/UpdateProfileUseCase";
import UpdateLoginSuccess from "../../useCase/UpdateLoginSuccess/UpdateLoginSuccess";

export default function UpdateProfile() {
  const [profileState, setProfileState] = useState({loading: true});
  return (
    <Stepper stage={1}>
      <Stepper.Steps>
        {/* Import Steps to useCases */}
        <Stepper.Step
          num={1}
          useCase={GetDataProfileFromJWT}
          setProfileState={setProfileState}
          profileState={profileState}
        />        
        <Stepper.Step
          num={2}
          useCase={UpdateProfileUseCase}
          setProfileState={setProfileState}
          profileState={profileState}
        />
        <Stepper.Step
          num={3}
          useCase={UpdateLoginSuccess}
          setProfileState={setProfileState}
          profileState={profileState}
        />           
      </Stepper.Steps>
    </Stepper>
  );
}
