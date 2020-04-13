import React from 'react';
import styled, { keyframes } from 'styled-components';
import smokeVideo from '../../videos/smoke.mp4';

const animate = keyframes`

    from {
        opacity: 0;
        transform: rotateY(90deg);
        filter: blur(10px);
    }

    to {
        opacity: 1;
        transform: rotateY(0deg);
        filter: blur(0);
    }

`;

const StyledContainer = styled.div`

    padding: 30px 0;
    position: relative;
   
    &::before {

        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right,#66CAF2,#C1D0D9,#468BA6,#C1D0D9);
        mix-blend-mode: color;
        pointer-events: none;

    }


`;

const StyledVideo = styled.video`
    
    opacity: 1; 
    object-fit: cover;
    width: 100%;
    
`;

const StyledName = styled.h1`

    
    position: absolute;
    top: 50%;    
    transform: translateY(-50%);
    width: 100%;    
    font-family: sans-serif, Verdana, Geneva, Tahoma;
    letter-spacing: 1rem;
    padding-left: 70px;


    @media (max-width: 800px) {

        font-size: 6rem;

    }

    @media (max-width: 700px) {

        font-size: 5rem;

    }

    @media (max-width: 600px) {

        font-size: 5rem;
        padding-left: 40px;

    }

    @media (max-width: 520px) {
       
        font-size: 4rem;
        padding-left: 30px;

    }

    @media (max-width: 450px) {
       
       font-size: 3rem;
       padding-left: 15px;

    }
   
`;

const StyledLetter = styled.span`

    display: inline-block;
    opacity: 0;
   
    animation-name: ${animate};
    animation-duration: 1s;   
    animation-fill-mode: forwards;
    color: ${props => props.theme.colorMainBlueGray};

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    
    &:nth-child(1) {

        animation-delay: 0s;

    }

    &:nth-child(2) {

        animation-delay: 0.5s;
        
    }

    &:nth-child(3) {

        animation-delay: 1s;
        
    }

    &:nth-child(4) {

        animation-delay: 1.2s;
        
    }

    &:nth-child(5) {

        animation-delay: 1.4s;
        
    }

    &:nth-child(6) {

        animation-delay: 1.6s;
        
    }

    &:nth-child(7) {

        animation-delay: 2.2s;
        
    }
    
    &:nth-child(8) {

        animation-delay: 2.5s;
        
    }

    &:nth-child(9) {

        animation-delay: 3s;
        
    }

    &:nth-child(10) {

        animation-delay: 3.2s;
    
    }

    &:nth-child(11) {

        animation-delay: 3.4s;
    
    }

    &:nth-child(12) {

        animation-delay: 3.6s;
    
    }

    &:nth-child(13) {

        animation-delay: 3.8s;
    
    }

`;



function NameAnimated() {
    return (
        <StyledContainer>
            <StyledVideo src={smokeVideo} autoPlay muted /> 
            <StyledName>
                <StyledLetter>R</StyledLetter>
                <StyledLetter>A</StyledLetter>
                <StyledLetter>F</StyledLetter>
                <StyledLetter>A</StyledLetter>
                <StyledLetter>E</StyledLetter>
                <StyledLetter>L</StyledLetter>
                {' '}
                <StyledLetter>E.</StyledLetter>
                {' '}
                <StyledLetter>U</StyledLetter>
                <StyledLetter>R</StyledLetter>
                <StyledLetter>B</StyledLetter>
                <StyledLetter>I</StyledLetter>
                <StyledLetter>N</StyledLetter>
                <StyledLetter>A</StyledLetter>
            </StyledName>
        </StyledContainer>
    );
}

export default NameAnimated;
