import React, { useEffect, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import TextHeader from '../text-header/Textheader';
import icon from '../../assets/Icon.png';
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
    <div className="navbar__header">
      <div className="navbar__header-links">
        <div className="navbar__header-icon" 
         data-aos="fade-right"
         data-aos-delay={600}> 
          <img src={icon} alt="icon" />
          <h1>Portfolio</h1>
        </div>

        <div className="navbar__header-links__container">
          <Menu />
        </div>
      </div>

      <div className="navbar__header-menu ">
        { toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
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
