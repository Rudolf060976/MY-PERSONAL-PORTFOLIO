import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SkillsItem from './SkillsItem';
import { graphql, useStaticQuery } from 'gatsby';

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


const StyledContainer = styled.div`

    position: absolute; /* PARA UBICARLO SOBRE EL PARENT DIV QUE ESTA EN MOVIMIENTO */

    top: 0;

    left: 0;

    width: 100%;
        
    padding: 80px 10px 100px 10px;

      @media (max-width: 500px) {

        padding: 50px 10px 100px 10px;

    }
    
`;


const StyledTitle = styled.h2`

    width: 100%;

    text-align: center;

    letter-spacing: 2px;

    color: ${props => props.theme.colorMainBlueGray};

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    padding: 40px 0;

    text-align: center;

     animation-name: ${props => props.play ? animationTitle : 'none'};

     animation-duration: 1.5s;

     animation-fill-mode: forwards;
   

    @media (max-width: 500px) {

        width: 300px;

        padding: 20px 0;

    }
              
`;
  

function SkillsContent() {

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
            allSkillsJson {
                nodes {
                    title
                    skills {
                        name
                        image {
                            childImageSharp {
                                fixed(width:50) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }    
    `);

    const skillsTypesArray = data.allSkillsJson.nodes;

    const backEnd = skillsTypesArray[0];

    const frontEnd = skillsTypesArray[1];

    const reactjs = skillsTypesArray[2];
    
    const tools = skillsTypesArray[3];


    return (
        <StyledContainer ref={containerElement}>           
            <StyledTitle play={play}>- SKILLS -</StyledTitle>
            <SkillsItem skillData={backEnd} top={'75px'} left={'-60'} xArray={[-30,50]} side="L" itemID="1"/>     
            <SkillsItem skillData={frontEnd} top={'410px'} left={'120'} xArray={[50,-55]} side="R" itemID="2"/>       
            <SkillsItem skillData={reactjs} top={'745px'} left={'-60'} xArray={[-30,50]} side="L" itemID="3"/>       
            <SkillsItem skillData={tools} top={'1080px'} left={'120'} xArray={[50,-55]} side="R" itemID="4"/>                  
        </StyledContainer>
    );
}

export default SkillsContent;
