import React from "react";
import "./text-header.css";
import Img from "../../assets/device.png";

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
         <div className="col-md"> 
           <h1>Front-End Developer</h1>
            <p>Resolving design problems, building smart user interfaces and useful interactions, 
               developing rich web applications and seamless web experiences. Strong problem-solving ability, quickly identifying 
               and resolving issues that may arise during development.</p>
            <a href="#contact"><button type="button" class="btn btn-success">Contact Info</button></a>
         </div>
         <div className="col-md computer__img">
           <img src={Img} alt="Img" />
         </div>
        </div>
    </section>

    
    </>
  );
};

export default TextHeader;
