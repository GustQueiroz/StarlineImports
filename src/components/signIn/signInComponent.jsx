import React from "react";
import LogoStarlineBlue from "../../assets/logoStarlineBlue.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signInComponent.css";

const SignInComponent = () => {
  return (
    <div>
      <form className="row g-3">
        <div className="col-12"></div>
        <div className="col-12"></div>
        <div className="col-lg-3 col-md-10 col-sm-12">
          <label htmlFor="inputName" className="form-label">
            Nome Produtor Rural
          </label>
          <input type="text" className="form-control" id="inputName" />
        </div>
        <div className="col-1"></div>
        <div className="col-lg-3 col-sm-12">
          <label htmlFor="inputCPF" className="form-label">
            CPF do Produtor Rural
          </label>
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;
