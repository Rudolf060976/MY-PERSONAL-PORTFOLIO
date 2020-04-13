import React from 'react';
import styled from 'styled-components';
import img1 from '../../images/CARD-TOP2.jpg';
import Logo from '../../images/LINKEDIN-Logo.png';

import foto from '../../images/FOTO.jpg';

import { linearGradient } from 'polished';


const StyledContainer = styled.div`

    width: 100%;

    grid-area: card;
    
    display: flex;

    justify-content: center;
    align-items: center;

    padding: 20px 0;

`;

const StyledCardContainer = styled.div`
    min-width: 320px;
    width: 320px;
    height: 450px;
    background-image: url(${img1});
    background-repeat: no-repeat;
    background-position-y: -220px;
    
    background-color: ${props => props.theme.colorMainBlueGray};
    
    position: relative;

    box-shadow: 1px 1px 10px ${props => props.theme.colorMainBlueClear1};

    border-radius: 5px;

`;

const StyledImage = styled.img`

    position: absolute;

    top: 35%;
    left: 50%;

    transform: translate(-50%,-50%);

    max-width: 150px;

    border-radius: 100px;
    border: 3px solid ${props => props.theme.colorMainBlueDark3};



`;

const StyledDataContainer = styled.div`

    position: absolute;

    width: 280px;

    top: 75%;
    left: 50%;

    transform: translate(-50%,-50%);

    color: ${props => props.theme.colorMainBlueDark2};

`;

const StyledDataName = styled.h6`

    width: 100%;
    text-align: center;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;
    
    padding-bottom: 5px;

`;

const StyledDataTitle = styled.p`

    width: 100%;
    text-align: center;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 1.2rem;

     

`;

const StyledDataTitle2 = styled.p`

    width: 100%;
    text-align: center;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 1rem;

    font-weight: bold;

    padding: 5px 0;

`;

const StyledLogoContainer = styled.div`

    width: 100%;

    display: flex;
    flex-flow: column nowrap;

    justify-content: center;
    align-items: center;

`;

const StyledLogo = styled.img`

    max-width: 80px;
    
`;

const StyledButton = styled.button`

    border: none;

    border-radius: 5px;

    padding: 5px 15px;

    background-color: ${props => linearGradient({ colorStops: [props.theme.colorMainBlueDark1,props.theme.colorMainBlueDark3], toDirection: 'to right'})};

    color: ${props => props.theme.colorMainBlueGray};

    margin: 5px 0 10px 0;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 1.2rem;

    transition: all .3s linear;

    &:hover {

        background-color: ${props => linearGradient({ colorStops: [props.theme.colorMainBlueDark3,props.theme.colorMainBlueDark1], toDirection: 'to right'})};

        color: ${props => props.theme.colorMainBlueClear2};

        cursor: pointer;

    }


    &:focus {

        outline: none;
    }

`;

const StyledLink = styled.a`

   

`;



function AboutCard({ data }) {
    return (
        <StyledContainer>
            <StyledCardContainer>
                <StyledImage src={foto} />
                <StyledDataContainer>
                    <StyledDataName>Rafael E. Urbina N.</StyledDataName>
                    <StyledDataTitle>Full Stack Web Developer</StyledDataTitle>
                    <StyledDataTitle>&</StyledDataTitle>
                    <StyledDataTitle>Electronics Engineer</StyledDataTitle>
                    <StyledDataTitle2>Freelancer</StyledDataTitle2>
                    <StyledLogoContainer>
                        <StyledLink href={data.linkedin} target="_blank">
                            <StyledButton>View Profile</StyledButton>    
                        </StyledLink>                                       
                        <StyledLogo src={Logo} />
                    </StyledLogoContainer>                    
                </StyledDataContainer>                
            </StyledCardContainer>
        </StyledContainer>
    );
}

export default AboutCard;
