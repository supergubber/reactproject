import React from "react";
import {useNavigate} from "react-router-dom"
import {Button } from "@mui/material";
const Login =()=>{
  const navigate = useNavigate();
  const design = (
    <>
      <h1>welcome to login</h1>
      <Button onClick={()=>navigate("/dashboard")}>Login</Button>
    </>
  );
  return design;
}
export default Login;
