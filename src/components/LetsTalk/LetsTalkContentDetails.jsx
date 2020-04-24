import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import image from '../../images/LOCATION-IMAGE-PNG.png';
import { graphql, useStaticQuery } from 'gatsby';
import LetsTalkContactIcons from './LetsTalkContactIcons';
import { rgba } from 'polished';


const iconAnimation = keyframes`

    from {
        transform: rotateY(0deg);
        
    }


    to {

        transform: rotateY(180deg);

    }

`;

const phoneAnimation = keyframes`

    from {

        color: ${props => props.theme.colorMainBlueGray};

        transform: scale(1);

        text-shadow: none;

    }

    to {

        color: white;

        transform: scale(1.2);

        text-shadow: 0px 0px 5px white;

    }

`;

const StyledContainer = styled.div`

    width: 100%;
    

    display: flex;

    justify-content: center;
    align-items: flex-start;

    padding-top: 200px;

    @media (max-width: 1600px) {
        padding-top: 160px;
        
    }

    @media (max-width: 900px) {
        padding-top: 140px;
        
    }

`;

const StyledCenter = styled.div`

    width: 50%;

    background-color: white;

    padding: 40px 0;

    border-radius: 15px;  

    background-color: ${props => rgba(props.theme.colorMainBlueDark2, .4)};

    @media (max-width: 1600px) {
        width: 60%;

    }

    @media (max-width: 1100px) {
        width: 70%;

    }

    @media (max-width: 650px) {
        width: 80%;

    }

    @media (max-width: 540px) {
        width: 90%;
        padding: 40px 15px;

    }


`;

const StyledLocationIconContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`;

const StyledLocationIcon = styled.img`

    max-width: 4rem;

    transform-style: preserve-3d;

    animation-name: ${ props => (props.play && !props.stop) ? iconAnimation : 'none'};

    animation-iteration-count: infinite;

    animation-duration: 1s;    

    &:hover {

        cursor: pointer;

    }

`;

const StyledAddress = styled.p`

    text-align: center;
    color: ${props => props.theme.colorMainBlueGray};
    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 1.8rem;
    letter-spacing: 2px;

    padding: 20px 0 10px 0;

`;

const StyledPhone = styled.p`

    text-align: center;
    color: ${props => props.theme.colorMainBlueGray};
    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 1.8rem;
    letter-spacing: 2px;
    padding: 10px 0;

    animation-name: ${props => props.enphasis ? phoneAnimation : 'none'};
    animation-duration: .5s; 
    animation-fill-mode: forwards;

    
`;

const StyledEmailContainer = styled.p`

    text-align: center;
    color: ${props => props.theme.colorMainBlueGray};
    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 1.8rem;
    padding: 10px 0;
    letter-spacing: 2px;

    @media (max-width: 540px) {
        line-height: 3.4rem;
    }

`;

const StyledEmail = styled.a`

    text-decoration: underline;

    color: ${props => props.theme.colorMainBlueClear2};

    transition: all .3s linear;

    cursor: pointer;

    &:hover {

        color: ${props => props.theme.colorMainBlueClear1};
        text-decoration: none;

    }

`;

const StyledDownloadLinkContainer = styled.p`

    text-align: center;
    color: ${props => props.theme.colorMainBlueGray};
    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 1.8rem;
    padding: 30px 0;
    letter-spacing: 2px;

    @media (max-width: 540px) {
        line-height: 3.4rem;
    }

`;


const StyledDownloadLink = styled.a`

    text-decoration: underline;

    color: ${props => props.theme.colorMainBlueClear2};

    transition: all .3s linear;

    cursor: pointer;

    &:hover {

        color: ${props => props.theme.colorMainBlueClear1};
        text-decoration: none;

    }


`;


function LetsTalkContentDetails({ play, enphasis }) {

    const [stop, setStop] = useState(false);

    const data = useStaticQuery(graphql`    
    query {
        allAboutJson {
            nodes {
                id                
                email
                github
                linkedin
                skype
                address
                phone
            }
        }
    }    
`);

const pageData = data.allAboutJson.nodes[0];

const {
    email,
    github,
    linkedin,
    skype,
    address,
    phone
} = pageData;

const contactData = {
    github,
    linkedin,
    skype
};


const handleIconMouseHoover = (value) => {

    setStop(value);

}


    return (
        <StyledContainer>
            <StyledCenter>
                <StyledLocationIconContainer>
                    <StyledLocationIcon src={image} play={play} stop={stop} onMouseEnter={(e) => handleIconMouseHoover(true)} onMouseLeave={(e) => handleIconMouseHoover(false)} />
                </StyledLocationIconContainer>
                <StyledAddress>{address}</StyledAddress>
                <StyledPhone enphasis={enphasis}>{phone}</StyledPhone>
                <LetsTalkContactIcons data={contactData} />
                <StyledEmailContainer>
                    Please drop me a line at <StyledEmail href={`mailto: ${data.email}`} >{email}</StyledEmail>                
                </StyledEmailContainer>
                <StyledDownloadLinkContainer>
                    <StyledDownloadLink href="/RAFAEL_URBINA.pdf" download>
                        Download my Resume in PDF here
                    </StyledDownloadLink>
                </StyledDownloadLinkContainer>                
            </StyledCenter>
        </StyledContainer>
    );
}

export default LetsTalkContentDetails;
