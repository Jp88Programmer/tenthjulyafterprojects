import React from "react";
import edcation from "../../Data/Education";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
const Education = () => {
  return (
    <div>
      <Header />
      <div className="education category">
        {edcation.map((Element, index) => {
          return (
            <div className="eduCard catCard" id={"edu" + index}>
              <h2 className="Head2" id={"eduHead" + index}>
                {Element.heading}
              </h2>
              <div className="desc" id={"eduDesc" + index}>
                {Element.description}
              </div>
              <div className="concul" id={"eduCon" + index}>
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

export default Education;
