import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PostAuthorData from './PostAuthorData';


const StyledContainer = styled.div`

    width: 100%;
    
    background-color: ${props => props.bgColor};    

    display: flex;

    justify-content: center;

    align-items: center;

    padding: 50px 10px 30px 0;

    @media (max-width: 600px) {

        padding-top: 30px;

    }

`;

const StyledCenter = styled.div`

    width: 50%;

    display: flex;

    justify-content: space-between;

    align-items: center;

   

     @media (max-width: 1200px) {

        width: 60%;

    }

     @media (max-width: 900px) {

        width: 70%;

    }

      @media (max-width: 700px) {

        width: 75%;

    }
    

     @media (max-width: 600px) {

        width: 80%;

        flex-flow: column nowrap;

        justify-content: center;

        align-items: center;

    }

`;

const StyledTitleContainer = styled.div`

    flex: 2 1 70%;

    margin-right: 20px;

      @media (max-width: 600px) {

        flex: 1 1 100%;
        margin-right: 0;
        padding-top: 20px;


    }


`;

const StyledTitle = styled.h4`

    width: 100%;
    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 2.6rem;

    color: ${props => props.theme.colorMainBlueDark2};
    letter-spacing: 2px;
    line-height: 4rem;

      @media (max-width: 600px) {

        text-align: center;


    }
    
`;



const StyledImage = styled(Img)`

    flex: 1 1 30%;

    max-width: 250px;

    min-width: 150px;

     @media (max-width: 600px) {

        flex: 1 1 100%;
        order: -1;

    } 


`;



function Featured({ postData }) {
        

    const imageData = postData.frontmatter.headerImage.childImageSharp.fluid;

    const authorData = {
          authorImageData: postData.frontmatter.authorImage.childImageSharp.fixed,
          postDate: postData.frontmatter.date,
          authorName: postData.frontmatter.author      
    };


    return (
        <StyledContainer bgColor={postData.frontmatter.bkColor}>
            <StyledCenter>
                <StyledTitleContainer>
                    <StyledTitle>{postData.frontmatter.title}</StyledTitle>
                    <PostAuthorData authorData={authorData} />               
                </StyledTitleContainer>
                <StyledImage fluid={imageData} />
            </StyledCenter>
        </StyledContainer>
    );
}

export default Featured;



