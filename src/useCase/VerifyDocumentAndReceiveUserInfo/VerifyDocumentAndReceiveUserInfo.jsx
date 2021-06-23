import React, { useEffect, useState } from "react";

function VerifyDocumentAndReceiveUserInfo(props) {
  
  const [loading, setLoading] = useState(true);
  const {username} = props.resetUsernameState;

  useEffect(() => {
    if (username === "pmnogueira") {
      props.setResetUsernameState({
        ...props.resetUsernameState, userInfo: [{email: "paulomarceloa.nogueira@gmail.com", phone: "11999732158"}]
      })
      setTimeout(() => {
        setLoading(false);
      },2000)
      return;
    }
    if (username === "testejose") {
      props.setResetUsernameState({
        ...props.resetUsernameState, userInfo: [
          {email: "teste.nogueira@gmail.com", phone: "11999732158", username: "teste"}, 
          {email: "123@gmail.com", phone: "11776567888", username: "jose"}
        ]
      })
      setTimeout(() => {
        setLoading(false);
      },2000)
      return;
    }
    props.setResetUsernameState({...props.resetUsernameState, error: true, message: "usuário não encontrado"})
    props.setNum(5);
  },[username])

  useEffect(() => {
    if (!loading) {
      if (props.resetUsernameState.userInfo.length === 1) {
        props.setNum(4);
      } else {
        props.handleClick()
      }
    }
  },[loading])
  // RETURN AN TEMPLATE
  return (
    <div>
      {loading && <p>loading</p>}
    </div>
  )

  ;
}

export default VerifyDocumentAndReceiveUserInfo;
