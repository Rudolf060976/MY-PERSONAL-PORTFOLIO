import React from 'react';
import styled from 'styled-components';
import SkillsItem from './SkillsItem';
import { graphql, useStaticQuery } from 'gatsby';


const StyledContainer = styled.div`

    position: absolute; /* PARA UBICARLO SOBRE EL PARENT DIV QUE ESTA EN MOVIMIENTO */

    top: 0;

    left: 0;

    width: 100%;
        
    padding: 50px 10px 100px 10px;
    
`;


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
  

function SkillsContent() {

    const data = useStaticQuery(graphql`
    
        query {
            allSkillsJson {
                nodes {
                    title
                    skills {
                        name
                        image {
                            childImageSharp {
                                fixed(width:60) {
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
        <StyledContainer>           
            <StyledTitle>- SKILLS -</StyledTitle>
            <SkillsItem skillData={backEnd} top={'5rem'} left={'-60rem'} xArray={[-30,50]} />     
            <SkillsItem skillData={frontEnd} top={'30rem'} left={'120rem'} xArray={[50,-55]} />  
            <SkillsItem skillData={reactjs} top={'55rem'} left={'-60rem'} xArray={[-30,50]} />  
            <SkillsItem skillData={tools} top={'80rem'} left={'120rem'} xArray={[50,-55]} />            
        </StyledContainer>
    );
}

export default SkillsContent;
