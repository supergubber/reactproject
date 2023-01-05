import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
const Signup = () =>{
  const navigte = useNavigate();
  const design = (
    <>
      <Button onClick={()=>navigte("/login")}>Signup</Button>
    </>
  );
  return design;
}
export default Signup;
