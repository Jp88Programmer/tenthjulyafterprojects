import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";
// import inst from "../asset/icons8-instagram.svg";
// import InstagramIcon from "@mui/icons-material/Instagram";

const st = {
  // "width":"2rem"
  // "fontSixe
  // "
  fontSize: "40px",
};
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBlock">
        <div className="innerBlock">
          <ul>
            <li className="footer-list">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="footer-list">
              <Link to="/service">Service</Link>
            </li>
            <li className="footer-list">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="innerBlock">
          <h6>Contact</h6>
          <div className="email">
            <span>Email</span>
            <input type="text" />
            <button>Notfy</button>
          </div>
        </div>
      </div>
      <div className="socialIcon">
        <div>
          <SocialIcon url="https://twitter.com/" style={st} />
          <SocialIcon url="https://linkedin.com/" />
           <SocialIcon url="https://instagram.com/" />
           
           {/* <img src={inst} alt="" /> */}
        </div>
        <p>Build By Bloogfy</p>
      </div>
    </div>
  );
};

export default Footer;
