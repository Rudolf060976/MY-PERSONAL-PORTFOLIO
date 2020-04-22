import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import LetsTalkContent from './LetsTalkContent';

const BackgroundSection = ({ className, children }) => {

    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "BACK-CONTACT.jpg" }) {
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
   
    background-repeat: repeat-y;

    padding: 100px 10px 300px 10px; 

    height: 150rem; 

    @media (max-width: 510px) {

        height: 250rem; 

    }

`;


const StyledContainer = styled.section`

    width: 100%;

    background-color: ${props => props.theme.colorMainBlueDark2};   

    height: 150rem;

    @media (max-width: 510px) {

        height: 250rem; 

    }
           
`;

function LetsTalk() {
    return (
        <StyledContainer id="contact-scroll-point">            
            <StyledBackgroundSection>                
                <LetsTalkContent />
            </StyledBackgroundSection>                    
        </StyledContainer>
    );
}

export default LetsTalk;
