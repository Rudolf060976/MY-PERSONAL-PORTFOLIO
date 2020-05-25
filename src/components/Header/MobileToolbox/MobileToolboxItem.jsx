import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledContainer = styled.li`

    width: 20%;
    height: 100%;;
    
       

`;

const StyledCenter = styled.div`

    height: 100%;

    display: flex;

    flex-flow: column nowrap;

    justify-content: center;

    align-items: center;


`;

const StyledIconSpan = styled.span`

    display: block;
        
    font-size: 20px;

`; 

const StyledName = styled.p`

    width: 100%;

    text-align: center;

    padding: 5px 0;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 12px;
`;


function MobileToolboxItem({ iconName, iconDescription, linkTo, LinkComponent }) {
    return (
        <StyledContainer>
            <LinkComponent to={linkTo} smooth={true} duration={700} >
                <StyledCenter>
                    <StyledIconSpan>
                        <FontAwesomeIcon icon={iconName} size="lg" />
                    </StyledIconSpan>
                    <StyledName>{iconDescription}</StyledName>       
                </StyledCenter>                     
            </LinkComponent>            
        </StyledContainer>
    )
}

export default MobileToolboxItem;
