import React from 'react';
import Image from '../../assets/computer.png';
import AI from '../../assets/AI.png';
import BS from '../../assets/Bites-Sips.png';
import './projects.css';

const Projects = () => {
  return (
    <>
    <div className="project" id="projects">
      <div className="pr-header text-center container"><h1>Projects</h1>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span aria-hidden="true"></span>
    <span><span>{" "}</span>{"<<"}Prev</span>
  </button>
  <button className="btn-2 carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span aria-hidden="true"></span>
    <span>Next{">>"}<span>{" "}</span><span>{" "}</span><span>{" "}</span></span>
  </button>
  </div>
    <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></li>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <div className="row container-fluid ">
        <div className="col-xl-6">
        <h1>Artificial Intellignce Website</h1>
        <p>The website is a documentation of AI. For an AI research and deployment company.
         The mission is to ensure that artificial intelligence benefits all of humanity. Share your email and other details to 
         get daily updates about AI.</p>
         <p>Built with: React, React Hooks, React-Icons, JavaScript, HTML, CSS, Node Package Manager(NPM),
           GitHub, cloud platform deployment services - Vercel and other trending industry level tools. <a 
           href="https://github.com/fatima-07/Artificial-Intelligence" target="_blank">View code! </a><span>{" "}</span><span>{"   "}</span>
           <a href="https://artificial-intelligence-n91s8kkuj-fatima-07.vercel.app/" target='_blank'>View app! </a></p>
          <p>(Swipe Next Project {">>"})</p>
          </div>
          <div className="col-xl-6"  data-aos="flip-right">
        <img src={AI} alt="Artificial-Intelligence"/>
        </div>
      </div>
      </div>

    <div className="carousel-item" data-bs-interval="10000">
    <div className="row container-fluid ">
        <div className="carousel-header col-xl-6">
        <h1>Bites & Sips Restaurant Website</h1>
    
        <p>This restaurant website helps to build the brand. It lets people 
        find restaurant online. People can look online for contact details and food 
         ordering details. Let the clients get the view of the restaurant today!</p>
         <p>Built with: Angular, Typescript, Bootstrap, HTML, CSS, Node Package Manager(NPM),
           GitHub, Vercel etc. 
           <a href="https://github.com/fatima-07/Bites---Sips" target="_blank"> View code! </a><span>{" "}</span> <span>{" "}</span>
           <a href="https://bites-sips.vercel.app/" target="_blank"> View app! </a></p> 
           <p>(Swipe Next Project {">>"})</p>
          </div>
          <div className="col-xl-6"  data-aos="flip-right">
        <img src={BS} alt="Bites & Sips"/>
        </div>
      </div>
      </div>

   

    <div className="carousel-item">
    <div className="row container-fluid third-img ">
        <div className="col-xl-6" data-aos="flip-left">
        <img src={Image} alt="Img"/>
        </div>
        <div className="col-xl-6">
        <h1>Previous Projects</h1>
        <p>I have built various different projects to fit different aspects of the client's
         business. If you want to see more examples of my work than the ones
         showcased in this site, please contact me!</p><br /> 
         <p>For this website's github repository, click the link below!</p>
         <p>Built with: React, React Hooks, Javascript, Bootstrap, HTML, CSS, Yarn Package Manager(Yarn),
           GitHub, Vercel etc. <a href="https://github.com/fatima-07/Portfolio" target="_blank">View code! </a><span>{" "}</span> <span>{" "}</span>
          <a href="#home" target="_self">View app!</a></p>
         
          </div>
      </div>
    </div>
  </div>
  
</div>
</div>
 </> 
  )
}

export default Projects;
