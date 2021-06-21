import React from "react";

function ValidateCPF(props) {
  console.log(props.transactionState, "PROPS")
  
  const {document} = props.transactionState  
  // RETURN AN TEMPLATE
  return (
    <div>
      {props.transactionState?.document?.length && document?.length < 11 && "Documento inválido"}
    </div>
   
  );
}

export default ValidateCPF;
