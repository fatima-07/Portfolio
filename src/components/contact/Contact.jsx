import React from 'react';
import Footer from '../footer/footer' ;
import Image from '../../assets/earth.gif';
import Call from '../../assets/telephone.png';
import './contact.css';

const Contact = () => {
  return (
  <>
    <div className='contact__body' id="contact">
      <div className='row container'>
      <div className='col-lg-6'>
      <img src={Image} alt='img'/>
      </div>
      <div className='contact__text col-lg-6 d-block justify-content-end'>
        <p>What would you do if you had a software</p>
        <p>developer available at your fingertips?</p> <br/>
        <p>Want to start new project? Or just say hey.</p>
        <p>You can also follow me on 
          LinkedIn.</p><br/>
        <h2>fatimahafeez.mh@gmail.com</h2>
      </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Contact;
