import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import FeedbackTemplate from '../../Templates/FeedbackTemplate/FeedbackTemplate';

function UpdateLoginSuccess(props) {
  const [state, setState] = useState({})
  
  let history = useHistory();
  const onSubmit = () => {
    history.push({
      pathname: "/",
    })
  };
  // RETURN AN TEMPLATE
  return (
   <FeedbackTemplate onSubmit={onSubmit} state={props.profileState} />
  );
}

export default UpdateLoginSuccess;
