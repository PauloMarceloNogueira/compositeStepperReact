import React, { useEffect } from "react";
const mockJWT = {username: "PauloMarcelo", document: "23346753859"}

function GetDataProfileFromJWT(props) {
  
  const {setProfileState, handleClick} = props
  // RETURN AN TEMPLATE
  useEffect(() => {
    setProfileState({...mockJWT, loading: false});
    handleClick()
  },[setProfileState, handleClick])
  return (
   <div></div>
  );
}

export default GetDataProfileFromJWT;
