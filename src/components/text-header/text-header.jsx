import React from "react";
import "./text-header.css";
import Button from "../button/button";

const TextHeader = ({ title, copy, buttonText }) => {
  return (
    <section
      id="hero"
      className="hero d-flex flex-column justify-content-center align-items-center"
      data-aos="fade"
      data-aos-delay={1500}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>{title}</h2>
            <p>{copy}</p>
            <Button buttonText={buttonText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextHeader;
