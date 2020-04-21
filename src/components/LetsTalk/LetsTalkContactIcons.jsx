import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rgba } from 'polished';

const StyledContainer = styled.div`

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

`;

const StyledList = styled.ul`

    width: 30%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

    padding: 40px 0;

    @media (max-width: 1400px) {
       
        width: 40%;

    }

    @media (max-width: 800px) {
       
        width: 50%;

    }

    @media (max-width: 540px) {
       
        width: 60%;

    }

    @media (max-width: 450px) {
       
       width: 70%;

   }

   @media (max-width: 400px) {
       
       width: 80%;

   }

   @media (max-width: 350px) {
       
       width: 90%;

   }


`;


const StyledListItem = styled.li`

    flex: 1 1 100%;

    display: flex;

    justify-content: center;

    align-items: center;

   

`;

const StyledListLink = styled.a`

    display: block;
    position: relative;
    min-width: 60px;
    width: 60px;
    height: 60px;
    background: ${props => rgba(props.theme.colorMainBlueGray, 0.5)};
    text-align: center;    
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
    

    ul li &:hover {

        box-shadow: none;
        
        cursor: pointer;

    }

    ul li:nth-child(1) &:hover {
        
        
        color: #007bb5;
    }

    ul li:nth-child(2) &:hover {

        color: ${props => props.theme.colorMainBlueGray};
       
    }

    ul li:nth-child(3) &:hover {

        color: #F4CBB2;

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


function LetsTalkContactIcons({ data }) {

    
    return (
        <StyledContainer>
            <StyledList>
                <StyledListItem>
                    <StyledListLink href={data.linkedin} target="_blank">
                        <FontAwesomeIcon className="fabIco" icon={['fab', "linkedin"]} size="lg" />
                    </StyledListLink>
                </StyledListItem>      
                <StyledListItem>
                    <StyledListLink href={data.github} target="_blank">
                        <FontAwesomeIcon className="fabIco" icon={['fab', "github"]} size="lg" />
                    </StyledListLink>
                </StyledListItem>
                                     
            </StyledList>
        </StyledContainer>
    );
}

export default LetsTalkContactIcons;
