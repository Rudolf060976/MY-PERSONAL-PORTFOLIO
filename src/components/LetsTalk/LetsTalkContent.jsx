import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import image from '../../images/PHONE-IMAGE-PNG.png';
import LetsTalkContentDetails from './LetsTalkContentDetails';
import GoHome from './GoHome';



const phoneAnimation = keyframes`

    from {
        
        transform: translate(-50%,-50%) scale(0);

    }
   
    50% {

        transform: translate(-50%,-50%) scale(1.3);
        
    }

    75% {

        transform: translate(-50%,-50%) scale(0.8);

    }
   
    to {

        transform: translate(-50%,-50%) scale(1);
    }

`;

const leftAnimation = keyframes`

    from {

        opacity: 0;

        transform: translate(-150%, -50%) scale(1,1);

    }

    50%{

        opacity: 1;

        transform: translate(5%, -50%) scale(.4,1);


    }

    80%{

        transform: translate(5%, -50%) scale(1.2,1);

        color: white;

        text-shadow: 0px 0px 10px white;

    }


    to {

        opacity: 1;

        transform: translate(5%, -50%) scale(1,1);

        color: ${props => props.theme.colorMainBlueGray};
      
        text-shadow: none;

    }

`;


const rightAnimation = keyframes`

   from {

        opacity: 0;

        transform: translate(150%, -50%) scale(1,1);

    }

    50%{

        opacity: 1;

        transform: translate(-5%, -50%) scale(.4,1);


    }

    80%{

        transform: translate(-5%, -50%) scale(1.2,1);

        color: white;

        text-shadow: 0px 0px 10px white;

    }


    to {

        opacity: 1;

        transform: translate(-5%, -50%) scale(1,1);

        color: ${props => props.theme.colorMainBlueGray};
      
        text-shadow: none;

    }

`;


const StyledTitleContainer = styled.h2`

    position: relative;

    width: 500px;

    margin: 0 auto;

    display: flex;

    justify-content: space-between;

    align-items: center;

    text-align: center;

    letter-spacing: 2px;

    color: ${props => props.theme.colorMainBlueGray};

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    padding: 40px 0;  

    


     @media (max-width: 2300px) {

        width: 450px;

     }

      @media (max-width: 2000px) {

        width: 400px;

     }

      @media (max-width: 1700px) {

        width: 380px;

     }

      @media (max-width: 1500px) {

        width: 360px;

     }

      @media (max-width: 1300px) {

        width: 330px;

     }

       @media (max-width: 1100px) {

        width: 310px;

     }

       @media (max-width: 950px) {

        width: 290px;

     }

       @media (max-width: 700px) {

        width: 270px;

     }

       @media (max-width: 500px) {

        width: 250px;

     }

       @media (max-width: 350px) {

        width: 230px;

     }

       @media (max-width: 290px) {

        width: 210px;

     }

`;


const StyledTitleLeft = styled.span`


    position: absolute;

    top: 50%;

    left: -10%;

    transform: translate(-150%, -50%) scale(1,1);

    opacity: 0;

    animation-name: ${props => props.play ? leftAnimation : 'none'};

    animation-duration: 1.5s;

    animation-fill-mode: forwards;

`;


const StyledTitleRigth = styled.span`

    position: absolute;

    top: 50%;

    right: -10%;

    transform: translate(150%, -50%) scale(1,1);

    opacity: 0;

    animation-name: ${props => props.play ? rightAnimation : 'none'};

    animation-duration: 1.5s;

    animation-fill-mode: forwards;

     @media (max-width: 2300px) {

        right: -6%;

     }

`;

const StyledPhoneIcon = styled.img`

    position: absolute;

    max-width: 5rem;

    top: 50%;

    left: 50%;

    transform: translate(-50%,-50%) scale(0);
    
    animation-name: ${props => props.play ? phoneAnimation : 'none'};

    animation-duration: 1s;

    animation-fill-mode: forwards;

    &:hover {

        cursor: pointer;
    }  

`;



function LetsTalkContent() {

    const containerElement = useRef(null);

    const [play, setPlay] = useState(false);

    const [enphasis, setEnphasis] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

    return () => {
        
        window.removeEventListener('scroll', handleScroll);

    };
    }, [])


    const handleScroll = () => {
     
        
        const introPosition = containerElement.current.getBoundingClientRect().top;
        // console.log('introPosition: ', introPosition);

        const screenHeight = window.innerHeight;

        // console.log('screenHeight: ', screenHeight);

        

        if (introPosition < screenHeight) {
            //console.log('ESTOY AQUI');
            if(!play) setPlay(true);

        } else if (introPosition > screenHeight) {
            setPlay(false);
        }

    };

    const handleMouseHooverPhoneIcon = (value) => {

        setEnphasis(value);

    };

    return (
        <>
            <StyledTitleContainer ref={containerElement}>                
                <StyledTitleLeft play={play}>- LET'S</StyledTitleLeft>
                <StyledTitleRigth play={play}>TALK -</StyledTitleRigth>                
                <StyledPhoneIcon play={play} src={image} onMouseEnter={(e) => handleMouseHooverPhoneIcon(true)} onMouseLeave={(e) => handleMouseHooverPhoneIcon(false)} />
            </StyledTitleContainer>
            <LetsTalkContentDetails play={play} enphasis={enphasis} /> 
            <GoHome />
        </>
    );
}

export default LetsTalkContent;
;