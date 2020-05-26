import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

const textAnimation = keyframes`

    from {

        opacity: 0;

        transform: translateX(-50rem);

    }

    50% {

        transform: translateX(-30rem);

        opacity: 0;
    }

    75% {

        transform: translateX(-15rem);

        opacity: 0;

    }

    to {

        transform: translateX(0);

        opacity: 1;
    }

`;

const buttonAnimation = keyframes`

    from {

        transform: scale(1);

    }

    50% {

        transform: scale(1.2);

    }

    to {

        transform: scale(1);
    }
   
`;

const titleAnimation = keyframes`

    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-30px);
    }

`;


const StyledContainer = styled.div`

    grid-area: ${props => props.gridArea};

    width: 80%;

    padding: 45px 30px;

    opacity: 0;

    animation-name: ${props => props.play ? textAnimation : 'none' };

    animation-duration: 1.3s;

    animation-delay: ${props => props.animDelay || '0s'};

    animation-fill-mode: forwards;

    animation-timing-function:ease-out;

     @media (max-width: 2200px) {

        width: 90%;


    }

     @media (max-width: 1670px) {

        width: 100%;


    }

     @media (max-width: 700px) {

        padding: 45px 10px;


    }

     @media (max-width: 500px) {

        padding: 45px 15px;


    }

`;

const StyledTitle = styled.h4`

    width: 100%;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 2.8rem;

    color: ${props => props.theme.colorMainBlueGray};
    letter-spacing: 2px;

    padding: 0;

    padding-top: 20px;

    line-height: 3.6rem;

    animation-name: ${props => props.play ? titleAnimation : 'none' };

    animation-duration: .5s;

    animation-delay: ${props => props.buttonsDelay || '0s'};

    animation-fill-mode: forwards;

    animation-timing-function:ease-out;

      @media (max-width: 750px) {

        padding-top: 0;


    }

`;

const StyledDescription = styled.h6`

    width: 100%;
    font-family: 'Open Sans', sans-serif, Verdana, Geneva, Tahoma;
    font-size: 1.6rem;
    color: ${props => props.theme.colorMainBlueClear2};
    letter-spacing: 1px;
    padding: 10px 0;

    line-height: 2.4rem;

      @media (max-width: 1600px) {

        font-size: 1.8rem;

        line-height: 2.5rem;

        padding-top: 0;

        margin-top: -10px;


    }

    @media (max-width: 1300px) {

        line-height: 2.6rem;


    }

    @media (max-width: 900px) {

        font-size: 2rem;

        line-height: 2.7rem;


    }

     @media (max-width: 900px) {

       
        line-height: 2.8rem;


    }

      @media (max-width: 900px) {

       
        font-size: 2.1rem;

        line-height: 3rem;



    }
    
  

`;

const StyledList = styled.ul`

    width: 100%;

    font-family: 'Open Sans', sans-serif, Verdana, Geneva, Tahoma;
    

    color: ${props => props.theme.colorMainBlueGray};
    letter-spacing: 1px;

    padding: 10px 0 10px 20px;

    

`;

const StyledListItem = styled.li`

    width: 100%;
    font-size: 1.4rem;

    padding: 5px 0;

    @media (max-width: 750px) {

        font-size: 1.8rem;

    }

`;

const StyledButtonsContainer = styled.div`

    padding: 10px 0 0 20px;

    display: flex;

    justify-content: flex-start;

    align-items: center;

    @media (max-width: 750px) {

        padding-left: 0;

    }

`;


const StyledButton = styled.button`

    border-radius: 5px;

    border: none;

    padding: 8px 15px;

    transition: all .3s linear;

    background-color: ${props => props.theme.colorMainBlueDark3};

    color: ${props => props.theme.colorMainBlueGray};

    border: 1px solid transparent;

    &:hover {

        background-color: ${props => props.theme.colorMainBlueDark1};

        color: ${props => props.theme.colorMainBlueClear2};

        border: 1px solid ${props => rgba(props.theme.colorMainBlueGray,.4)};

        cursor: pointer;

    }


    &:focus {

        outline: none;

    }

    transform: scaleX(1);

    margin-right: 20px;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 1.4rem;

    animation-name: ${props => props.play ? buttonAnimation : 'none' };

    animation-duration: 1s;

    animation-delay: ${props => props.buttonsDelay || '0s'};

    animation-fill-mode: forwards;

     @media (max-width: 750px) {

        font-size: 1.8rem;

    }

`;

const StyledProjectLink = styled.a`

    


`;


const StyledLink = styled.a`

    padding: 5px 10px;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 1.4rem;

    color: ${props => props.theme.colorMainBlueGray};

    transform: scaleX(1);

    animation-name: ${props => props.play ? buttonAnimation : 'none' };

    animation-duration: 1s;

    animation-delay: ${props => props.buttonsDelay || '0s'};

    animation-fill-mode: forwards;

    text-decoration: underline;

    transition: all .3s linear;

    &:hover {

        text-decoration: none;

        color: ${props => props.theme.colorMainBlueClear2};

        cursor: pointer;

    }

     @media (max-width: 750px) {

        font-size: 1.8rem;

    }

    

`;


function ProjectDataItem({ gridArea, data, animDelay, play, buttonsDelay }) {

    const listData = data.tools.map((item, index) => {

        return (<StyledListItem key={index} >{item.name}</StyledListItem>);

    });


    return (
        <StyledContainer gridArea={gridArea} animDelay={animDelay} play={play} >
            <StyledTitle play={play} buttonsDelay={buttonsDelay}>{ data.title }</StyledTitle>  
            <StyledDescription>{ data.description }</StyledDescription>
            <StyledList>
                { listData }
            </StyledList>            
            <StyledButtonsContainer>
                <StyledProjectLink href={data.pageUrl} target="_blank">
                    <StyledButton buttonsDelay={buttonsDelay} play={play}>Visit Project</StyledButton>
                </StyledProjectLink>                
                <StyledLink href={data.githubUrl} target="_blank" buttonsDelay={buttonsDelay} play={play}>GitHub Project</StyledLink>
            </StyledButtonsContainer>
        </StyledContainer>
    );
}

export default ProjectDataItem;
