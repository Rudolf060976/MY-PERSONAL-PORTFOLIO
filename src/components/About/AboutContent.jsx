import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { graphql, useStaticQuery } from 'gatsby';

import AboutCard from './AboutCard';

import AboutContacts from './AboutContacts';





const StyledContainer= styled.div`

    width: 100%;
    

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

`;


const StyledTitle = styled.h2`

    width: 450px;

    color: ${props => props.theme.colorMainBlueGray};

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    padding: 40px 0;

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

    height: 70%;

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

    grid-template-columns: .5fr .5fr 1fr 1fr 1fr;

    grid-template-rows: .5fr 1fr 1fr;

    gap: 10px 20px;


`;

const StyledContentTitle = styled.h5`

    grid-area: title;

    color: white;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    letter-spacing: 1px;

    font-size: 2.2rem;

`;

const StyledContentDataContainer = styled.div`

    grid-area: content;

`;

const StyledContentDataP = styled.p`

    padding: 15px 10px 0 0;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 1.4rem;

    line-height: 2rem;

`;


function AboutContent() {

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
        <StyledContainer>
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
