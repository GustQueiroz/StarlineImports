import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoStarlineBlue from "../../assets/logoStarlineBlue.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signInComponent.css";

const SignInComponent = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form className="row full-signIn-container">
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label className="col-lg-2"></label>
          <img className="signIn-image" src={LogoStarlineBlue} />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" id="inputEmail" />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <label htmlFor="inputSenha" className="form-label">
            Senha
          </label>
          <input
            type="password"
            value={password.replace(/./g, "*")}
            onChange={handlePasswordChange}
            className="form-control"
            id="inputPassword"
          />
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12">
          <button
            type="text"
            className="form-control button"
            id="inputPassword"
          >
            Entrar
          </button>
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12 centered">
          <Link to="/cadastrar" className="register-text">
            <h5>Não tem conta? Cadastre-se</h5>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;
