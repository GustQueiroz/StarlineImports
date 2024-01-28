import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoBig from "../../assets/logoBig.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-body row">
      <img className="logo-footer col-2" src={LogoBig} />
      <div className="footer-text row col-9">
        <div className="help col-3">
          <div className="help-title">Precisa de Ajuda?</div>
          <div className="help-text">
            <div className="text">Entrar em contato</div>
            <div className="text">Rastrear seu pedido</div>
            <div className="text">Reembolso</div>
          </div>
        </div>
        <div className="company col-3">
          <div className="company-title">Sobre a Empresa</div>
          <div className="company-text">
            <div className="text">Sobre nós</div>
            <div className="text">Colaboradores</div>
            <div className="text">Midias</div>
          </div>
        </div>
        <div className="more col-2">Mais Informações</div>
        <div className="social-media col-2">Redes Sociais</div>
      </div>
    </div>
  );
};

export default Footer;
