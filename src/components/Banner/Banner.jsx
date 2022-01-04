import React from "react";
import "./Banner.css";
import Ami from "../../img/iam.jpg";
const Banner = () => {
  return (
    <section className="banner-section">
      <div className="content">
        <div className="img">
          <img style={{ width: "250px" }} src={Ami} alt="" />
        </div>
        <div className="about">
          <h3>About Me</h3>
          <p>
            I am Ashraful Islam i like to do coding and I love <br /> to do
            something new with coding.
          </p>
          <a href="#" className="link ">
            Resume
          </a>
          <a href="#" className="bg">
            Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
