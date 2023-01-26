import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./CompCss/About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="blogpedia">
        <h2>About Blogpedia</h2>
        <div className="blogpediaDescription">
          <p className="para">
            You Know wikipedia Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, excepturi ut! Iusto facere laboriosam,
            quibusdam impedit, suscipit ratione nihil itaque quisquam id ab
            labore unde sequi alias illum deleniti eaque. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex aliquam natus dicta dolor eos
            soluta minima et consectetur illum commodi saepe error assumenda
            sunt, est rem, excepturi, quos inventore hic.
          </p>

          <p className="para">
            You Know wikipedia Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, excepturi ut! Iusto facere laboriosam,
            quibusdam impedit, suscipit ratione nihil itaque quisquam id ab
            labore unde sequi alias illum deleniti eaque.
          </p>
          <p className="para">
            You Know wikipedia Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, excepturi ut! Iusto facere laboriosam,
            quibusdam impedit, suscipit ratione nihil itaque quisquam id ab
            labore unde sequi alias illum deleniti eaque.
          </p>
          <p className="para">
            You Know wikipedia Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, excepturi ut! Iusto facere laboriosam,
            quibusdam impedit, suscipit ratione nihil itaque quisquam id ab
            labore unde sequi alias illum deleniti eaque.
          </p>
        </div>

        <div className="developer">
          <span className="head2">Hello</span>
          <span>
            My name is Jayendra Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Et dolorum sapiente eos excepturi molestias,
            blanditiis quo voluptates eum deserunt quidem suscipit possimus,
            aspernatur tempore maxime perferendis illo in tenetur voluptate.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
