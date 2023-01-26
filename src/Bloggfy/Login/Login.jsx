import React, { useState } from "react";
import "./Login.css";
import blog from "../asset/blog2.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    return {
      email: email,
      password: password,
    };
  };

  const s = {
    "display":"flex",
    "flex-direction":"row"
  }
  return (
    <div className="login" style={s}>
      <div className="Login">
        <div className="logo-show">
          <img src={blog} alt="" />
          <span>Welcome</span>
        </div>
        <div className="login-details">
          <form action="" className="form" onSubmit={submitForm}>
            <div className="">
              <span>Email</span>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <span>Password</span>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
