import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {rgba} from 'polished';


const StyledContainer = styled.div`

    width: 100%;
      
    display: flex;

    justify-content: center;

    align-items: center;

    background-color: ${props => rgba(props.theme.colorMainBlueGray,0.2)};

`;

const StyledCenter = styled.div`

    width: 70%;

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 20px 0;

`;

const StyledImage = styled(Img)`

    flex: 0 0 60px;
    width: 60px;

    border-radius: 50%;

`;

const StyledDataContainer = styled.div`

    flex: 1 1 100%;
    
    padding: 10px 20px;

`;

const StyledName = styled.p`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;

`;

const StyledAbout = styled.p`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 14px;
    line-height: 20px;

`;

const StyledLink = styled.a`

    color: ${props => props.theme.colorMainBlueClear1};

    &:hover {

        cursor: pointer;
        color: ${props => props.theme.colorMainBlueClear2};

    }


`;


function PostAuthorFootInfo({ authorData }) {
    return (
        <StyledContainer>
            <StyledCenter>
                <StyledImage fixed={authorData.authorImageFixed} />
                <StyledDataContainer>
                <StyledName>{authorData.author}</StyledName>    
                    <StyledAbout>
                        {authorData.aboutAuthor}
                        <br/>
                        <StyledLink href={authorData.authorWebsite} target="_blank">Entra en su Website</StyledLink>
                    </StyledAbout>
                </StyledDataContainer>    
            </StyledCenter>            
        </StyledContainer>
    );
}

export default PostAuthorFootInfo;
