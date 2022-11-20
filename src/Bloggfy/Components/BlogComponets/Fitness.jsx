import React from "react";
import fitness from "../../Data/Fitness";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
const Fitness = () => {
  return (
    <div>
      <Header />
      <div className="fitness category">
        {fitness.map((Element, index) => {
          return (
            <div className="fitnessCard catCard" id={"fitness" + index}>
              <h2 className="Head2" id={"fitnessHead" + index}>
                {Element.heading}
              </h2>
              <div className="desc" id={"fitnessDesc" + index}>
                {Element.description}
              </div>
              <div className="concul" id={"fitnessCon" + index}>
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

export default Fitness;
