import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectImageItem from './ProjectImageItem';
import ProjectDataItem from './ProjectDataItem';



const animationTitle = keyframes`

  from {
   
    color: ${props => props.theme.colorMainBlueGray};
    transform: scale(1);
    text-shadow: none;

  }

  75% {

    color: white;

    text-shadow: 0px 0px 10px white;

    transform: scale(1.2);

  }

  to {

      color: ${props => props.theme.colorMainBlueGray};

      transform: scale(1);

      text-shadow: none;

  }


`;




const StyledTitle = styled.h2`

    width: 100%;

    text-align: center;

    letter-spacing: 2px;

    color: ${props => props.theme.colorMainBlueGray};

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    padding: 40px 0;

    
     animation-name: ${props => props.play ? animationTitle : 'none'};

     animation-duration: 1s;

     animation-fill-mode: forwards;
 

`;

const StyledContentContainer = styled.div`

    width: 100%;

`;

const StyledGridContainer = styled.div`

    display: grid;

    grid-template-areas:
        "area1      area2"
        "area3      area4"
        "area5      area6"
        "area7      area8";

    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 54rem);

    gap: 0;

    width: 70%;

    margin: 0 auto;

    padding: 40px 0;


    @media (max-width: 2200px) {

        width: 80%;


    }

     @media (max-width: 1670px) {

        grid-template-rows: repeat(3, 58rem);


    }

      @media (max-width: 1400px) {

        grid-template-rows: repeat(3, 62rem);


    }

     @media (max-width: 1350px) {

        grid-template-rows: repeat(3, 64rem);


    }

     @media (max-width: 1300px) {

        width: 90%;


    }

     @media (max-width: 1100px) {

        grid-template-rows: repeat(3, 68rem);


    }

     @media (max-width: 950px) {

        grid-template-rows: repeat(3, 70rem);

        width: 100%;

    }

     @media (max-width: 900px) {

        grid-template-rows: repeat(3, 74rem);

    }

     @media (max-width: 800px) {

        grid-template-rows: repeat(3, 78rem);

    }

     @media (max-width: 750px) {

        width: 90%;

        grid-template-areas:
        "area1"
        "area2"
        "area4"
        "area3"
        "area5"
        "area6"
        "area8"
        "area7";

        grid-template-columns: 1fr;
        grid-template-rows: repeat(6,auto);

        gap: 30px 0;


    }
  

`;


function ProjectsContent() {

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

        } else if (introPosition > screenHeight) {
            setPlay(false);
        }

    };

    const data = useStaticQuery(graphql`
        query {
            allLastProjectsJson {
                nodes {
                    title 
                    description
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    tools{
                        name
                    }
                    pageUrl
                    githubUrl
                }
            }
        }    
    `);

    const projectsArray = data.allLastProjectsJson.nodes;

    const portFolio = projectsArray[0];

    const restaurant = projectsArray[1];

    const nimix = projectsArray[2];

    const bitzone = projectsArray[3];


    return (
        <>
        <StyledTitle play={play}>LATEST PROJECTS</StyledTitle>
        <StyledContentContainer ref={containerElement}>
            <StyledGridContainer>
                <ProjectImageItem gridArea={'area1'} image={portFolio.image.childImageSharp.fluid} play={play} />
                <ProjectDataItem gridArea={'area2'} data={portFolio} play={play} animDelay={'200ms'} buttonsDelay={'1.5s'} />
                <ProjectDataItem gridArea={'area3'} data={restaurant} play={play} animDelay={'2s'} buttonsDelay={'3.2s'} />
                <ProjectImageItem gridArea={'area4'} image={restaurant.image.childImageSharp.fluid} play={play} animDelay={'1.7s'} />
                <ProjectImageItem gridArea={'area5'} image={nimix.image.childImageSharp.fluid} play={play} animDelay={'3.3s'} />
                <ProjectDataItem gridArea={'area6'} data={nimix} play={play} animDelay={'3.8s'} buttonsDelay={'5.1s'} />
                <ProjectDataItem gridArea={'area7'} data={bitzone} play={play} animDelay={'5.3s'} buttonsDelay={'6.5s'} />
                <ProjectImageItem gridArea={'area8'} image={bitzone.image.childImageSharp.fluid} play={play} animDelay={'5s'} />

                
            </StyledGridContainer>       
        </StyledContentContainer>
        </>
    );
}

export default ProjectsContent;
