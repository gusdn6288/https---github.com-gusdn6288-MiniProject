import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Productlist.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/getAllProducts")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("상품 정보를 불러오는 중 오류 발생:", error));
  }, []);

  const viewDetails = (id) => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <div className={style.cotainer}>
      {products.length === 0 ? (
        <p className={style.noProdcuts}>등록된 상품이 없습니다.</p>
      ) : (
        <div className={style.carContainer}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} viewDetails={viewDetails} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ product, viewDetails }) => {
  return (
    <div className={style.carBanner}>
      <div className={style.carText}>
        <p className={style.carModel}>{product.model}</p>
      </div>
      <div className={style.carImage}>
      <img src={`/img/Productimg/${product.model}.png`} alt={product.name} />
      </div>
      <button className={style.btnDetails} onClick={() => viewDetails(product.id)}>
        더 알아보기
      </button>
    </div>
  );
};

export default ProductList;
