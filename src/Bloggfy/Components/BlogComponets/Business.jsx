import React from "react";
import business from "../../Data/Business";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
const Business = () => {
  return (
    <div>
      <Header />
      <div className="business category">
        {business.map((Element, index) => {
          return (
            <div className="businessCard catCard" id={"business" + index}>
              <h2 className="Head2" id={"businessHead" + index}>
                {Element.heading}
              </h2>
              <div className="desc" id={"businessDesc" + index}>
                {Element.description}
              </div>
              <div className="concul" id={"businessCon" + index}>
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

export default Business;
