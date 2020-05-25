import React, { useEffect } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import MobileToolboxItem from './MobileToolboxItem';
import { Link, Events, scrollSpy } from 'react-scroll';

const StyledContainer = styled.nav`

    display: none;

    position: fixed;

    bottom: 0;

    left: 0;

    width: 100%;

    height: 60px;

    z-index: 5000;

    
    @media (max-width: 600px ) {

        display: block;         

        background-color: ${props => rgba(props.theme.colorGreenDark, 0.8)};

        //border-top: 1px solid white;

    }


`;


const StyledList = styled.ul`

    width: 100%;

    height: 100%;

    list-style-type: none;

    display: flex;

    justify-content: space-around;

    align-items: center;

    padding: 0;

`;

const StyledLinkComponent = styled(Link)`

    display: block;

    width: 100%;
        
    height: 100%;

    text-decoration: none;

    display: flex;

    justify-content: center;

    align-items: center;

    transition: all .2s linear;

    &:hover {

        background-color: ${props => rgba(props.theme.colorGreenLight2, 0.8)};

        cursor: pointer;

    }

    &:active {

        background-color: ${props => rgba(props.theme.colorGreenLight2, 0.8)};

        cursor: pointer;

    }

`;

function MobileToolbox({ itemsData }) {

    useEffect(() => {
        
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
          });
       
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
          });
       
        scrollSpy.update();


        return () => {
            
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');

        }
    },[]);

    const itemsArray = itemsData.map(item => {

        const {iconName, iconDescription, linkTo } = item;

        return (
            <MobileToolboxItem key={item.iconName} iconName={iconName} iconDescription={iconDescription} linkTo={linkTo} LinkComponent={StyledLinkComponent} />
        );


    });

    return (
        <StyledContainer>
            <StyledList>
                {itemsArray}
            </StyledList>
        </StyledContainer>
    )
}

export default MobileToolbox
