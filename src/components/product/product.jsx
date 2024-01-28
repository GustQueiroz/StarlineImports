import React from "react";
import CamisaSantos from "../../assets/camisaSantos.webp";
import "./product.css";

export function Product() {
  const productInfo = {
    id: 1,
    name: "Camisa Santos II 23/24",
    price: "134,90",
    oldPrice: "154,90",
  };

  return (
    <div className="product">
      <img
        className="product-image"
        src={CamisaSantos}
        alt={productInfo.name}
      />
      <label className="product-name">{productInfo.name}</label>
      <div></div>
      <label className="product-price">R${productInfo.price}</label>
    </div>
  );
}

export default Product;
