import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "../../component/Productlists/Productlist";
import style from "./Product.module.css"
function Product() {
  return (
    <div>
      {/* Model Overview 제목 추가 */}
      <div className={style.modelOverview}>
        <h1>Model Overview</h1>
      </div>

      {/* 차량 리스트 */}
    
      <div className={style.carContainer}>
        <ProductList />
      </div>
    </div>
  );
}

export default Product;
