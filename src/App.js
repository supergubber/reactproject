import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./cmp/login";
import Signup from "./cmp/signup";
import Dashboard from "./cmp/dashboard";
import 'material-icons/iconfont/material-icons.css';
const App = ()=>{
  const design = (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path="blog" element={<h1>welcome to blog page</h1>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
  return design;
}
export default App;
