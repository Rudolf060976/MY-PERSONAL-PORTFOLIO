import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

import { graphql, useStaticQuery } from 'gatsby';

import AboutCard from './AboutCard';

import AboutContacts from './AboutContacts';


const animationME = keyframes`

  from {

    transform: translate(-50px, -50%) scale(1);    
  }

  70% {

    transform: translate(300%, -50%) scale(1);   


  }

  85%  {

    transform: translate(300%, -50%) scale(1.3);   

  }

  to {

    transform: translate(300%, -50%) scale(1); 

  }

`;

const animationTitle = keyframes`

  from {

    opacity: 0;
    color: ${props => props.theme.colorMainBlueGray};
    
    text-shadow: none;

  }

  75% {
        
    color: white;

    text-shadow: 0px 0px 10px white;

    

  }

  to {

    opacity: 1;

    color: ${props => props.theme.colorMainBlueGray};

    

    text-shadow: none;

  }


`;


const backAnimation = keyframes`

    from {
        
        opacity: .5;
        width: 0;
        height: 0;

    } 

    60% {
        opacity: .5;
        width: 0;
        height: 100%;
    }

    80% {

        opacity: .5;
        width: 100%;
        height: 100%;

    }

    to {
        width: 100%;
        height: 100%;
        opacity: 0;
    }


`;

const animationContent = keyframes`

    from {

        opacity: 0;

    }

    to {

        opacity: 1;

    }

`;

const animationContentTitle = keyframes`

    from {

        transform: translateY(30px);

    }

    to {


        transform: translateY(0);

    }


`;

const StyledContainer= styled.div`

    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
      
   

    @media (max-width: 850px ) {

        padding: 0 10px;

    }

    @media (max-width: 450px ) {

        padding: 0;

    }

`;

const StyledTitleContainer = styled.div`

    position: relative;

    width: 450px;

    padding: 40px 0;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma; 
    
    font-size: 4.4rem;

    font-weight: bold;
       
    text-align: center;  

    letter-spacing: 2px;

    color: ${props => props.theme.colorMainBlueGray};
       
     @media (max-width: 600px) {

        width: 400px;

    }

`;


const StyledTitle = styled.span`

    opacity: 0;

    transform: scaleX(1);
    
    animation-name: ${props => props.play ? animationTitle : 'none'};

    animation-duration: 1.2s;

    animation-fill-mode: forwards;

    animation-delay: 1s;
    
    
`;

const StyledTitleSpan = styled.span`

    display: inline-block;

    padding: 10px 15px;

    position: absolute;
    
    top: 50%;

    left: 0;

    transform: translate(-50px,-50%);    

    /* background-color: ${props => props.theme.colorMainBlueClear1};

    color: ${props => props.theme.colorMainBlueDark2}; */

    background-color: ${props => props.theme.colorMainBlueDark1};

    color: ${props => props.theme.colorMainBlueClear2};

    border-radius: 5px;

    animation-name: ${props => props.play ? animationME : 'none'};

    animation-duration: 1s;

    animation-fill-mode: forwards;


    @media (max-width: 2000px) {

        left: 2rem;

    }

     @media (max-width: 1500px) {

        left: 4rem;

    }

    @media (max-width: 1500px) {

        left: 6rem;

    }

    @media (max-width: 800px) {

        left: 8rem;

    }

     @media (max-width: 600px) {

        left: 6rem;

    }

      @media (max-width: 450px) {

        left: 8rem;

    }
    

`;


const StyledCenterContainer = styled.div`

        width: 60%;

        overflow: hidden;

        position: relative;
        

        &::before {

            content: '';

            position: absolute;

            top: 0;

            left: 0;

            height: 0;

            width: 0;
        
            background-color: ${props => rgba(props.theme.colorMainBlueGray,0.5)};

            animation-name: ${props => props.play ? backAnimation : 'none'};

            animation-duration: 2s;

            animation-fill-mode: forwards;

            animation-delay: 1s;
        
            border: 3px solid ${props => props.theme.colorMainBlueGray};

        }


    @media (max-width: 2100px ) {

        width: 70%;
    
    }

    @media (max-width: 1700px ) {

        width: 80%;


    }

    @media (max-width: 1400px ) {

        width: 90%;


    }


    @media (max-width: 1200px ) {

        width: 80%;
            
    }

    @media (max-width: 1000px ) {

        width: 90%;

    }

    @media (max-width: 850px ) {

        width: 100%;

    }

    @media (max-width: 750px ) {

        width: 80%;
   
    }

    @media (max-width: 600px ) {

        width: 100%;

    }

`;

const StyledCenter = styled.div`

    position: relative;

    width: 100%;

    opacity: 0;

    /* height: 70%; */

    background-color: ${props => rgba(props.theme.colorMainBlueGray,0.1) };

    border-radius: 10px;

    /* box-shadow: 0px 0px 15px ${props => props.theme.colorMainBlueClear1}; */

    color: ${props => props.theme.colorMainBlueGray };

    padding: 30px 20px;

    display: grid;

    grid-template-areas:
    "card   card    title   title   contact"
    "card   card    content content contact"
    "card   card    content content contact";

    grid-template-columns: 170px 170px 1fr 1fr 1fr;

    grid-template-rows: .5fr 1fr 1fr;

    gap: 10px 20px;

    animation-name: ${props => props.play ? animationContent : 'none'};

    animation-duration: .8s;

    animation-fill-mode: forwards;

    animation-delay: 2.4s;


    @media (max-width: 2100px ) {

       
        grid-template-rows: .3fr 1fr 1fr;

    }

  
    @media (max-width: 1200px ) {
       
        grid-template-areas:
            "card   card    title   title  "
            "card   card    content content"
            "card   card    contact contact";

        grid-template-columns: 170px 170px 1fr 1fr;

        grid-template-rows: .2fr .7fr .5fr;

        padding: 30px 30px;
        
    }
  
    @media (max-width: 750px ) {

       
        grid-template-areas:
            "card   card"
            "card   card"
            "title  title"            
            "content content"
            "contact contact"
            "contact contact";

        grid-template-columns: 170px 170px;

        grid-template-rows: 1fr 1fr .2fr .5fr .4fr .5fr;

        justify-content: center;

        gap: 10px 0px;

    }


    @media (max-width: 450px ) {

        padding: 30px 10px;

        grid-template-columns: 150px 150px;

    }

    @media (max-width: 350px ) {

        padding: 30px 5px;

        grid-template-columns: 130px 130px;

    }
  

`;

const StyledContentTitle = styled.h5`

    grid-area: title;

    color: white;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    letter-spacing: 1px;

    font-size: 2.2rem;

    transform: translateY(30px);

    animation-name: ${props => props.play ? animationContentTitle : 'none'};

    animation-duration: 1s;

    animation-fill-mode: forwards;

    animation-delay: 2.4s;


    @media (max-width: 450px ) {

        padding: 0 5px;

    }

    

`;

const StyledContentDataContainer = styled.div`

    grid-area: content;

    @media (max-width: 450px ) {

        padding: 0 5px;

    }

`;

const StyledContentDataP = styled.p`

    width: 100%;

    padding: 15px 10px 0 0;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 1.4rem;

    line-height: 2rem;

    @media (max-width: 1100px ) {

        font-size: 1.6rem;

        line-height: 2.2rem;

    }

    @media (max-width: 750px ) {

        font-size: 1.8rem;

        line-height: 2.4rem;

    }

    @media (max-width: 450px ) {

        font-size: 2rem;

        line-height: 2.6rem;

        padding: 5px 0;

    }

`;


function AboutContent() {

    const containerElement = useRef(null);

    const [play, setPlay] = useState(false);

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

        } else if (introPosition  > screenHeight) {
            setPlay(false);
        }

    };

   

    const data = useStaticQuery(graphql`    
        query {
            allAboutJson {
                nodes {
                    id
                    title
                    p1
                    p2
                    p3
                    email
                    github
                    linkedin
                }
            }
        }    
    `);

    const pageData = data.allAboutJson.nodes[0];

    const {
        title,
        p1,
        p2,
        p3,
        email,
        github,
        linkedin
    } = pageData;

    const contactData = {
        email,
        github,
        linkedin
    };

    return (
        <StyledContainer ref={containerElement}>
            <StyledTitleContainer>
                <StyledTitle play={play}>ABOUT</StyledTitle><StyledTitleSpan play={play}>ME</StyledTitleSpan>                
            </StyledTitleContainer>            
            <StyledCenterContainer play={play}>
                <StyledCenter play={play}>
                    <AboutCard data={contactData}/>
                    <StyledContentTitle play={play}>{title}</StyledContentTitle>
                    <StyledContentDataContainer>
                        <StyledContentDataP>{p1}</StyledContentDataP>
                        <StyledContentDataP>{p2}</StyledContentDataP>
                        <StyledContentDataP>{p3}</StyledContentDataP>
                    </StyledContentDataContainer>
                    <AboutContacts data={contactData} />
                </StyledCenter>
            </StyledCenterContainer>
            
        </StyledContainer>
    )
}

export default AboutContent;
