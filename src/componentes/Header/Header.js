import React from 'react';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
     <img className='imageHeader' src={Logo} alt="logo" />
      <nav>
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/novo-video" className="nav-link">NOVO VIDEO</Link>
      </nav>
    </header>
  );
}

export default Header;