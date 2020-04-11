import React from 'react';
import styled, { keyframes } from 'styled-components';
import NameAnimated from './NameAnimated';


const azulNeon = keyframes`

    0%, 10%, 15%, 20%, 30%, 35%, 40%, 50%, 55%, 60%, 70%, 75%, 80%, 85%, 90%, 100% {
        text-shadow: 9px 9px 18px #66CAF2, 3px 3px 5px #325A73, -3px -3px 5px #325A73, -9px -9px 27px #66CAF2;
    }

    10%, 15%, 60% {
        text-shadow: none;
    }

`;



const StyledContainer = styled.div`

    width: 100%;
    height: 80%;
    
    display: flex;
    justify-content: center;
    align-items: center;
   

`;

const StyledCenter = styled.div`

    width: 50%;
    
    padding: 10px 10px;

`;



const StyledTitle = styled.h3`

    padding: 20px 0;
    text-shadow: 0 0 20px ${props => props.theme.colorMainBlueClear2};
    letter-spacing: 2px;

    font-family: Rubik;

    color: ${props => props.theme.colorMainBlueDark1};

    animation-name: ${azulNeon};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

`;

const StyledComment = styled.h4`

    padding: 10px 0;

    color: ${props => props.theme.colorMainBlueGray};
    letter-spacing: 2px;

`;


function Content({ siteMetadata }) {
    return (
        <StyledContainer>
            <StyledCenter>
                <NameAnimated />                
                    <StyledTitle>{ siteMetadata.subtitle }</StyledTitle>
                    <StyledComment>{ siteMetadata.description }</StyledComment>                      
            </StyledCenter>
        </StyledContainer>
    );
}

export default Content;
