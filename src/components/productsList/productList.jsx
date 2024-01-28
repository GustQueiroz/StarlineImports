import React from "react";
import "./productList.css";
import Product from "../product/product";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  return (
    <div className="row full-list">
      <label className="col-1"></label>
      <label className="col-10 productList-Text">Produtos mais vendidos</label>
      <div className="col-2">
        <Product />
      </div>
      <div className="col-2">
        <Product />
      </div>
      <div className="col-2">
        <Product />
      </div>
      <div className="col-2">
        <Product />
      </div>
      <div className="col-1">
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
