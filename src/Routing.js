import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // App 컴포넌트를 올바르게 import
import Product from "./pages/Products/Product"; // 
import Login from "./pages/Login/Login"; // 
import Signup from "./pages/Signup/Signup";
import ProductDetail from "./pages/Detail/ProductDetail";

function Routing() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/product' element={<Product />} /> 
        <Route path='/singup' element={<Signup />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/productDetail/:id' element={<ProductDetail />} /> 
      </Routes>
    </BrowserRouter>


  );
}

export default Routing;
