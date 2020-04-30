import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const openAnimation = keyframes`

    from {

        height: 80px;

    }

    to {

        height: 300px;

    }

`;

const closeAnimation = keyframes`

     from {

        height: 300px;

    }

    to {

        height: 80px;

    }


`;


const StyledContainer = styled.div`

    width: 100%;
    background-color: ${props => props.theme.colorMainBlueGray};

    border-bottom: 2px solid ${props => props.theme.colorMainBlueDark3};


    @media (max-width: 750px ) {
       
       width: 100%;
       position: relative;
       
   }

`;

const StyledMenu = styled.ul`

    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding: 10px 0;

    @media (max-width: 2000px ) {

        width: 70%;

    }

    @media (max-width: 1800px ) {

        width: 80%;

    }

    @media (max-width: 1500px ) {

        width: 90%;

    }

    @media (max-width: 1000px ) {

        width: 100%;
        padding: 10px 20px;

    }

    @media (max-width: 750px ) {
       
        width: 100%;
        padding: 10px 20px;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        overflow: hidden;
        height: 80px;

        animation-name: ${props => (props.openAnim ? openAnimation : (props.closeAnim ? closeAnimation : 'none'))};
        animation-duration: 500ms;
        animation-fill-mode: forwards;
        
    }

    
`;

const StyledMobileMenuButton = styled.span`

    opacity: 0;
    display: block;
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 18px;
    

    @media (max-width: 750px ) {
       
      opacity: 1;
      color: ${props => props.theme.colorMainBlueDark2};
       
   }


`;

const StyledMenuItem = styled.li`




`;

const StyledMenuLink = styled(Link)`

    display: block;
    padding: 10px 15px;
    font-family: Montserrat, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 20px;
    color: ${props => props.theme.colorMainBlueDark3};
    cursor: pointer;
    font-weight: ${props => props.selected ? 'bold' : 'normal'};

    transition: ${props => props.theme.mainTransition};

    text-decoration: none;

    &:hover {

        color: ${props => props.theme.colorMainBlueClear1};

    }


     @media (max-width: 1500px ) {

        font-size: 18px;

    }

    @media (max-width: 1200px ) {

        font-size: 16px;

    }

    @media (max-width: 1000px ) {

        font-size: 14px;
        padding: 10px 5px;

    }

    @media (max-width: 750px ) {

        font-size: 18px;
        padding: 10px 0;

    }

    
`;

const StyledFirstMenuLink = styled(Link)`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 15px;
    font-family: 'Lilita One', sans-serif, Verdana, Geneva, Tahoma;
    font-size: 20px;
    color: ${props => props.theme.colorMainBlueDark3};
    cursor: pointer;
    font-weight: ${props => props.selected ? 'bold' : 'normal'};

    transition: ${props => props.theme.mainTransition};

    text-decoration: none;

    &:hover {

        color: ${props => props.theme.colorMainBlueClear1};

    }

     @media (max-width: 1500px ) {

        font-size: 18px;

    }

    @media (max-width: 1200px ) {

        font-size: 16px;

    }

    @media (max-width: 1000px ) {

        font-size: 14px;
        padding: 10px 5px;

    }

    @media (max-width: 750px ) {

        font-size: 18px;
        padding: 10px 0;

    }

    
`;

const StyledImage = styled(Img)`

    

`;


function Menu({ selectedIndex }) {

    const [openState, setOpenState] = useState(false);
    const [openAnim, setOpenAnim] = useState(false);
    const [closeAnim, setCloseAnim] = useState(false);

    
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


    const handleMenuClick = (e) => {

        if(!openState) {
            setCloseAnim(false);
            setOpenAnim(true);
            
        } else {
            setOpenAnim(false);
            setCloseAnim(true);

        }
      
    
      };

      const handleAnimationEnd = (e) => {

        setOpenState(!openState);
       
      };

    return (
        <StyledContainer>
            <StyledMobileMenuButton onClick={handleMenuClick}>
                <FontAwesomeIcon icon="align-justify" size="lg" />
            </StyledMobileMenuButton>
            <StyledMenu onAnimationEnd={handleAnimationEnd} openAnim={openAnim} closeAnim={closeAnim}>                                
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
                    <StyledMenuLink to="/blog/auto-aprendizaje" selected={selectedIndex === 2}>
                        Auto-aprendizaje
                    </StyledMenuLink>
                </StyledMenuItem>          
                <StyledMenuItem>
                    <StyledMenuLink to="/blog/desarrollo-web" selected={selectedIndex === 3}>
                        Desarrollo Web
                    </StyledMenuLink>
                </StyledMenuItem>     
                <StyledMenuItem>
                    <StyledMenuLink to="/blog/back-end" selected={selectedIndex === 4}>
                        Back-End
                    </StyledMenuLink>
                </StyledMenuItem>     
                <StyledMenuItem>
                    <StyledMenuLink to="/blog/front-end" selected={selectedIndex === 5}>
                        Front-End
                    </StyledMenuLink>
                </StyledMenuItem>       
            </StyledMenu>  
        </StyledContainer>
    );
}

export default Menu;
