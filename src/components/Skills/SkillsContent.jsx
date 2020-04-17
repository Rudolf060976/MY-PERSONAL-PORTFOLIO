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
            <SkillsItem skillData={backEnd} top={'75px'} left={'-60'} xArray={[-30,50]} side="L" itemID="1"/>     
            <SkillsItem skillData={frontEnd} top={'410px'} left={'120'} xArray={[50,-55]} side="R" itemID="2"/>       
            <SkillsItem skillData={reactjs} top={'745px'} left={'-60'} xArray={[-30,50]} side="L" itemID="3"/>       
            <SkillsItem skillData={tools} top={'1080px'} left={'120'} xArray={[50,-55]} side="R" itemID="4"/>                  
        </StyledContainer>
    );
}

export default SkillsContent;
