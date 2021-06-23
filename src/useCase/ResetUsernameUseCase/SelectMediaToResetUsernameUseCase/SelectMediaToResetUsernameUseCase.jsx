import React from "react";
import SelectMediaToResetUsernameTemplate from "../../../Templates/SelectMediaToResetUsernameTemplate/SelectMediaToResetUsernameTemplate"
function SelectMediaToResetUsernameUseCase(props) {
  console.log(props.resetUsernameState, 'props.resetUsernameState')
  const onSubmit = (data) => {
    alert(`Enviou para ${data}`)
  };

  const userInfo = props.resetUsernameState?.selected ? props.resetUsernameState.userInfo
    .filter(a => a.username === props.resetUsernameState?.selected) 
      : props.resetUsernameState.userInfo
  // RETURN AN TEMPLATE
  return (
   <SelectMediaToResetUsernameTemplate userInfo={userInfo} onSubmit={onSubmit}/>
  );
}

export default SelectMediaToResetUsernameUseCase;
