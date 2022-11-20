import React from "react";
import nature from "../../Data/Nature";
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
const Nature = () => {
  return (
    <div>
      <Header />
      <div className="nature category">
        {/* <h1>this is the education section</h1> */}
        {nature.map((Element, index) => {
          return (
            <div className="natureCard catCard" id={"nature" + index}>
              <h2 className="Head2" id={"natureHead" + index}>
                {Element.heading}
              </h2>
              <div className="desc" id={"natureDesc" + index}>
                {Element.description}
              </div>
              <div className="concul" id={"natureCon" + index}>
                {Element.conculsion}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Nature;
