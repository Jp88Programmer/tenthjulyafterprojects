import React from "react";
import technology from "../../Data/Technology";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
const Technology = () => {
  return (
    <div>
      <Header />
      <div className="technology category">
        {technology.map((Element, index) => {
          return (
            <div className="techCard catCard" id={"tech" + index}>
              <h2 className="Head2" id={"techHead" + index}>
                {Element.heading}
              </h2>
              <div className="desc" id={"techDesc" + index}>
                {Element.description}
              </div>
              <div className="concul" id={"techCon" + index}>
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

export default Technology;
