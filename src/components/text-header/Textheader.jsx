import React from "react";
import "./text-header.css";
import computer from "../../assets/computer.png";

const TextHeader = () => {
  return (
    <>
    <section
      id="hero"
      className="hero d-flex flex-row justify-content-center align-items-center section__padding" 
      data-aos="fade-up"
      data-aos-delay={600} 
    >
     <div className="row container">
        {/* <div className="d-flex justify-content-center"> */}
         <div className="col-md"> 
           <h1>Front-End Developer</h1>
            <p>Resolving design problems, building smart user interfaces and useful interactions, 
               developing rich web applications and seamless web experiences.</p>
         </div>
         <div className="col-md computer__img">
           <img src={computer} alt="computer" />
         </div>
        </div>
    {/* </div> */}
    </section>

    
    </>
  );
};

export default TextHeader;
