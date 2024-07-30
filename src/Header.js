import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header id="abc">
      <Link to="/" id="abcd">
        Home
      </Link>
      <Link to="/Product" id="abcd">
        Product
      </Link>
    </header>
  );
};

export default Header;
