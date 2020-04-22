import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, Events, scrollSpy } from 'react-scroll';
import { rgba } from 'polished';

const StyledContainer = styled.div`

    width: 100%;

    padding: 250px 0;

`;

const StyledCenter = styled.div`

    width: 100%;

    background-color: ${props => rgba(props.theme.colorMainBlueDark2, .7)};

    display: flex;

    justify-content: center;

    align-items: center;

`;


const StyledLink = styled(Link)`

    cursor: pointer;

    display: block;
    
    padding: 20px 0;

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 3rem;

    color: ${props => props.theme.colorMainBlueGray};

    letter-spacing: 2px;

    &:hover {
        color: ${props => props.theme.colorMainBlueClear2};
        

    }

    &:active {
        color: ${props => props.theme.colorMainBlueClear2};
        

    }
`;


function GoHome() {


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


    return (
        <StyledContainer>
            <StyledCenter>
                <StyledLink to="masthead" smooth={true} duration={600}>GO HOME</StyledLink>
            </StyledCenter>
        </StyledContainer>
    );
}

export default GoHome;
