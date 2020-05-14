import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'gatsby-image';
import { rgba } from 'polished';

const backAnimation = keyframes`

    from {

        width: 0;
        height: 0;

    } 

    40% {
        width: 0;
        height: 100%;
    }

    to {

        width: 100%;

        height: 100%;

    }

`;


const imageAnimation = keyframes`

    from {
        
        transform: scale(1) translate(0,0);

    }

    25% {
        transform: scale(1.1) translate(30px,30px);
    }

    50% {

        transform: scale(1.2) translate(-40px,0px);

    }

    75% {

        transform: scale(1.3) translate(40px,-30px);

    }

    to {
        
        transform: scale(1) translate(0,0);
    }

`;




const StyledContainer = styled.div`

    grid-area: ${props => props.gridArea};

    width: 100%;

    display: flex;

    justify-content: center;

    align-items: center;

    position: relative;

    padding: 40px 0;

   &::before {

        content: '';

        display: block;

        position: absolute;

        top: 0;

        left: 0;

        height: 0;

        width: 0;
        
        background-color: ${props => rgba(props.theme.colorMainBlueClear2,0.4)};

        animation-name: ${props => props.play ? backAnimation : 'none'};

        animation-duration: 1s;

        animation-fill-mode: forwards;

        animation-delay: ${props => props.animDelay || '0s'};
        
        border: 1px solid ${props => props.theme.colorMainBlueGray};
        
   }

`;

const StyledImageContainer = styled.div`  /*  ESTA ES UNA PRUEBA */

   width: 80%;
   overflow: hidden;
   border-radius: 10px; 

   @media (max-width: 700px) {

        width: 70%;

   }

    @media (max-width: 580px) {

        width: 80%;

   }

    @media (max-width: 400px) {

        width: 90%;

   }

   
`;

const StyledImage = styled(Image)`

    width: 100%;
    max-width: 700px; 
    
    border-radius: 10px;      
           
        &:hover {
           
            animation-name: ${props => props.play ? imageAnimation : 'none'};

            animation-duration: 4s;

            animation-fill-mode: forwards;  
        }      

`;


function ProjectImageItem({ image, gridArea, animDelay, play }) {
    return (
        <StyledContainer gridArea={gridArea} animDelay={animDelay} play={play}>
            <StyledImageContainer>
                <StyledImage play={play} fluid={image} animDelay={animDelay} />
            </StyledImageContainer>           
        </StyledContainer>
    );
}

export default ProjectImageItem;
