import React from 'react';
import styled from 'styled-components';

import { graphql, useStaticQuery } from 'gatsby';


import BackgroundImage from 'gatsby-background-image';

import { rgba } from 'polished';


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
    height: 50rem;

    display: flex;

    justify-content: center;

    align-items: center;
   
`;

const StyledCenter = styled.div`

    width: 70%;

    height: 70%;

    background-color: ${props => rgba(props.theme.colorMainBlueGray,0.2) };

    border-radius: 10px;

    box-shadow: 0px 0px 15px ${props => props.theme.colorMainBlueClear1};

    color: ${props => props.theme.colorMainBlueGray };

`;


function About() {
    return (
        <StyledBackgroundSection>
            <StyledCenter>
                HELLO
            </StyledCenter>
        </StyledBackgroundSection>
    );
}

export default About;
