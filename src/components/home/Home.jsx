import React from 'react';
import {useEffect} from 'react';
import Logo from '../../assets/logo.png';
import TextHeader from '../text-header/Textheader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); 

  return (
    <div id="home">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" >
     <div className="container-fluid">
     <div className="navbar__header-icon" id="home"
         data-aos="fade-right"
         data-aos-delay={600}> 
         <a className="navbar-brand" >
         <img src={Logo} alt="logo" /> 
         <h1>Portfolio</h1>
         </a>
     </div> 
      <div className="nav__links collapse navbar-collapse justify-content-end" id="navbarNav" > 
        <ul className="navbar-nav ">
        <li class="nav-item">
         <a className="nav-link" href="#home">Home</a>
        </li>
        <li class="nav-item">
         <a className="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
         <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
         <a className="nav-link" href="#contact">Contact</a>
        </li>
         </ul>
         </div>
  </div>
</nav>

<TextHeader />
</div>
  )
} 
export default Home;