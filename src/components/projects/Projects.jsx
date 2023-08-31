import React from 'react';
import './projects.css';
import Image from '../../assets/computer.png';
import AI from '../../assets/AI.png';

const Projects = () => {
  return (
    <>
    <div className="project" id="projects">
    <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <div className="row container ">
        <div className="col-xl-6">
        <h1>Artificial Intellignce Website</h1>
        <p>The website is a documentation of AI <br/> client's
         business. If you want to see more examples of my work than<br />the ones
          showcased in this site, please contact me!</p> 
          <p><a href="">View the code {'>'}</a></p>
         <p><a href="https://artificial-intelligence-n91s8kkuj-fatima-07.vercel.app/" target='_blank'>View the app {'>'}</a></p>
          </div>

          <div className="col-xl-6"  data-aos="flip-right">
        <img src={AI} alt="Artificial-Intelligence"/>
        </div>
      </div>
      </div>

    <div className="carousel-item" data-bs-interval="10000">
    <div className="row container ">
        <div className="col-xl-6" data-aos="flip-up">
        <img src={Image} alt="Img"/>
        </div>
        <div className="col-xl-6">
        <h1>Portfolio & Previous Projects</h1>
        <p>I have built various different projects to fit different aspects of the <br/> client's
         business. If you want to see more examples of my work than<br />the ones
         showcased in this site, please contact me!</p>
         <p><a href="">View the code {'>'}</a></p>
         <p><a href="">View the app {'>'}</a></p>
          </div>
      </div>
    </div>

    <div className="carousel-item">
    <div className="row container ">
        <div className="col-xl-6" data-aos="flip-left">
        <img src={Image} alt="Img"/>
        </div>
        <div className="col-xl-6">
        <h1>Portfolio & Previous Projects</h1>
        <p>I have built various different projects to fit different aspects of the <br/> client's
         business. If you want to see more examples of my work than<br />the ones
         showcased in this site, please contact me!</p> <br/>
         <p><a href="">View the code {'>'}</a></p>
         <p><a href="">View the app {'>'}</a></p>
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
