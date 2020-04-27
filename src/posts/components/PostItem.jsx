import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const StyledContainer = styled(Link)`

    grid-column: auto;
    grid-row: auto;

    width: 100%;
    min-width: 200px;

    background-color: ${props => props.bgColor};

    border-radius: 10px;

    text-decoration: none;

    transition: all .1s linear;

    &:hover {

        

        box-shadow: 0px 5px 5px gray;

    }

`;

const StyledImageContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    height: 250px;

`;

const StyledImage = styled(Image)`

    
    width: 200px;
    

`;

const StyledDescriptionContainer = styled.div`

    width: 100%;

    height: 120px;

    background-color: ${props => props.theme.colorMainBlueClear1};

    border-radius: 0px 0px 10px 10px;

    padding: 20px 20px

`;

const StyledCategory = styled.p`

    width: 100%;
    text-align: center;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 16px;
    padding: 5px;

    color: whitesmoke;

`;

const StyledTitle = styled.p`

    width: 100%;
    text-align: center;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 20px;

    color: white;

`;

function PostItem({ post }) {

    const imageData = post.frontmatter.headerImage.childImageSharp.fixed;

    return (
        <StyledContainer to={post.frontmatter.slug} bgColor={post.frontmatter.bkColor}>
            <StyledImageContainer>
                <StyledImage fixed={imageData} />
            </StyledImageContainer>
            <StyledDescriptionContainer>
                <StyledCategory>{post.frontmatter.category}</StyledCategory>
                <StyledTitle>{post.frontmatter.title}</StyledTitle>
            </StyledDescriptionContainer>
        </StyledContainer>
    )
}

export default PostItem;
