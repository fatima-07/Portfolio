import React from 'react';
import Image from '../../assets/Fatima.jpeg';
import JSlogo from '../../assets/java-script-logo.png';
import Rlogo from '../../assets/atom.png';
import Blogo from '../../assets/strap.png';
import Nlogo from '../../assets/nodejs.png';
import Alogo from '../../assets/api.png';
import './about.css'

const About = () => {
  return (
    <>
    <section className="ab__header" id="about">
      <div className='d-flex justify-content-center pb-4'><h1>Skills & Experience</h1></div>
      <div className='row container'>
      <div className='col-xl-4'>
      <img src={Image} alt='img'/>
      <h2 data-aos="zoom-in"
       data-aos-delay={200}>Hi, I'm Fatima</h2>
      </div>

      <div className='col-xl-8'>
        <p>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p><br/>
       <p className='d-flex justify-content-center'>Professionally connected with the web development industry. 
           The main area of expertise is front end development (client side of the web).
           HTML, CSS, JS, building small and medium web applications with different frameworks, custom plugins, 
           features, animations, and coding interactive layouts. I'm a certified AWS Cloud Practitioner 
           and I strive to continuously improve my skills with the latest technologies. </p>
           <p>Visit my <a href="https://www.linkedin.com/in/fatima-hafeez-39a196273/" target="_blank"> LinkedIn </a> for more details.</p><br/>
           <div className='logo_img grid-container' data-aos="flip-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000">
           <p><img src={JSlogo} alt="jslogo"/> JavaScript </p>
           <p><img src={Rlogo} alt="rlogo"/> <p>React . JS</p></p>
           <p><img src={Blogo} alt="blogo"/> Bootstrap</p>
           <p><img src={Nlogo} alt="nlogo"/> <p>Node . JS</p></p>
           <p><img src={Alogo} alt="jslogo"/><p>Rest API</p></p>
           </div>
      </div>
      </div>
    </section>
</>
  )
}
export default About;