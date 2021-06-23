import React, { useState } from "react";
import InputLoginTemplate from '../../../Templates/InputLogin/InputLogin';
function InputLogin(props) {
  const [value, setValue] = useState({
    document: "",
    username: ""
  });

  const validateDocument = () => {
    if (value.document === "23346753859") {
      return false
    }
    return true;
  }
  const onSubmit = () => {
    if (validateDocument()) {
      props.setTransactionState({...props.transactionState, document: value.document})
    } else {
      props.handleClick();
    }
  };
  // RETURN AN TEMPLATE
  return (
   <InputLoginTemplate onSubmit={onSubmit} value={value} setValue={setValue}/>
  );
}

export default InputLogin;
