import React from "react";
import blogLogo from "../asset/blog2.png"
import profile from "../asset/p1.png"
import Navbar from "../NavBar/Navbar";
import "./Header.css"
const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <img src={blogLogo} alt="" />
        <img src={profile} alt="" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
