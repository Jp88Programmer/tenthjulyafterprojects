import React from "react";
import social from "../../Data/Social";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
const Social = () => {
  return (
    <>
      <div>
        <Header />
        <div className="social category">
          {social.map((Element, index) => {
            return (
              <div className="socialCard catCard" id={"social" + index}>
                <h2 className="Head2" id={"socialHead" + index}>
                  {Element.heading}
                </h2>
                <div className="desc" id={"socialDesc" + index}>
                  {Element.description}
                </div>
                <div className="concul" id={"socialCon" + index}>
                  {Element.conculsion}
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Social;
