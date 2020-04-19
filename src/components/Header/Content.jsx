import React from 'react';
import styled, { keyframes } from 'styled-components';
import NameAnimated from './NameAnimated';


const azulNeon = keyframes`

    0%, 10%, 15%, 20%, 30%, 35%, 40%, 50%, 55%, 60%, 70%, 75%, 80%, 85%, 90%, 100% {
        text-shadow: 9px 9px 18px #66CAF2, 3px 3px 5px #325A73, -3px -3px 5px #325A73, -9px -9px 27px #66CAF2;
    }

    10%, 15%, 60% {
        text-shadow: none;
    }

`;



const StyledContainer = styled.div`

    width: 100%;    
       
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {

        margin-top: -260px;

    }

`;

const StyledCenter = styled.div`

    width: 50%;
    
    padding: 10px 10px;

    position: relative;

   
   
    @media (max-width: 2200px) {

        width: 60%;

    }

    @media (max-width: 1600px) {

        width: 70%;

    }

    @media (max-width: 1300px) {

        width: 80%;

    }

    @media (max-width: 1000px) {

        width: 90%;

    }

    @media (max-width: 800px) {

        width: 100%;
        padding: 10px 20px;

    }

`;

const StyledTitlesContainer = styled.div`

    position: absolute;
    top: 70%;
    left: 10%;
    width: 80%;


`;

const StyledTitle = styled.h4`

    width: 100%;

    padding: 20px 0;

    text-shadow: 0 0 20px ${props => props.theme.colorMainBlueClear2};
    letter-spacing: 2px;

    font-family: Rubik;

    color: ${props => props.theme.colorMainBlueDark1};

    animation-name: ${azulNeon};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @media (max-width: 800px) {
        
        padding: 10px 0;

    }

   
`;

const StyledComment = styled.h5`

    width: 100%;

    padding: 10px 0;

    color: ${props => props.theme.colorMainBlueGray};

    letter-spacing: 2px;

    line-height: 3.2rem;

    font-size: 2rem;
  

`;


function Content({ siteMetadata }) {
    return (
        <StyledContainer>
            <StyledCenter>
                <NameAnimated />  
                <StyledTitlesContainer>
                    <StyledTitle>{ siteMetadata.subtitle }</StyledTitle>
                    <StyledComment>{ siteMetadata.description }</StyledComment>       
                </StyledTitlesContainer>                           
            </StyledCenter>
        </StyledContainer>
    );
}

export default Content;
