import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signIn.css";
import SignInComponent from "../../components/signIn/signInComponent";
import SignInHeaderComponent from "../../components/signIn/signInHeader/SignInHeaderComponent";
import Footer from "../../components/footer/footer";

const SignIn = () => {
  return (
    <div className="screen-body">
      <SignInHeaderComponent />
      <div className="signIn-component">
        <SignInComponent />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
