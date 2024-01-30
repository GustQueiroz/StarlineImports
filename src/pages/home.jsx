import React from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import ComponentImage from "../components/carousel/index.jsx";
import ProductList from "../components/productsList/productList.jsx";
import Footer from "../components/footer/footer.jsx";

function Home() {
  const promotionProducts = [
    {
      id: 1,
      name: "Camisa III Santos 23/24",
      oldPrice: "159,90",
      price: "124,90",
      image:
        "https://static.netshoes.com.br/produtos/camisa-santos-2023-uniforme-3-japao-numero-10-umbro-azul-marinho-vermelho/66/2IA-8546-066/2IA-8546-066_zoom1.jpg?ts=1698429324",
    },
    {
      id: 2,
      name: "Camisa II Santos 22/23",
      oldPrice: "144,90",
      price: "124,90",
      image:
        "https://acdn.mitiendanube.com/stores/001/862/193/products/camisa-santos-ii-2021-2022-branca-e-preta-umbro-masculina-marinho-11-a7cb8e996c65e1297a16220503905657-640-01-d490652b9f4c5f094f16317025565944-640-0.jpg",
    },
    {
      id: 3,
      name: "Camisa Santos 23/24",
      oldPrice: "134,90",
      price: "124,90",
      image:
        "https://images.tcdn.com.br/img/img_prod/1028923/camisa_umbro_santos_oficial_1_2023_torcedor_pele_8509_1_5234583ea4cc07afba5c50fe579ce69e.jpg",
    },
    {
      id: 4,
      name: "Camisa III Man City 23/24",
      oldPrice: "134,90",
      price: "144,90",
      image:
        "https://images.tcdn.com.br/img/img_prod/638286/camisa_manchester_city_2024_uniforme_3_jogador_dry_cell_9853_1_6d473365f2afec417d3ad52f8e60b802.jpg",
    },
    {
      id: 5,
      name: "Camisa II São Paulo 23/24",
      price: "124,90",
      image:
        "https://www.desports.com.br/cdn/shop/files/imagem_2023-11-09_092035873.png?v=1699539640",
    },
    {
      id: 10,
      name: "Camisa Flamengo 23/24",
      price: "124,90",
      image:
        "https://acdn.mitiendanube.com/stores/003/164/010/products/home-frente1-7de76489cdaf0de1e516848692252956-1024-1024.png",
    },
  ];

  const bestSellingProducts = [
    {
      id: 5,
      name: "Camisa Man City 23/24",
      price: "149,90",
      image:
        "https://images.tcdn.com.br/img/img_prod/638286/camisa_manchester_city_2024_uniforme_titular_dry_cell_9525_1_09f0816aca1be57cb8d9e6d6dd6a06a4.jpeg",
    },
    {
      id: 6,
      name: "Camisa Liverpool 23/24",
      price: "149,90",
      image:
        "https://static.wixstatic.com/media/ffff24_701043e73c2549c9a38ea158b6a5ad75~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ffff24_701043e73c2549c9a38ea158b6a5ad75~mv2.png",
    },
    {
      id: 7,
      name: "Camisa São Paulo 23/24",
      price: "149,90",
      image:
        "https://kssports23.com.br/wp-content/uploads/2022/04/camisa-sao-paulo-branca-home-2022-2023-todos-patrocinadores-versao-torcedor-1.jpg",
    },
    {
      id: 8,
      name: "Camisa Santos 23/24",
      price: "149,90",
      image:
        "https://lojaodagringa.com.br/cdn/shop/files/camisa-santos-blaze.jpg?v=1686617242",
    },
    {
      id: 9,
      name: "Camisa Palmeiras 23/24",
      price: "149,90",
      image:
        "https://lojapalmeiras.vteximg.com.br/arquivos/ids/175889-1000-1000/774802-01--1-.png?v=638104516930700000",
    },
  ];

  return (
    <div className="row">
      <HeaderComponent />
      <ComponentImage />
      <ProductList
        listTitle="Promoção Relampago"
        products={promotionProducts}
      />
      <ProductList
        listTitle="Produtos mais Vendidos"
        products={bestSellingProducts}
      />

      <Footer />
    </div>
  );
}

export default Home;
