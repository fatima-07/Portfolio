import React from "react";
import "./text-header.css";
import Button from "../button/Button";

const TextHeader = () => {
  return (
    <section
      id="hero"
      className="hero d-flex flex-column justify-content-center align-items-center" 
      data-aos="fade-up"
      data-aos-delay={600} 
    >
     <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center"> 
           <h1>Front-End Developer</h1>
            <p>Resolving design problems, building smart user interfaces and useful interactions, 
               developing rich web applications and seamless web experiences.</p>
            <Button />
         </div>
        </div>
      </div>
    </section>
  );
};

export default TextHeader;
