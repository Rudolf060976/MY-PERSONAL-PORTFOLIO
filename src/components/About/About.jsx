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
        <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={'red'}>
            {children}
        </BackgroundImage>
    );
};

const StyledBackgroundSection = styled(BackgroundSection)`

    width: 100%;
    
    padding: 30px 10px 100px 10px;
   
`;


function About() {
    return (
        <StyledBackgroundSection>
           <AboutContent />
        </StyledBackgroundSection>
    );
}

export default About;
