import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'gatsby-image';


const StyledContainer = styled.span`

    display: inline-flex;

    flex-flow: column nowrap;

    align-items: center;

    justify-content: space-between;

    width: 80px;
    
    height: 100px;

    @media (max-width: 1250px) {


        min-width: 120px;

        margin: 15px 0;

    }

     @media (max-width: 410px) {


        min-width: 90px;

        margin: 15px 0;

    }

`;

const StyledTitle = styled.span`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 1.2rem;

    /* color: ${props => props.theme.colorMainBlueGray}; */

    color: white;

    text-align: center;

    letter-spacing: 1px;

    padding-top: 10px;

    
     @media (max-width: 900px) {

        font-size: 1.4rem;      

    }

     @media (max-width: 500px) {

        font-size: 1.6rem;      

    }

`;

const StyledImage = styled(Image)`

    


`;


function SkillsLastItem({ titleName, image }) {
    return (
        <StyledContainer>                  
            <StyledImage fixed={image} />
            <StyledTitle>{titleName}</StyledTitle>
        </StyledContainer>
    );
}

export default SkillsLastItem;
