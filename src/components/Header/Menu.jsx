import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.nav`

    width: 100%;
    padding: 30px 0;

    background-color: ${props => props.theme.colorMainBlueDark2};

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

`;

const StyledList = styled.ul`

    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style-type: none;    

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
   
`;

const StyledListItem = styled.li`

    display: inline-block;    
    font-family: Rubik, sans-serif, Geneva, Tahoma, Verdana;
    color: ${props => props.theme.colorMainBlueClear2};
    letter-spacing: 1px;
   
`;

const StyledLink = styled.a`

    display: inline-block;
    width: 100%;
    padding: 5px 10px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .3s linear;
    position: relative;
    
    
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
    }

`;





function Menu() {
    return (
        <StyledContainer>
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
