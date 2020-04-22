import PropTypes from "prop-types"
import React, { useState } from "react"
import "./Header.scss";

import Menu from "./Menu";
import Content from "./Content";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ siteMetadata }) => {  

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenuClick = (e) => {

    setOpenMenu(true);

  };

  const handleCloseMenuClick = () => {


    setOpenMenu(false);

  };

  
  const menuIcon = () => (
    <span id="mobil-menu-icon" onClick={handleOpenMenuClick}>
        <FontAwesomeIcon icon="bars" size="lg"/><span>Menu</span>
    </span> 
  );

  return (
    <header id="masthead">
      { openMenu ? null : menuIcon() }    
      <Menu openMenu={openMenu} handleCloseMenu={handleCloseMenuClick} />
      <Content siteMetadata={siteMetadata} />
      <div id="header-animation-area">
        <ul id="header-box-animation-area" >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>               
        </ul>  
      </div>  
    </header>
  );
  
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
