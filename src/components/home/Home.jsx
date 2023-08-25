import React, { useEffect, useState } from 'react';
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
