import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import ProductList from "../../component/Productlists/Productlist";

function Product() {
  return (
    <div>
      {/* Model Overview 제목 추가 */}
      <div className="model-overview">
        <h1>Model Overview</h1>
      </div>

      {/* 차량 리스트 */}
    
      <div className="car-container">
        <ProductList />
      </div>
    </div>
  );
}

export default Product;
