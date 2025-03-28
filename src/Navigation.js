import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

function Navigation() {
  return (
    <dvi className="App">
    <header className="nav-bar">
  <nav className="nav-left">
    <a href="product">Models</a>
    <a href="">WishList</a>
  </nav>
  <div className="nav-logo">
  <a href="/">
    <img
      src="https://assets.oneweb.mercedes-benz.com/plugin/hp-assets/latest/images/brands/mercedes-benz/logo.svg"
      alt="Mercedes-Benz Logo"
      className="logo"
    />
   </a>
  </div>
  <nav className="nav-right">
    <a href="singup">Sign up</a>
    <a href="login">Login</a>
  </nav>
</header>
    </dvi>
  );
}

export default Navigation;
