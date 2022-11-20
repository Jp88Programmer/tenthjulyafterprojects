import React from "react";
import finance from "../../Data/Finance";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
const Finance = () => {
  return (
    <div>
      <Header />
      <div className="finance category">
        {finance.map((Element, index) => {
          return (
            <div className="financeCard catCard" id={"finance" + index}>
              <h2 className="Head2" id={"financeHead" + index}>
                {Element.heading}
              </h2>
              <div className="desc" id={"financeDesc" + index}>
                {Element.description}
              </div>
              <div className="concul" id={"financeCon" + index}>
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

export default Finance;
