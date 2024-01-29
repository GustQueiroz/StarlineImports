import React from "react";
import "./productList.css";
import Product from "../product/product";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = ({ listTitle, products }) => {
  return (
    <div className="row full-list">
      <label className="col-1"></label>
      <label className="col-10 productList-Text">{listTitle}</label>

      {products.map((product, index) => (
        <div key={index} className="col-2">
          <Product productInfo={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
