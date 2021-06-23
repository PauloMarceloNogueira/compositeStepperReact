import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import FeedbackTemplate from '../../Templates/FeedbackTemplate/FeedbackTemplate';

function FeedbackResetUserUseCase(props) {
  const [state, setState] = useState({})
  
  let history = useHistory();
  const onSubmit = () => {
    props.handleReset()
  };
  // RETURN AN TEMPLATE
  return (
   <FeedbackTemplate onSubmit={onSubmit} state={props.resetUsernameState} />
  );
}

export default FeedbackResetUserUseCase;
