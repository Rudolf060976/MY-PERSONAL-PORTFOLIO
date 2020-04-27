import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';
import { Link, gatsby, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const StyledContainer = styled.div`

    width: 100%;
    background-color: ${props => props.theme.colorMainBlueGray};

`;

const StyledMenu = styled.ul`

    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding: 10px 0;
    
`;

const StyledMenuItem = styled.li`




`;

const StyledMenuLink = styled(Link)`

    display: block;
    padding: 10px 15px;
    font-family: Montserrat, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 1.4rem;
    color: ${props => props.theme.colorMainBlueDark3};
    cursor: pointer;
    font-weight: ${props => props.selected ? 'bold' : 'normal'};

    transition: ${props => props.theme.mainTransition};

    text-decoration: none;

    &:hover {

        color: ${props => props.theme.colorMainBlueClear1};

    }

    
`;

const StyledFirstMenuLink = styled(Link)`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 15px;
    font-family: 'Lilita One', sans-serif, Verdana, Geneva, Tahoma;
    font-size: 1.4rem;
    color: ${props => props.theme.colorMainBlueDark3};
    cursor: pointer;
    font-weight: ${props => props.selected ? 'bold' : 'normal'};

    transition: ${props => props.theme.mainTransition};

    text-decoration: none;

    &:hover {

        color: ${props => props.theme.colorMainBlueClear1};

    }

    
`;

const StyledImage = styled(Img)`

    

`;


function Menu({ selectedIndex }) {

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "LOGO_RAFAEL_SOLO.png"}) {
                childImageSharp {
                    fixed(width:50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }    
    `);

    const imageData = data.file.childImageSharp.fixed;

    return (
        <StyledContainer>
            <StyledMenu>
                <StyledMenuItem>
                    <StyledFirstMenuLink to="/" selectedIndex={selectedIndex}>
                        <StyledImage fixed={imageData}/>
                        AFAEL U.
                    </StyledFirstMenuLink>
                </StyledMenuItem>    
                <StyledMenuItem>
                    <StyledMenuLink to="/blog" selected={selectedIndex === 1}>
                        Artículos Recientes
                    </StyledMenuLink>
                </StyledMenuItem>          
                <StyledMenuItem>
                    <StyledMenuLink to="/auto-aprendizaje" selected={selectedIndex === 2}>
                        Auto-aprendizaje
                    </StyledMenuLink>
                </StyledMenuItem>          
                <StyledMenuItem>
                    <StyledMenuLink to="/desarrollo-web" selected={selectedIndex === 3}>
                        Desarrollo Web
                    </StyledMenuLink>
                </StyledMenuItem>     
                <StyledMenuItem>
                    <StyledMenuLink to="/back-end" selected={selectedIndex === 4}>
                        Back-End
                    </StyledMenuLink>
                </StyledMenuItem>     
                <StyledMenuItem>
                    <StyledMenuLink to="/front-end" selected={selectedIndex === 5}>
                        Front-End
                    </StyledMenuLink>
                </StyledMenuItem>       
            </StyledMenu>  
        </StyledContainer>
    );
}

export default Menu;
