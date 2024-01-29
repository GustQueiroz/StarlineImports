import React from "react";
import "./product.css";

const Product = ({ productInfo }) => {
  return (
    <div className="product">
      <img
        className="product-image"
        src={productInfo.image}
        alt={productInfo.name}
      />
      <label className="product-name">{productInfo.name}</label>
      <div></div>
      <label className="product-price">R${productInfo.price}</label>
    </div>
  );
};

export default Product;
