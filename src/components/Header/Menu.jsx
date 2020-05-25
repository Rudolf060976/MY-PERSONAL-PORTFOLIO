import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, Events, scrollSpy } from 'react-scroll';

import { rgba } from 'polished';

import { Link as LinkG } from 'gatsby';


const animationOpen = keyframes`

    from {
        transform: translateY(-500px);

    }

    to {
        transform: translateY(0);
    }

`;

const animationClose = keyframes`

    from {
        transform: translateY(0);

    }

    to {
        transform: translateY(-500px);
    }

`;


const StyledContainer = styled.nav`

    width: 100%;
    padding: 15px 0;

    background-color: ${props => rgba(props.theme.colorMainBlueDark2,.8)};

    box-shadow: ${props => props.theme.whiteBoxShadow};

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    position: fixed;

    top: 0;
    left: 0;

    z-index: 5000;

    @media (max-width: 1100px) {

        padding: 15px 0;

    }

    @media (max-width: 600px) {
        position: absolute;
        top: 0;
        left:0;
        padding: 0;
        z-index: 1000;
        background-color: ${props => rgba(props.theme.colorMainBlueDark2,.9)};
        transform: translateY(-500px);     
        animation-name: ${props => props.openMenu ? animationOpen : ( props.closeMenu ? animationClose : null ) };
        animation-duration: .5s; 
        animation-fill-mode: forwards; 
        padding: 50px 0 40px 0;  
               
    }   

`;

const StyledList = styled.ul`

    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style-type: none;
   
    
    @media (max-width: 2200px) {

        width: 60%;

    }

    @media (max-width: 1500px) {

        width: 70%;

    }

    @media (max-width: 1100px) {

        width: 90%;

    }

    @media (max-width: 600px) {

        width: 50%;

        flex-flow: column nowrap;
        

    }

    &:hover li a {

        transform: scale(1.3);
        opacity: .7;
        filter: blur(2px);

         @media (max-width: 600px) {

            transform: scale(1.2);                    

        }

    }

    & li a:hover {

        transform: scale(1.5);
        opacity: 1;
        filter: blur(0);  
        cursor: pointer;
        color: white;  

        @media (max-width: 600px) {

            transform: scale(1.3); 
                   

        } 
      
    }

    & li a:active {

        @media (max-width: 600px) {

            transform: scale(1.2);
                    

            

        }

    }
   
`;

const StyledListItem = styled.li`

    display: inline-block;    
    font-family: Rubik, sans-serif, Geneva, Tahoma, Verdana;
    color: ${props => props.theme.colorMainBlueClear2};
    letter-spacing: 1px;

    @media (max-width: 600px) {

        width: 80%;
        padding: 7px 0;        
        
    }
   
`;

const StyledGatsbyLink = styled(LinkG)`
 
    display: inline-block;
    width: 100%;
    padding: 5px 10px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .3s linear;
    position: relative;
    font-family: Rubik, sans-serif, Geneva, Tahoma, Verdana;
    color: ${props => props.theme.colorMainBlueClear2};
    letter-spacing: 1px;

    font-size: 1.4rem;
    
    @media (max-width: 600px) {

        padding: 15px 10px;
        text-align: center;
        font-size: 2.6rem;
        background-color: ${props => props.theme.colorMainBlueClear1};  
        color: ${props => props.theme.colorMainWhite};
        border-radius: 5px;
        box-shadow: 0px 0px 10px white;

    }
    
    &::before {

        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colorMainBlueClear1};
        transition: all .2s linear;
        transform-origin: left;
        transform: scaleX(0); 
        z-index: -1;       
    }

    &:hover::before {
        transform: scaleX(1); 

        @media (max-width: 600px) {

            transform: scaleX(0); 

        }
    }


`;

const StyledLink = styled(Link)`

    display: inline-block;
    width: 100%;
    padding: 5px 10px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .3s linear;
    position: relative;

    font-size: 1.4rem;
    
    @media (max-width: 600px) {

        padding: 15px 10px;
        text-align: center;
        font-size: 2.6rem;
        background-color: ${props => props.theme.colorMainBlueClear1};  
        color: ${props => props.theme.colorMainWhite};
        border-radius: 5px;
        box-shadow: 0px 0px 10px white;
    }
    
    &::before {

        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colorMainBlueClear1};
        transition: all .2s linear;
        transform-origin: left;
        transform: scaleX(0); 
        z-index: -1;       
    }

    &:hover::before {
        transform: scaleX(1); 

        @media (max-width: 600px) {

            transform: scaleX(0); 

        }
    }


`;

const StyledCloseButton = styled.span`

    position: absolute;
    right: 5%;
    top: 3%;
    display: none;
    color: ${props => props.theme.colorMainBlueGray };    
    transition: all .3s linear;

    @media (max-width: 600px) {

        display: inline-block;        
        padding: 15px 20px;        
        font-size: 2.4rem;        
        z-index: 100;
        font-size: 22px;
    }



    &:active {

        transform: scale(1.6) rotate(90deg);

    }

`;





function Menu({ openMenu, handleCloseMenu }) {

    const [closeMenu, setCloseMenu] = useState(false);
  

    useEffect(() => {
        
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
          });
       
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
          });
       
        scrollSpy.update();


        return () => {
            
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');

        }
    },[]);


    const handleCloseClick = () => {

        setCloseMenu(true);

        handleCloseMenu();

        setTimeout(() => {
            
            setCloseMenu(false);

        }, 1000);

    };

    
    return (
        <StyledContainer openMenu={openMenu} closeMenu={closeMenu}>
            <StyledCloseButton onClick={(e) => handleCloseClick()}>
                <FontAwesomeIcon icon="times" />
            </StyledCloseButton>
            <StyledList>
                <StyledListItem>
                    <StyledLink to="masthead" smooth={true} duration={600} onClick={(e) => handleCloseClick()}>Home</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="about-scroll-point" smooth={true} duration={700} onClick={(e) => handleCloseClick()}>About Me</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="skills-scroll-point" smooth={true} duration={800} onClick={(e) => handleCloseClick()}>Skills</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="projects-scroll-point" smooth={true} duration={1000} onClick={(e) => handleCloseClick()}>Projects</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="contact-scroll-point" smooth={true} duration={1200} onClick={(e) => handleCloseClick()}>Contact</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledGatsbyLink to="/blog" onClick={(e) => handleCloseClick()}>Blog</StyledGatsbyLink>
                </StyledListItem>                
            </StyledList>      
        </StyledContainer>
    );
}

export default Menu;
