import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // App 컴포넌트를 올바르게 import
import Product from "./pages/Products/Product"; // 
import Login from "./pages/Login/Login"; // 
import Signup from "./pages/Signup/Signup";

function Routing() {
  return (
<div className="contai"

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} /> {/* <Routes> 안에서 사용해야 함 */}
        <Route path='/product' element={<Product />} /> {/* <Routes> 안에서 사용해야 함 */}
        <Route path='/singup' element={<Signup />} /> {/* <Routes> 안에서 사용해야 함 */}
        <Route path='/login' element={<Login />} /> {/* <Routes> 안에서 사용해야 함 */}
      </Routes>
    </BrowserRouter>


  );
}

export default Routing;
