import React, { useState } from "react";
import InputDocumentTemplate from '../../../Templates/InputDocumentTemplate/InputDocumentTemplate';

function InputUsernameUseCase(props) {
  const [, setState] = useState("")
  const onSubmit = (value) => {
    props.setResetUsernameState({...props.resetUsernameState, username: value})
    props.handleClick()
  };
  // RETURN AN TEMPLATE
  return (
   <div>
     <p>Instruções de teste:</p>
    <p>users Mock: </p>
    <p>pmnogueira</p>
    <p>testejose</p>
     <InputDocumentTemplate onSubmit={onSubmit} setState={setState}/>
   </div> 
  );
}

export default InputUsernameUseCase;
