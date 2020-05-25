import PropTypes from "prop-types"
import React, { useState } from "react"
import "./Header.scss";

import Menu from "./Menu";
import Content from "./Content";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileToolbox from "./MobileToolbox/MobileToolbox";

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

  const toolboxItemsData = [
    {
        iconName: "home",
        iconDescription: "Home",
        linkTo: "masthead"
    },
    {
        iconName: "id-card",
        iconDescription: "About Me",
        linkTo: "about-scroll-point"

    },
    {
        iconName: "briefcase",
        iconDescription: "My Work",
        linkTo: "projects-scroll-point"

    },
    {
        iconName: "phone",
        iconDescription: "Contact",
        linkTo: "contact-scroll-point"
    }  
  ];

  return (
    <header id="masthead">
      { openMenu ? null : menuIcon() }    
      <Menu openMenu={openMenu} handleCloseMenu={handleCloseMenuClick} />
      <Content siteMetadata={siteMetadata} />  
      <MobileToolbox itemsData={toolboxItemsData} />    
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
