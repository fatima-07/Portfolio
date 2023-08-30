/*import React, { useEffect, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import TextHeader from '../text-header/Textheader';
import Icon from '../../assets/Icon.png';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Menu = () => {
  return (
    <>
    <p><a href="#Home"> Home </a></p>
    <p><a href="#About"> About </a></p>
    <p><a href="#Projects"> Projects </a></p>
    <p><a href="#Contact"> Contact </a></p>       
    </>
  )
}

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); 

return (
  <div id="Home">
    <div className="navbar__header fixed-top"> 
     <div className="navbar__header-links"> 
        <div className="navbar__header-icon"
         data-aos="fade-right"
         data-aos-delay={600}> 
         <a class="navbar-brand" href="#Home">
         <img src={Icon} alt="icon" /> 
         <h1>Portfolio</h1>
         </a>
       </div> 

        <div className="navbar__header-links__container">
          <Menu />
        </div>
      </div>

      <div className="navbar__header-menu">
        <div className='align__menu'>
        { toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        </div>
        { toggleMenu && ( 
          <div className="navbar__header-menu__container scale-up-center">
            <div className="navbar__header-menu__container-links">
             <Menu />
            </div>
          </div>
         )}
      </div>     
    </div>
    <TextHeader />
    </div>
  )
}
export default Home;

*/

import React from 'react';
import {useEffect} from 'react';
import Icon from '../../assets/Icon.png';
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
    <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="home">
     <div className="container-fluid">
     <div className="navbar__header-icon"
         data-aos="fade-right"
         data-aos-delay={600}> 
         <a className="navbar-brand" href="#home">
         <img src={Icon} alt="icon" /> 
         <h1>Portfolio</h1>
         </a>
     </div> 
      <div className="nav__links collapse navbar-collapse justify-content-end" > 
        <ul className="navbar-nav ">
        <li class="nav-item">
         <a className="nav-link" aria-current="page" href="#home">Home</a>
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
</>
  )
} 
export default Home;

/*

      <nav className="navbar__header navbar navbar-expand-lg fixed-top gradient__bg ">
        <div className="Container">
          <Navbar.Brand href="#home">
            <img
              src={Icon} alt="Icon"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <h1>Portfolio</h1>
          </Navbar.Brand>  
        <div className="justify-content-end" id="collapsibleNavbar" activekey="/home">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
  
      </div>
      </nav>
    </>
  )
}

export default Home; */


