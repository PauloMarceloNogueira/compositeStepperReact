import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import InputLoginTemplate from '../../Templates/InputLogin/InputLogin';
function InputLogin(props) {
  const [value, setValue] = useState({
    document: "",
    username: ""
  });
  let history = useHistory();

  const validateDocument = () => {
    if (value.document === "23346753859") {
      return false
    }
    return true;
  }
  const onSubmit = () => {
    if (validateDocument()) {
      props.setTransactionState({...props.transactionState, document: value.document})
      // history.push({
      //   pathname: "/",
      //   state: props.transactionState 
      // })
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
