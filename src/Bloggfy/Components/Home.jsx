import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Navbar from "../NavBar/Navbar";
import SignUp from "../SignUp/SignUp";
import "./CompCss/Home.css";
const Home = () => {
  const [res, setRes] = useState("");

  // fetch("localhost:8080/userRouter/signup").then((data)=>{
  //   setRes(data);
  // });
  async function fetchData() {
    // axios.get()
    // axios
    //   .get("//localhost:8080/userRouter/signup")
    //   .then((data) => {
    //     console.log(data);
    //     // setRes(data);
    //     return data;
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setRes(data);
    //   });
    try {
      const data = await axios.get("//localhost:8080/userRouter/signup");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // axios.get("//localhost:8080/userRouter/signup").then((data)=>{
    //   console.log(data);
    //   // setRes(data);
    //   return data
    // }).then((data)=>{
    //   console.log(data);
    //   setRes(data);
    // });

    fetchData();
  });

  // console.log(res);
  return (
    <div className="Home">
      <Header />
      <div className="HomeContent">
        {/* <h1>this is the home page</h1> */}
        {/* <SignUp /> */}
        {/* <Login /> */}
        <h1>{res}</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
