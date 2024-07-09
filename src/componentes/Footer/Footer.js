import React from 'react';
import Logo from '../../assets/Logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
       <img className='imageFooter' src={Logo} alt="logo" />
    </footer>
  );
}

export default Footer;
