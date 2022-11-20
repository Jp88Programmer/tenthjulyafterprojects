import React from "react";
import arts from "../../Data/Arts";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
const Arts = () => {
  return (
    <div>
      <Header />
      <div className="arts category">
        {arts.map((Element, index) => {
          return (
            <div className="artCard catCard" id={"art" + index}>
              <h2 className="Head2" id={"artHead" + index}>
                {Element.heading}
              </h2>
              <div className="desc" id={"artDesc" + index}>
                {Element.description}
              </div>
              <div className="concul" id={"artCon" + index}>
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

export default Arts;
