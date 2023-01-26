import React from "react";
import { Link } from "react-router-dom";
import blogLogo from "../asset/blog2.png";
import profile from "../asset/p1.png";
import Login from "../Login/Login";
import Navbar from "../NavBar/Navbar";
import "./Header.css";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <img src={blogLogo} alt="" />
        <Link to='/signup'>
          <img src={profile} alt="" />
        </Link>
        {/* <AccessAlarmIcon /> */}
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
