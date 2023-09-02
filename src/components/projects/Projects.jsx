import React from 'react';
import Image from '../../assets/computer.png';
import AI from '../../assets/AI.png';
import BS from '../../assets/Bites-Sips.png';
import BitesSips from '../../assets/Bites-Sips.png';
import './projects.css';

const Projects = () => {
  return (
    <>
    <div className="project" id="projects">
      <div className="pr-header text-center"><h1>Projects</h1></div>
    <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></li>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <div className="row container ">
        <div className="col-xl-6">
        <h1>Artificial Intellignce Website</h1>
        <p>The website is a documentation of AI. For a AI research and deployment company.
         The mission is to ensure that artificial intelligence benefits all of humanity. Share your email and other details to 
         get daily updates about AI.</p>
         <p>Built with: React, Javascript, Bootstrap, HTML, CSS, Node Package Manager(NPM),
           GitHub and other trending industry level tools.</p> <br/> <br/> <br/>
          <p><a href="https://github.com/fatima-07/Artificial-Intelligence" target="_blank">View the code {'>'}</a>{"   "}</p>
          <p><a href="https://artificial-intelligence-n91s8kkuj-fatima-07.vercel.app/" target='_blank'>View the app {'>'}</a></p>
          </div>
          <div className="col-xl-6"  data-aos="flip-right">
        <img src={AI} alt="Artificial-Intelligence"/>
        </div>
      </div>
      </div>


      <div className="carousel-item" data-bs-interval="10000">
    <div className="row container ">
        <div className="col-xl-6">
        <h1>Bites & Sips Restaurant Website</h1>
        <p>This restaurant website helps to build the brand. It lets people <br/>
        find you online. People look online for contact details and food <br/>
         ordering details. Let your clients get the view of your restaurant today!</p>
         <p>Built with: Angular, Typescript, Bootstrap, HTML, CSS, Node Package Manager(NPM),
           GitHub and other styling tools.</p> <br/> <br/> <br/>
          <p><a href="https://github.com/fatima-07/Bites---Sips" target="_blank">View the code {'>'}</a>{"   "}</p>
          <p><a href="https://bites-sips.vercel.app/" target="_blank">View the app {'>'}</a></p>
          </div>
          <div className="col-xl-6"  data-aos="flip-right">
        <img src={BS} alt="Bites & Sips"/>
        </div>
      </div>
      </div>

   

    <div className="carousel-item">
    <div className="row container third-img ">
        <div className="col-xl-6" data-aos="flip-left">
        <img src={Image} alt="Img"/>
        </div>
        <div className="col-xl-6">
        <h1>Previous Projects</h1>
        <p>I have built various different projects to fit different aspects of the <br/> client's
         business. If you want to see more examples of my work than<br />the ones
         showcased in this site, please contact me!</p><br /> 
         <p>For this website's github repository, click the link below!</p>
         <p>Built with: React, Javascript, Bootstrap, HTML, CSS, Yarn Package Manager(Yarn),
           GitHub etc.</p>
         <p><a href="https://github.com/fatima-07/Portfolio" target="_blank">View the code {'>'}</a>{"   "}</p>
          <p><a href="#home" target="_self">View the app {'>'}</a></p>
          </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
 </> 
  )
}

export default Projects;
