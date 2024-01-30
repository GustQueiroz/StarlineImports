import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import { useParams } from "react-router-dom";
import productData from "../../product.json";
import "./productPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const productInfo = productData.find(
    (product) => product.id === parseInt(id)
  );

  if (!productInfo) {
    return <div>Produto não encontrado.</div>;
  }

  const hasOldPrice =
    productInfo.oldPrice !== undefined &&
    productInfo.oldPrice !== null &&
    parseFloat(productInfo.oldPrice) > parseFloat(productInfo.price);

  return (
    <div>
      <HeaderComponent />
      <img
        className="product-image"
        src={productInfo.image}
        alt={productInfo.name}
      />
      <h2>{productInfo.name}</h2>
      {hasOldPrice && (
        <label className="productOldPrice">R${productInfo.oldPrice}</label>
      )}
      <label className={`product-price ${!hasOldPrice ? "productMargin" : ""}`}>
        R${productInfo.price}
      </label>
    </div>
  );
};

export default ProductPage;
