import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Productlist.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/getAllProducts")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("상품 정보를 불러오는 중 오류 발생:", error));
  }, []);

  const viewDetails = (prodcode) => {
    navigate(`/productDetail/${prodcode}`);
  };

  return (
    <div className="container mt-4">
      {products.length === 0 ? (
        <p className="no-products">등록된 상품이 없습니다.</p>
      ) : (
        <div className="car-container">
          {products.map((product) => (
            <ProductCard key={product.id || product.prodcode} product={product} viewDetails={viewDetails} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ product, viewDetails }) => {
  return (
    <div className="car-banner">
      <div className="car-text">
        <p className="car-model">{product.model}</p>
      </div>
      <div className="car-image">
      <img src={`/img/Productimg/${product.model}.png`} alt={product.name} />
      </div>
      <button className="btn-details" onClick={() => viewDetails(product.prodcode)}>
        더 알아보기
      </button>
    </div>
  );
};

export default ProductList;
