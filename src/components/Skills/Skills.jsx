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

    height: 150vh;

    min-height: 150vh;

    position: absolute;

    @media (max-width: 1350px) {

        height: 170vh;

        min-height: 170vh;

    }

    @media (max-width: 865px) {

        height: 190vh;

        min-height: 190vh;

    }   

    @media (max-width: 700px) {

        height: 210vh;

        min-height: 210vh;

    } 
    
    @media (max-width: 565px) {

        height: 250vh;

        min-height: 250vh;

    }   
    

`;

const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-50, 50]} tagOuter="div">
        <StyledBackgroundSection />
    </Parallax>
);


const StyledContainer = styled.section`

    width: 100%;

    height: 150vh;
    
    position: relative;

    z-index: -500;

    @media (max-width: 1350px) {

        height: 170vh;

    }

    @media (max-width: 865px) {

        height: 190vh;

    }

    @media (max-width: 700px) {

        height: 210vh;

       

    }   

    @media (max-width: 565px) {

        height: 250vh;

    }   

`;


function Skills() {
    return (
        <StyledContainer>
            <ParallaxImage />  
            <SkillsContent />          
        </StyledContainer>
    );
}

export default Skills;
