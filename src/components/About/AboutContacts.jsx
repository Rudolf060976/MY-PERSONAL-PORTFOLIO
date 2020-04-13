import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rgba } from 'polished';

const StyledContainer = styled.div`

   padding: 10px;

   grid-area: contact;

`;

const StyledList = styled.ul`

    width: 100%;

    display: flex;

    flex-flow: column nowrap;

    align-items: center;

    justify-content: space-between;

    list-style-type: none;

    

`;

const StyledListItem = styled.li`

    width: 100%;

    display: flex; 
    
    align-items: center;

`;

const StyledContactName =styled.span`

    font-size: 1rem;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    letter-spacing: 1px;

`;

const StyledListLink = styled.a`

    display: block;
    position: relative;
    min-width: 40px;
    width: 40px;
    height: 40px;
    background: ${props => rgba(props.theme.colorMainBlueGray, 0.5)};
    text-align: center;
    margin: 10px 0;
    border-radius: 50%;
    padding: 6px;
    box-sizing: border-box;
    text-decoration: none;
    box-shadow: 0px 0px 10px ${props => rgba(props.theme.colorMainBlueClear2, 1)};
    transition: all .2s linear;
    color: ${props => props.theme.colorMainBlueDark1};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    

    ul li &:hover {

        box-shadow: none;
        
        cursor: pointer;

    }

    ul li:nth-child(1) &:hover {

        color: ${props => props.theme.colorMainBlueGray};
    }

    ul li:nth-child(2) &:hover {

        color: #F4CBB2;
    }

    ul li:nth-child(3) &:hover {

        color: #007bb5;

    }

    & .fabIco {
        width: 80%;
        height: 80%;
        display: block;
        background-color: transparent;
        border-radius: 50%;
        font-size: 24px;


    }
    
`;


function AboutContacts({ data }) {
    return (
        <StyledContainer>
            <StyledList>
                <StyledListItem>
                    <StyledListLink href={`mailto: ${data.email}`} >
                        <FontAwesomeIcon className="fabIco" icon="envelope" size="lg" />
                    </StyledListLink>
                    <StyledContactName>
                        {data.email} 
                    </StyledContactName>                                      
                </StyledListItem>
                <StyledListItem>                   
                    <StyledListLink href={data.github} target="_blank">
                        <FontAwesomeIcon className="fabIco" icon={['fab', "github"]} size="lg" />
                    </StyledListLink>
                    <StyledContactName>
                        {data.github} 
                    </StyledContactName>                                                
                </StyledListItem>
                <StyledListItem>                   
                    <StyledListLink href={data.linkedin} target="_blank">
                        <FontAwesomeIcon className="fabIco" icon={['fab', "linkedin"]} size="lg" />
                    </StyledListLink>
                    <StyledContactName>
                        {data.linkedin} 
                    </StyledContactName>                              
                </StyledListItem>
            </StyledList>
        </StyledContainer>
    )
}

export default AboutContacts;
