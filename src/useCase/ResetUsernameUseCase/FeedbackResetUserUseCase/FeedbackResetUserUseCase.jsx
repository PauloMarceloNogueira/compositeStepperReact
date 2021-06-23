import React  from "react";

import FeedbackTemplate from '../../../Templates/FeedbackTemplate/FeedbackTemplate';

function FeedbackResetUserUseCase(props) {
  
  const onSubmit = () => {
    props.handleReset()
  };
  // RETURN AN TEMPLATE
  return (
   <FeedbackTemplate onSubmit={onSubmit} state={props.resetUsernameState} />
  );
}

export default FeedbackResetUserUseCase;
