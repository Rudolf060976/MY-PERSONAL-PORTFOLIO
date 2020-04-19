import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const animationOpen = keyframes`

    from {
        transform: translateY(-260px);

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
        transform: translateY(-260px);
    }

`;


const StyledContainer = styled.nav`

    width: 100%;
    padding: 30px 0;

    background-color: ${props => props.theme.colorMainBlueDark2};

    box-shadow: ${props => props.theme.whiteBoxShadow};

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 1100px) {

        padding: 15px 0;

    }

    @media (max-width: 600px) {
        position: relative;
        padding: 0;
        z-index: 1000;
        
        transform: translateY(-260px);     
        animation-name: ${props => props.openMenu ? animationOpen : ( props.closeMenu ? animationClose : null ) };
        animation-duration: .5s; 
        animation-fill-mode: forwards;   
               
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

        transform: scale(1.5);
        opacity: .7;
        filter: blur(2px);

    }

    & li a:hover {

        transform: scale(1.8);
        opacity: 1;
        filter: blur(0);  
        cursor: pointer;
        color: white;   
      
    }

    & li a:active {

        @media (max-width: 600px) {

            transform: scale(1.2);
            background-color: ${props => props.theme.colorMainBlueClear2};

        }

    }
   
`;

const StyledListItem = styled.li`

    display: inline-block;    
    font-family: Rubik, sans-serif, Geneva, Tahoma, Verdana;
    color: ${props => props.theme.colorMainBlueClear2};
    letter-spacing: 1px;

    @media (max-width: 600px) {

        width: 50%;

    }
   
`;

const StyledLink = styled.a`

    display: inline-block;
    width: 100%;
    padding: 5px 10px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .3s linear;
    position: relative;
    
    @media (max-width: 600px) {

        padding: 15px 10px;
        text-align: center;

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
    left: 10px;
    top: 10px;
    display: none;
    color: $Main-Blue-Gray;

    @media (max-width: 600px) {

        display: inline-block;
        padding: 15px 20px;        
        font-size: 2.4rem;        
        z-index: 100;
    }

    &:active {

        border: ${props => props.theme.colorMainBlueClear2} solid 1px;
        border-radius: 5px;

    }

`;





function Menu({ openMenu, handleCloseMenu }) {

    const [closeMenu, setCloseMenu] = useState(false);

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
                    <StyledLink>Home</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink>About Me</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink>Skills</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink>Projects</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink>Contact</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink>Blog</StyledLink>
                </StyledListItem>                
            </StyledList>      
        </StyledContainer>
    );
}

export default Menu;
