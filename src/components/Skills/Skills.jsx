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

    position: absolute;

    

`;

const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-50, 50]} tagOuter="div">
        <StyledBackgroundSection />
    </Parallax>
);


const StyledContainer = styled.section`

    width: 100%;

    height: 140vh;
    
    position: relative;

    z-index: -500;

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
