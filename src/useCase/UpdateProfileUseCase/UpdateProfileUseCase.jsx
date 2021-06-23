import React from "react";
import UpdateProfileTemplate from "../../Templates/UpdateProfileTemplate/UpdateProfileTemplate"
function UpdateProfileUseCase(props) {
  
  const onSubmit = () => {
    props.setProfileState({...props.profileState, error: true, message: "Deu ruim"})
    props.handleClick()
  };
  // RETURN AN TEMPLATE
  return (
   <UpdateProfileTemplate onSubmit={onSubmit} state={props.profileState} />
  );
}

export default UpdateProfileUseCase;
