import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

import { graphql, useStaticQuery } from 'gatsby';

import AboutCard from './AboutCard';

import AboutContacts from './AboutContacts';


const animationTitle = keyframes`

    from {

        transform: translateY(-600px);
        opacity: 0;
        
    }

    15% {

        transform: translateY(-500px);
        opacity: .10;

    }

    25% {

        transform: translateY(-400px);
        opacity: .20;

    }

    50% {

        transform: translateY(-300px);
        opacity: .45;

    }

    75% {

        transform: translateY(-150px);
        opacity: .75;

    }

    to {

        transform: translateY(0);
        opacity: 1;

    }

`;


const StyledContainer= styled.div`

    width: 100%;
    

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    transform: translateY(-600px);

    opacity: 0;

    animation-name: ${props => props.play ? animationTitle : 'none'};

    animation-duration: 1s;

    animation-iteration-count: 1;

    animation-fill-mode: forwards;

    @media (max-width: 850px ) {

        padding: 0 10px;

    }

    @media (max-width: 450px ) {

        padding: 0;

    }

`;


const StyledTitle = styled.h2`

    width: 450px;

    color: ${props => props.theme.colorMainBlueGray};

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    padding: 40px 0;

    text-align: center;

    @media (max-width: 500px) {

        width: 300px;


    }
              
`;

const StyledTitleSpan = styled.span`

    display: inline-block;

    padding: 10px 15px;

    /* background-color: ${props => props.theme.colorMainBlueClear1};

    color: ${props => props.theme.colorMainBlueDark2}; */

    background-color: ${props => props.theme.colorMainBlueDark1};

    color: ${props => props.theme.colorMainBlueClear2};

    border-radius: 5px;

`;

const StyledCenter = styled.div`

    width: 60%;

    /* height: 70%; */

    background-color: ${props => rgba(props.theme.colorMainBlueGray,0.1) };

    border-radius: 10px;

    /* box-shadow: 0px 0px 15px ${props => props.theme.colorMainBlueClear1}; */

    color: ${props => props.theme.colorMainBlueGray };

    padding: 30px 20px;

    display: grid;

    grid-template-areas:
    "card   card    title   title   contact"
    "card   card    content content contact"
    "card   card    content content contact";

    grid-template-columns: 170px 170px 1fr 1fr 1fr;

    grid-template-rows: .5fr 1fr 1fr;

    gap: 10px 20px;


    @media (max-width: 2100px ) {

        width: 70%;

        grid-template-rows: .3fr 1fr 1fr;

    }

    @media (max-width: 1700px ) {

        width: 80%;


    }

    @media (max-width: 1400px ) {

        width: 90%;


    }


    @media (max-width: 1200px ) {

        width: 80%;

        grid-template-areas:
            "card   card    title   title  "
            "card   card    content content"
            "card   card    contact contact";

        grid-template-columns: 170px 170px 1fr 1fr;

        grid-template-rows: .2fr .7fr .5fr;

        padding: 30px 30px;
        
    }

    @media (max-width: 1000px ) {

        width: 90%;

    }

    @media (max-width: 850px ) {

        width: 100%;

    }

    @media (max-width: 750px ) {

        width: 80%;

        grid-template-areas:
            "card   card"
            "card   card"
            "title  title"            
            "content content"
            "contact contact"
            "contact contact";

        grid-template-columns: 170px 170px;

        grid-template-rows: 1fr 1fr .2fr .5fr .4fr .5fr;

        justify-content: center;

        gap: 10px 0px;

    }

    @media (max-width: 600px ) {

        width: 100%;

    }

    @media (max-width: 450px ) {

        padding: 30px 10px;

        grid-template-columns: 150px 150px;

    }



`;

const StyledContentTitle = styled.h5`

    grid-area: title;

    color: white;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    letter-spacing: 1px;

    font-size: 2.2rem;


    @media (max-width: 450px ) {

        padding: 0 5px;

    }

    

`;

const StyledContentDataContainer = styled.div`

    grid-area: content;

    @media (max-width: 450px ) {

        padding: 0 5px;

    }

`;

const StyledContentDataP = styled.p`

    padding: 15px 10px 0 0;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 1.4rem;

    line-height: 2rem;

    @media (max-width: 1100px ) {

        font-size: 1.6rem;

        line-height: 2.2rem;

    }

    @media (max-width: 750px ) {

        font-size: 1.8rem;

        line-height: 2.4rem;

    }

    @media (max-width: 450px ) {

        font-size: 2rem;

        line-height: 2.6rem;

        padding: 5px 0;

    }

`;


function AboutContent() {

    const containerElement = useRef(null);

    const [play, setPlay] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

    return () => {
        
        window.removeEventListener('scroll', handleScroll);

    };
    }, [])


    const handleScroll = () => {
     
        
        const introPosition = containerElement.current.getBoundingClientRect().top;
        // console.log('introPosition: ', introPosition);

        const screenHeight = window.innerHeight;

        // console.log('screenHeight: ', screenHeight);

        

        if (introPosition + 650 < screenHeight) {
            //console.log('ESTOY AQUI');
            if(!play) setPlay(true);

        } else if (introPosition  > screenHeight) {
            setPlay(false);
        }

    };

   

    const data = useStaticQuery(graphql`    
        query {
            allAboutJson {
                nodes {
                    id
                    title
                    p1
                    p2
                    p3
                    email
                    github
                    linkedin
                }
            }
        }    
    `);

    const pageData = data.allAboutJson.nodes[0];

    const {
        title,
        p1,
        p2,
        p3,
        email,
        github,
        linkedin
    } = pageData;

    const contactData = {
        email,
        github,
        linkedin
    };

    return (
        <StyledContainer ref={containerElement} play={play} >
             <StyledTitle>
                - ABOUT  <StyledTitleSpan>ME</StyledTitleSpan> -
            </StyledTitle>
            <StyledCenter>
                <AboutCard data={contactData}/>
                <StyledContentTitle>{title}</StyledContentTitle>
                <StyledContentDataContainer>
                    <StyledContentDataP>{p1}</StyledContentDataP>
                    <StyledContentDataP>{p2}</StyledContentDataP>
                    <StyledContentDataP>{p3}</StyledContentDataP>
                </StyledContentDataContainer>
                <AboutContacts data={contactData} />
            </StyledCenter>
        </StyledContainer>
    )
}

export default AboutContent;
