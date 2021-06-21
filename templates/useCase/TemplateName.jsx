import React from "react";
import { useHistory } from 'react-router-dom';

function TemplateName(props) {
  let history = useHistory();
  const onSubmit = () => {
    history.push({
      pathname: "/receipt",
      state: props.transactionState 
    })
  };
  // RETURN AN TEMPLATE
  return (
   <div></div>
  );
}

export default TemplateName;
