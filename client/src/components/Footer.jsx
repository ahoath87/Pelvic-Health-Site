import React from 'react';
import './css/footer.css';
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoTiktok,
  IoLogoFacebook,
  IoLogoInstagram,
} from 'react-icons/io5';
import { IconContext } from 'react-icons';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footerlist'>
        <p>FAQ</p>
        <p>QUIZ</p>
        <p>CONTACT</p>
        <p>FIND HELP</p>
      </div>

      <div className='footericons'>
        <IconContext.Provider value={{ className: 'react-icons', size: '2em' }}>
          <div>
            <IoLogoLinkedin />
          </div>
          <div>
            <IoLogoTwitter />
          </div>
          <div>
            <IoLogoTiktok />
          </div>
          <div>
            <IoLogoFacebook />
          </div>
          <div>
            <IoLogoInstagram />
          </div>
        </IconContext.Provider>
      </div>

      <div className='copyright'>
        <p>SITE BY ASHLEY HOATH</p>
        <p>COPYRIGHT 2023</p>
        <p>TERMS AND CONDITIONS | PRIVACY | IMPORTANT</p>
      </div>
    </div>
  );
};

export default Footer;
