import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledContainer = styled.div`

    display: flex;

    justify-content: flex-start;

    align-items: center;

    padding: 30px 0 0 0;

`;

const StyledImage = styled(Img)`

    border-radius: 50%;

    min-width: 60px;


`;

const StyledDataContainer = styled.div`

    padding: 0 0 0 20px;

`;


const StyledAuthorName = styled.p`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 18px;
    color: ${props => props.theme.colorMainBlueDark3};
    font-weight: bold;

    @media (max-width: 1100px) {

        font-size: 16px;

    }

    @media (max-width: 900px) {

        font-size: 14px;

    }

    @media (max-width: 600px) {

        font-size: 12px;

    }

`;

const StyledDate = styled.p`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 14px;
    padding: 5px 0;
    color: ${props => props.theme.colorMainBlueDark3};

     @media (max-width: 1100px) {

        font-size: 12px;

    }

    

`;



function PostAuthorData({ authorData }) {

    const {
        authorImageData,
        authorName,
        postDate
    } = authorData;

    return (
        <StyledContainer>
            <StyledImage fixed={authorImageData} />
            <StyledDataContainer>
                <StyledAuthorName>{authorName}</StyledAuthorName>
                <StyledDate>{postDate}</StyledDate>
            </StyledDataContainer>
        </StyledContainer>
    );
}

export default PostAuthorData;
