import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectImageItem from './ProjectImageItem';
import ProjectDataItem from './ProjectDataItem';



const StyledTitle = styled.h2`

    width: 100%;

    text-align: center;

    letter-spacing: 2px;

    color: ${props => props.theme.colorMainBlueGray};

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    padding: 40px 0;

    text-align: center;


    @media (max-width: 500px) {

        width: 300px;

    }

`;

const StyledContentContainer = styled.div`

    width: 100;

`;

const StyledGridContainer = styled.div`

    display: grid;

    grid-template-areas:
        "area1      area2"
        "area3      area4"
        "area5      area6";

    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 42rem);

    gap: 0;

    width: 70%;

    margin: 0 auto;

    padding: 40px 0;

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

    const bitzone = projectsArray[2];


    return (
        <>
        <StyledTitle>LATEST PROJECTS</StyledTitle>
        <StyledContentContainer ref={containerElement}>
            <StyledGridContainer>
                <ProjectImageItem gridArea={'area1'} image={portFolio.image.childImageSharp.fluid} play={play} />
                <ProjectDataItem gridArea={'area2'} data={portFolio} play={play} animDelay={'200ms'} buttonsDelay={'1.5s'} />
                <ProjectDataItem gridArea={'area3'} data={restaurant} play={play} animDelay={'2s'} buttonsDelay={'3.2s'} />
                <ProjectImageItem gridArea={'area4'} image={restaurant.image.childImageSharp.fluid} play={play} animDelay={'1.7s'} />
                <ProjectImageItem gridArea={'area5'} image={bitzone.image.childImageSharp.fluid} play={play} animDelay={'3.3s'} />
                <ProjectDataItem gridArea={'area6'} data={bitzone} play={play} animDelay={'3.8s'} buttonsDelay={'5.1s'} />
            </StyledGridContainer>       
        </StyledContentContainer>
        </>
    );
}

export default ProjectsContent;
