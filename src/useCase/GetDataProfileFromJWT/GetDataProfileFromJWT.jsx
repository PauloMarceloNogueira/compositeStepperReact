import React, { useEffect } from "react";
const mockJWT = {username: "PauloMarcelo", document: "23346753859"}

function GetDataProfileFromJWT(props) {
  
  
  // RETURN AN TEMPLATE
  useEffect(() => {
    props.setProfileState({...mockJWT, loading: false});
    props.handleClick()
  },[])
  return (
   <div></div>
  );
}

export default GetDataProfileFromJWT;
