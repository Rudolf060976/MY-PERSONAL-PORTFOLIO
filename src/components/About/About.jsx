import React from 'react';
import styled from 'styled-components';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import AboutContent from './AboutContent';


const BackgroundSection = ({ className, children }) => {

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
        <BackgroundImage Tag="div" className={className} fluid={imageData} backgroundColor={'#1D2F40'}>
            {children}
        </BackgroundImage>
    );
};

const StyledBackgroundSection = styled(BackgroundSection)`

    width: 100%;
    
    padding: 50px 10px 100px 10px;
    

    /* border-bottom: 1px solid ${props => props.theme.colorMainBlueGray}; */
  
   
`;

const StyledContainer = styled.section` /* TUVO QUE SER NECESARIO ESTE CONTAINER PORQUE SE VEIA EL BACKGROUND DE SKILLS DETRAS DEL BACKGROUND DE ESTA SECCION */

    width: 100%;
   

    background-color: ${props => props.theme.colorMainBlueDark2};
`;


function About() {
    return (
        <StyledContainer>
            <StyledBackgroundSection>
                <AboutContent />
            </StyledBackgroundSection>
        </StyledContainer>        
    );
}

export default About;
