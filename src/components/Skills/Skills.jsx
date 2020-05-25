import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import SkillsContent from './SkillsContent';


const BackgroundSection = ({ className, children, id }) => {

    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "BACK12.webp" }) {
                childImageSharp {
                    fluid(quality:90, maxWidth: 2560) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }    
    `);

    const imageData = data.desktop.childImageSharp.fluid;

    return (
        <BackgroundImage Tag="div" className={className} fluid={imageData} backgroundColor={'#325A73'} id={id}>
            {children}
        </BackgroundImage>
    );
};

const StyledContainer = styled(BackgroundSection)`

    width: 100%;    

    background-position: center;

    background-size: cover;

    background-attachment: fixed;

    height: 1800px; 

    position: relative;

    z-index: -5000;
  
/* RECUERDEN QUE CUANDO SE USA MAX-WIDTH LOS VALORES DEBEN SER DESCENDENTES, Y CON MIN-WIDTH ASCENDENTES */
     
    @media (max-width: 1250px) {

        height: 2000px;       

    }

     @media (max-width: 830px) {

        height: 2250px;       

    }

     @media (max-width: 680px) {

        height: 2550px;       

    }

     @media (max-width: 530px) {

        height: 3000px;       

    }

     @media (max-width: 410px) {

        height: 2400px;       

    }

     @media (max-width: 350px) {

        height: 2800px;       

    }

`;





function Skills() {
    return (
        <StyledContainer id="skills-scroll-point">            
                <SkillsContent />                          
        </StyledContainer>
    );
}

export default Skills;
