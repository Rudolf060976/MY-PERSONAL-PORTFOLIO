import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import SkillsContent from './SkillsContent';
import { Parallax } from 'react-scroll-parallax';

const BackgroundSection = ({ className, children }) => {

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
        <BackgroundImage Tag="div" className={className} fluid={imageData} backgroundColor={'#325A73'}>
            {children}
        </BackgroundImage>
    );
};

const StyledBackgroundSection = styled(BackgroundSection)`

    width: 100%;

    height: 140vh; 

    min-height: 140vh; 

    position: absolute;

    z-index: -5000;
  

    @media (max-height: 1200px) {

        height: 160vh;

        min-height: 160vh;

    }
    
    @media (max-height: 1000px), (max-width: 1270px) {

        height: 190vh;

        min-height: 190vh;

    }
    

    @media (max-height: 1000px) and (max-width: 1270px) {

        height: 220vh;

        min-height: 220vh;

    }

    @media (max-height: 860px), (max-width: 870px) {

        height: 240vh;

        min-height: 240vh;

    }

    @media (max-height: 860px) and (max-width: 870px) {

        height: 260vh;

        min-height: 260vh;

    }

   @media (max-height: 830px), (max-width: 720px) {

        height: 300vh;

        min-height: 300vh;

    }

    @media (max-height: 830px) and (min-width: 1000px) {

        height: 240vh;

        min-height: 240vh;

    }

    @media (max-height: 830px) and (max-width: 720px) {

        height: 330vh;

        min-height: 330vh;

    }

    
    @media (max-height: 750px), (max-width: 570px) {

        height: 350vh;

        min-height: 350vh;

    }

    @media (max-height: 750px) and (max-width: 570px) {

        height: 410vh;

        min-height: 410vh;

    }
   

    @media (max-height: 730px) {

        height: 430vh;

        min-height: 430vh;

    }

     @media (max-height: 690px) {

        height: 450vh;

        min-height: 450vh;

    }

    @media (max-height: 660px) {

        height: 470vh;

        min-height: 470vh;

    }

    @media (max-height: 630px) {

        height: 490vh;

        min-height: 490vh;

    }

    @media (max-height: 600px) {

        height: 510vh;

        min-height: 510vh;

    }

    @media (max-height: 730px) and (min-width: 780px) {

        height: 370vh;

        min-height: 370vh;

    }
    
    @media (max-height: 830px) and (max-width: 510px) {

        height: 360vh;

        min-height: 360vh;

    }

    @media (max-height: 750px) and (max-width: 510px) {

        height: 410vh;

        min-height: 410vh;

    }

    @media (max-height: 750px) and (max-width: 410px) {

        height: 460vh;

        min-height: 460vh;

    }

     @media (max-height: 750px) and (max-width: 350px) {

        height: 520vh;

        min-height: 520vh;

    }

    @media (min-height: 1300px) and (min-width: 1000px) {

        height: 160vh;

        min-height: 160vh;

    }

`;

const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-50, 50]} tagOuter="div">
        <StyledBackgroundSection />
    </Parallax>
);


const StyledContainer = styled.section`

    width: 100%;  
    
    position: relative;

    z-index: -5000;
    
    
`;


function Skills() {
    return (
        <StyledContainer id="skills-scroll-point">
            <ParallaxImage />  
            <SkillsContent />          
        </StyledContainer>
    );
}

export default Skills;
