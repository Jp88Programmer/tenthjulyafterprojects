import React from "react";
import { useState } from "react";
import "./Signup.css";
import logo from "../asset/blog2.png";
import axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassoword] = useState("");

  const submitData = async (e) => {
    try {

      console.log(name);
      console.log(email);
      console.log(profession);
      console.log(password);
      console.log(repassword);
    
      const res = await fetch("//localhost:5000/userRouter/signup", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          name,email,profession,password
        })
        // name: name,
        // email: email,
        // profession: profession,
        // password: password,
      });

      console.log(res);

      const data = await res.json();

      console.log(data);

    } catch (err) {
      console.log(err);
    }
  };

  const s = {
    display: "flex",
    "flexDirection": "row",
  };
  return (
    <div className="signup" style={s}>
      <div className="Sign-up">
        <div className="logo-show">
          <img src={logo} alt="" />
          <span>Welcome</span>
        </div>
        <div className="signup-details">
          <form  method="POST"  className="form">
            <div className="name ">
              <span>Name</span>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className="profession">
              <span>Profession</span>
              <input
                type="text"
                name="profession"
                id="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
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
            <div className="re-password">
              <span>Re-Password</span>
              <input
                type="password"
                name="re-password"
                id="re-password"
                value={repassword}
                onChange={(e) => setRepassoword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn signup-button"
              onClick={() => submitData()}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
