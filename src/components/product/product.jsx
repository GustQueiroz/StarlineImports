import React from "react";
import CamisaSantos from "../../assets/camisaSantos.webp";
import "./product.css";

const Product = () => {
  return (
    <div className="product">
      <img className="product-image" src={CamisaSantos} />
      <label className="product-name">Camisa Santos 23/24</label>
      <div></div>
      <label className="product-price">R$129,90</label>
    </div>
  );
};

export default Product;
