import React, { useState } from 'react';
import et from '../assets/et.png';
import cancelIcon from '../assets/cancel_icon.png';
import menuIcon from '../assets/menu_icon.png';

const Navigation = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const showMenu = () => {
    setMenuVisibility(true);
  };

  const hideMenu = () => {
    setMenuVisibility(false);
  };

  return (
    <nav>
      <img src={et} alt="" className="logo" />
      <div className={`nav-links ${isMenuVisible ? 'show' : 'hide'}`} id="navLinks">
        <img src={cancelIcon} alt="cancel icon" className="icon" onClick={hideMenu} />
        <ul>
          <li><a href="#persona">Persona</a></li>
          <li><a href="#UJmap">UJ map</a></li>
          <li><a href="#sitemap">Sitemap</a></li>
          <li><a href="#low-fi">Low-Fidelity Prototype</a></li>
          <li><a href="#usabilty-findings">Usability Finding</a></li>
          <li><a href="#high-fi">High-Fidelity Prototype</a></li>
        </ul>
      </div>
      <img src={menuIcon} alt="hamburger menu" className="icon" onClick={showMenu} />
    </nav>
  );
}

export default Navigation;
