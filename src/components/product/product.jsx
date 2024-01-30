import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ productInfo }) => {
  const hasOldPrice =
    productInfo.oldPrice !== undefined &&
    productInfo.oldPrice !== null &&
    parseFloat(productInfo.oldPrice) > parseFloat(productInfo.price);

  return (
    <Link className="cart-text" to={`/produto/${productInfo.id}`}>
      <div className="product">
        <img
          className="product-image"
          src={productInfo.image}
          alt={productInfo.name}
        />
        <label className="product-name">{productInfo.name}</label>
        <div></div>
        {hasOldPrice && (
          <label className="productOldPrice">R${productInfo.oldPrice}</label>
        )}
        <label
          className={`product-price ${!hasOldPrice ? "productMargin" : ""}`}
        >
          R${productInfo.price}
        </label>
      </div>
    </Link>
  );
};

export default Product;
