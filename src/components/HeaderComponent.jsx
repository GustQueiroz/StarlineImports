import React from "react";
import LogoStarline from "../assets/logoStarline.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/headerStyles.css";
const HeaderComponent = () => {
  return (
    <div className="full-header">
      <header className="first-header row g-3">
        <div className="col-2">
          <img className="logo-image" src={LogoStarline} />
        </div>
        <div className="col-3">
          <input className="search-input col-9"></input>
        </div>
      </header>
      <div className="second-header"></div>
    </div>
  );
};

export default HeaderComponent;
