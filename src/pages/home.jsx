import HeaderComponent from "../components/Header/HeaderComponent";
import ComponentImage from "../components/carousel/index.jsx";
import ProductList from "../components/productsList/productList.jsx";
import Footer from "../components/footer/footer.jsx";

function Home() {
  return (
    <div className="row">
      <HeaderComponent />
      <ComponentImage />
      <ProductList listTitle="Promoção Relampago" />
      <ProductList listTitle="Produtos mais Vendidos" />
      <Footer />
    </div>
  );
}

export default Home;