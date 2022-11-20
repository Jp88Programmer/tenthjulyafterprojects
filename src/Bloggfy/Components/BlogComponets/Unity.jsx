import React from "react";
import unity from "../../Data/Unity";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
const Unity = () => {
  return (
    <div>
      <Header />
      <div className="unity category">
        {unity.map((Element, index) => {
          return (
            <div className="unityCard catCard" id={"unity" + index}>
              <h2 className="Head2" id={"unityHead" + index}>
                {Element.heading}
              </h2>
              <div className="desc" id={"unityDesc" + index}>
                {Element.description}
              </div>
              <div className="concul" id={"unityCon" + index}>
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

export default Unity;
