import React from "react";

import SelectUserToResetUsernameTemplate from "../../../Templates/SelectUserToResetUsernameTemplate/SelectUserToResetUsernameTemplate"
function SelectUserToResetUsernameUseCase(props) {
  
  const onSubmit = (user) => {
    props.setResetUsernameState({...props.resetUsernameState, selected: user})
    props.handleClick()
  };
  // RETURN AN TEMPLATE
  return (
   <SelectUserToResetUsernameTemplate state={props.resetUsernameState} onSubmit={onSubmit}/>
  );
}

export default SelectUserToResetUsernameUseCase;
