import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';
import TypeWriterAnimatedTitle from './TypeWriterAnimatedTitle/TypeWriterAnimatedTitle';


const azulNeon = keyframes`

    0%, 10%, 15%, 20%, 30%, 35%, 40%, 50%, 55%, 60%, 70%, 75%, 80%, 85%, 90%, 100% {
        text-shadow: 9px 9px 18px #66CAF2, 3px 3px 5px #325A73, -3px -3px 5px #325A73, -9px -9px 27px #66CAF2;
        color: white;
    }

    10%, 15%, 60% {
        text-shadow: none;
        color: gray;
    }

`;

const titlesBackAnimation = keyframes`

    from {
        
        opacity: .5;
        width: 0;
        height: 0;

    } 

    60% {
        opacity: .5;
        width: 100%;
        height: 0;
    }

    80% {

        opacity: .7;
        width: 100%;
        height: 100%;

    }

    to {
        width: 100%;
        height: 100%;
        opacity: 0;
    }


`;

const titlesAnimation = keyframes`

    from {

       opacity: 0;

    }

    to {

        opacity: 1;

    }


`;

const StyledContainer = styled.div`

    width: 100%;       
       
    display: flex;
    justify-content: center;
    align-items: center;

    
`;



const StyledCenter = styled.div`

    width: 70%;
    
    padding: 10px 10px;

    position: relative;

    
     @media (max-width: 1100px) {


        width: 80%;

    }

     @media (max-width: 600px) {

        width: 90%;       

    }

`;

const StyledTitlesContainer = styled.div`

    position: relative;
        
    width: 60%;

    margin: 0 auto;

    @media (max-width: 850px) {

        width: 80%;       

    }

     @media (max-width: 500px) {

        width: 90%;       

    }

    

     &::before {

            position: absolute;

            content: '';            

            top: 0;

            left: 0;

            height: 0;

            width: 0;

            opacity: 0.5;
        
            background-color: ${props => rgba(props.theme.colorMainBlueGray,0.5)};

            animation-name: ${titlesBackAnimation};

            animation-duration: 2s;

            animation-fill-mode: forwards;

            animation-delay: 1s;
        
            border: 2px solid ${props => props.theme.colorMainBlueGray};

        }      
     
`;

const StyledTitlesCenter = styled.div`

    
    
    width: 100%;
    
    opacity: 0;

    background: ${props => rgba(props.theme.colorMainBlueDark2, .8)};

    padding: 20px 30px;

    border-radius: 10px;

   

    animation-name: ${titlesAnimation};

    animation-duration: .5s;

    animation-fill-mode: forwards;

    animation-delay: 2.3s;

     @media (max-width: 400px) {

        padding: 20px 10px;

    }    
    
  
`;

const StyledTitle = styled.h4`

    width: 100%;

    padding: 20px 0;

    text-shadow: 0 0 20px ${props => props.theme.colorMainBlueClear2};
    letter-spacing: 2px;

    font-family: Rubik;

    text-align: center;

    color: white;

    animation-name: ${azulNeon};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

      @media (max-width: 500px) {

        line-height: 26px;      

    }

    
      
`;

const StyledComment = styled.h5`

    width: 100%;

    padding: 10px 0;

    color: ${props => props.theme.colorMainBlueClear2};

    letter-spacing: 2px;

    line-height: 3.2rem;

    font-size: 2.4rem;

    text-align: center;
  

`;

const StyledAnimatedTitle = styled.h2`

    width: 100%;

    color: white;

    padding-bottom: 40px;

    font-family: 'Bree Serif',sans-serif, Verdana, Geneva, Tahoma;
    
    letter-spacing: 5px;

    height: 300px;

    text-align: center;

    line-height: 80px;  

    
     @media (max-width: 1300px) {

        height: 250px;

        line-height: 70px;  
       

    }

     @media (max-width: 1000px) {

        height: 200px;

        line-height: 60px;  
       

    }

     @media (max-width: 800px) {

     
        line-height: 50px;  
       

    }

      @media (max-width: 500px) {

        height: 240px;

        line-height: 44px;  
        
        padding: 30px 0 30px 0;

    }




`;

const contentArray = [
    "Welcome to my professional website!",
    "I build amazing experiences",
    "The web never stops, so why would I have to?",
    "Great things are done by people who never stop learning"
];


function Content({ siteMetadata }) {
    return (
        <StyledContainer>
            <StyledCenter>
                <StyledAnimatedTitle>
                    <TypeWriterAnimatedTitle contentArray={contentArray} waitAfterWordInMiliseconds={100} typeSpeedInMiliseconds={100} deleteSpeedInMiliseconds={20} waitAfterPhraseInMiliseconds={2000} />
                </StyledAnimatedTitle>                
                <StyledTitlesContainer>
                    <StyledTitlesCenter>
                        <StyledTitle>{ siteMetadata.subtitle }</StyledTitle>
                        <StyledComment>{ siteMetadata.description }</StyledComment>       
                    </StyledTitlesCenter>                    
                </StyledTitlesContainer>                           
            </StyledCenter>            
        </StyledContainer>
    );
}

export default Content;
