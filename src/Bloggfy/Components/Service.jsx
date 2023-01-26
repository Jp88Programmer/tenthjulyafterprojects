import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import "./CompCss/Service.css";
import serviceDetails from "../Data/serviceDetails";
// import "./CompCss/Blog.css";
const Service = () => {
  return (
    <div>
      <Header />

      <div className="serviceDetails">
        {serviceDetails.map((data) => {
          return (
            <div className="serviceBlock">
              {/* <p>{data.img}</p>
               */}
              <img src={data.img} alt="" />
              <p>{data.title}</p>
              <p>{data.description}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Service;
