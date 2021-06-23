import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import InputLoginTemplate from "../../../Templates/InputLogin/InputLogin"
function InputStore(props) {
  const [value, setValue] = useState({
    store: ""
  })
  let history = useHistory();
  const onSubmit = () => {
    history.push({
      pathname: "/",
      state: props.transactionState 
    })
  };
  // RETURN AN TEMPLATE
  return (
    <InputLoginTemplate onSubmit={onSubmit} value={value} setValue={setValue} showStore={true}/>
  );
}

export default InputStore;
