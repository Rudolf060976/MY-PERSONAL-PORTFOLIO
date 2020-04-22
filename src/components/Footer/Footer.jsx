import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.footer`

    width: 100%;
    
    padding: 10px 0 10px 30px;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 2rem;
    
    background-color: ${props => props.theme.colorMainBlueGray};  
    
    color: ${props => props.theme.colorMainBlueDark2};  
`;




function Footer() {
    return (
        <StyledContainer>
             © {new Date().getFullYear()}, Built by Rafael E. Urbina N.       
        </StyledContainer>
    );
}

export default Footer;
