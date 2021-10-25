import * as React from 'react';
import '../scss/index.scss';

const TopNav = (props) => {
  function handleNavClick(e) {
    window.location.href = e;
    console.log('You clicked:', e);
  }

  return (
    <div id="nav-bar">
      <div id="menu">
        <button type="button" className="menu-button" value="Home" onClick={() => handleNavClick('#home')}>
          HOME
        </button>
        <button type="button" className="menu-button" value="About" onClick={() => handleNavClick('#about')}>
          ABOUT
        </button>
        <button type="button" className="menu-button" value="Company Details" onClick={() => handleNavClick('#company-details')}>
          COMPANY DETAILS
        </button>
        <button type="button" className="menu-button" value="The Planner" onClick={() => handleNavClick('#the-planner')}>
          THE PLANNER
        </button>
        <button type="button" className="menu-button" value="Contact Us" onClick={() => handleNavClick('#contact-us')}>
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default TopNav;
