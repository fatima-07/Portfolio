import React from "react";
import "./text-header.css";

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
            <a href="contact.html" className="btn-get-started">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextHeader;
