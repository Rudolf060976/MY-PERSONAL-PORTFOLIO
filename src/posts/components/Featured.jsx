import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import {rgba} from 'polished';


const StyledContainer = styled.div`

    width: 100%;
    
    background-color: #7962AE;    

    display: flex;

    justify-content: center;

    align-items: center;

    padding: 50px 10px;

`;

const StyledCenter = styled.div`

    width: 50%;

    display: flex;

    justify-content: space-between;

    align-items: center;

`;

const StyledTitleContainer = styled.div`

    flex: 2 1 80%;

`;

const StyledFeature = styled.p`

    width: 100%;
    font-family: Montserrat, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 1.4rem;
    color: ${rgba('white', 0.6)};

    padding: 15px 0;
`;

const StyledTitle = styled.h4`

    width: 100%;
    font-family: Montserrat, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 2.6rem;

    color: white;
    letter-spacing: 2px;

    
`;

const StyledImage = styled(Img)`

    flex: 1 1 30%;

    max-width: 250px;


`;

const StyledLink = styled(Link)`

    text-decoration: none;
    color: ${props => props.theme.colorMainBlueDark1}

`;


function Featured() {

    const data = useStaticQuery(graphql`
        query featuredPost {
            mdx(frontmatter: { featured: { eq: true }}) {
                id
                frontmatter {
     	            title
                    slug
                    date
                    author   
                    bkColor
                    headerImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }

                    }
                }   	    
            }

        }    
    `);

    const postData = data.mdx.frontmatter;

    const imageData = postData.headerImage.childImageSharp.fluid;

    return (
        <StyledContainer bgColor={postData.bkColor}>
            <StyledCenter>
                <StyledTitleContainer>
                    <StyledFeature>Artículo de Hoy</StyledFeature>
                    <StyledLink to={postData.slug}>
                        <StyledTitle>{postData.title}</StyledTitle>
                    </StyledLink>                    
                </StyledTitleContainer>
                <StyledImage fluid={imageData} />
            </StyledCenter>
        </StyledContainer>
    );
}

export default Featured;



