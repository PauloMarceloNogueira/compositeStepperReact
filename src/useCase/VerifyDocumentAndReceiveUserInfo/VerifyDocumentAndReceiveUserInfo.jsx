import React, { useEffect, useState } from "react";

function VerifyDocumentAndReceiveUserInfo(props) {
  
  const [loading, setLoading] = useState(true);
  const {username} = props.resetUsernameState;
  const {setResetUsernameState, resetUsernameState, setNum, handleClick} = props;
  useEffect(() => {
    if (username === "pmnogueira") {
      setResetUsernameState({
        ...resetUsernameState, userInfo: [{email: "paulomarceloa.nogueira@gmail.com", phone: "11999732158"}]
      })
      setTimeout(() => {
        setLoading(false);
      },2000)
      return;
    }
    if (username === "testejose") {
      setResetUsernameState({
        ...resetUsernameState, userInfo: [
          {email: "teste.nogueira@gmail.com", phone: "11999732158", username: "teste"}, 
          {email: "123@gmail.com", phone: "11776567888", username: "jose"}
        ]
      })
      setTimeout(() => {
        setLoading(false);
      },2000)
      return;
    }
    setResetUsernameState({...resetUsernameState, error: true, message: "usuário não encontrado"})
    setNum(5);
  },[resetUsernameState, setNum, setResetUsernameState, username])

  useEffect(() => {
    if (!loading) {
      if (!!resetUsernameState?.userInfo && resetUsernameState?.userInfo?.length === 1) {
        setNum(4);
      } else {
        handleClick()
      }
    }
  },[handleClick, loading, resetUsernameState, setNum])
    // RETURN AN TEMPLATE
  return (
    <div>
      {loading && <p>loading</p>}
    </div>
  )

  ;
}

export default VerifyDocumentAndReceiveUserInfo;
