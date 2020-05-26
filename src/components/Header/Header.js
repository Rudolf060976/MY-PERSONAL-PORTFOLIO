import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Menu from "./Menu";
import Content from "./Content";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileToolbox from "./MobileToolbox/MobileToolbox";

const BackgroundSection = ({ className, children, id }) => {

  const data = useStaticQuery(graphql`
      query {
          desktop: file(relativePath: { eq: "HEADER_BACK.jpg" }) {
              childImageSharp {
                  fluid(quality:90, maxWidth: 2600) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }    
  `);
  

  const imageData = data.desktop.childImageSharp.fluid;

  return (
      <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={'#000000'} id={id}>
          {children}
      </BackgroundImage>
  );
};

const StyledContainer = styled(BackgroundSection)`


    width: 100%;
       
    color: white;
       
    background-position: center center;

    background-size: cover;

    background-repeat: no-repeat;

    height: 100vh;

    min-height: 100vh;
       
    border-bottom: 1px solid ${props => props.theme.colorMainBlueClear1};

    display: flex;

    justify-content: center;

    align-items: center;

    z-index: 100;

        
`;



const Header = ({ siteMetadata }) => {  

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenuClick = (e) => {

    setOpenMenu(true);

  };

  const handleCloseMenuClick = () => {


    setOpenMenu(false);

  };


  const StyledMobileIcon = styled.span`
  
    position: absolute;
    left: 20px;
    top: 20px;
    display: none;
    color: $mainWhite;    
    background-color: ${props => props.theme.colorMainBlueClear1};
    border-radius: 5px;

    box-shadow: 0px 0px 5px white;;

    &:active {
        
        border-radius: 5px;       
        box-shadow: none;

    }

    @media (max-width: 600px) {

        display: inline-block;
        padding: 10px;        
        @include fontSize(2.2); 
        z-index: 10000;
     
    }

    & span {

        margin-left: 10px;
        font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;
    }  
  
  `;


  
  const menuIcon = () => (
    <StyledMobileIcon onClick={handleOpenMenuClick}>
        <FontAwesomeIcon icon="bars" size="lg"/><span>Menu</span>
    </StyledMobileIcon> 
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
    <StyledContainer id="masthead">
      { openMenu ? null : menuIcon() }    
      <Menu openMenu={openMenu} handleCloseMenu={handleCloseMenuClick} />
      <Content siteMetadata={siteMetadata} />  
      <MobileToolbox itemsData={toolboxItemsData} />    
    </StyledContainer>
  );
  
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
