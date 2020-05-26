import React from 'react';
import styled from 'styled-components';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import AboutContent from './AboutContent';


const BackgroundSection = ({ className, children, id }) => {

    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "BACK2.jpeg" }) {
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
        <BackgroundImage Tag="div" className={className} fluid={imageData} backgroundColor={'#1D2F40'} id={id} >
            {children}
        </BackgroundImage>
    );
};



const StyledBackground = styled(BackgroundSection)`

    width: 100%;
   
    padding: 80px 10px 150px 10px; 
       

  
`;

const StyledContainer = styled.div`

    width: 100%;

    z-index: 90;


`;


function About() {
    return (
        <StyledContainer id="about-scroll-point"> 
            <StyledBackground>
                <AboutContent />  
            </StyledBackground>                                    
        </StyledContainer>        
    );
}

export default About;
