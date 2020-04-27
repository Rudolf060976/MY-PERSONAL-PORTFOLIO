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


`;

const StyledDataContainer = styled.div`

    padding: 0 0 0 20px;

`;


const StyledAuthorName = styled.p`

    font-family: 'Montserrat', sans-serif, Verdana, Geneva, Tahoma;
    font-size: 18px;
    color: ${props => props.theme.colorMainBlueDark3};
    font-style: italic;

`;

const StyledDate = styled.p`

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 14px;
    padding: 5px 0;
    color: ${props => props.theme.colorMainBlueDark3};

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
