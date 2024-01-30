import React from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import ComponentImage from "../components/carousel/index.jsx";
import ProductList from "../components/productsList/productList.jsx";
import Footer from "../components/footer/footer.jsx";
import ProductData from "../product.json";

function Home() {
  return (
    <div className="row">
      <HeaderComponent />
      <ComponentImage />
      <ProductList listTitle="Promoção Relampago" products={ProductData} />
      <ProductList listTitle="Produtos mais Vendidos" products={ProductData} />

      <Footer />
    </div>
  );
}

export default Home;
