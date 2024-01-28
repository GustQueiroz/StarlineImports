import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/singIn";
import ProductPage from "./pages/productPage";
import Cart from "./pages/cart";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<SignIn />} />
        <Route path="/produto" element={<ProductPage />} />
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
