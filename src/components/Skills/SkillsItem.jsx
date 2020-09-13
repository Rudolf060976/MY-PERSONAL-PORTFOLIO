import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';
import SkillsLastItem from './SkillsLastItem';


const moveAnimation = keyframes`
    from {

        transform: translateX(-150%);
        opacity: 0;

    }

    to {

        transform: translateX(0);
        opacity: 1;

    }

`;

const animationTitle = keyframes`

  from {  
    color: ${props => props.theme.colorMainBlueGray};    
    text-shadow: none;
  }

  75% {
    color: white;
    text-shadow: 0px 0px 10px white;
  }

  to {
      color: ${props => props.theme.colorMainBlueGray};
      text-shadow: none;
  }


`;


const StyledContainer = styled.div.attrs(props => ({

    leftDecrement: (value) => {

            return (props.leftInPercentage - value) + '%';
    },
    leftIncrement: (value) => {
            return (props.leftInPercentage + value) + '%';
    },
    topIncrement: (value) => {
        return (props.top + value) + 'px';
    },
    topDecrement: (value) => {
        return (props.top - value) + 'px';
    }

}))`

    width: 70%;

    position: absolute;

    top: ${props => props.topInPx}px;

    left: ${props => props.leftInPercentage}%;

    background-color: ${props => rgba(props.theme.colorMainBlueClear1, 0.8)};

    padding: 10px 10px;   

    border-radius: 5px;

    transform: translateX(-150%);

    opacity: 0;

    animation-name: ${props => props.play ? moveAnimation : 'none'};

    animation-duration: 2s;

    animation-fill-mode: forwards;

    animation-delay: ${props => props.delayInSeconds}s;

    @media (max-width: 1500px) {

        width: 80%;

        left: ${props => props.leftDecrement(5) };

    }

    @media (max-width: 1350px) {

        width: 90%;

        left: ${props => props.leftDecrement(10)};

    }

    @media (max-width: 1250px) {

        width: 80%;
       
        top: ${ props => {

            switch (props.itemID) {
                case "1":
                    return "300px"; 
                             
                case "2":
                    return "750px";
                    
                case "3":
                    return "1070px";
                case "4":
                    return "1520px";
                default:
                    return "300px";
            }

        }};  
        
        left: ${props => props.leftIncrement(-5)};

    }
 

    @media (max-width: 900px) {       

        top: ${ props => {

        switch (props.itemID) {
            case "1":
                return "270px"; 
                   
            case "2":
                return "720px";

            case "3":
                return "1040px";
            case "4":
                return "1490px";
            default:
                return "300px";
        }

        }};       

    }


    @media (max-width: 830px) {

        top: ${ props => {

            switch (props.itemID) {
                case "1":
                    return "270px"; 
                   
                case "2":
                    return "850px";

                case "3":
                    return "1300px";
                case "4":
                    return "1870px";
                default:
                    return "300px";
            }

        }};       

    }


    @media (max-width: 680px) {

        top: ${ props => {

            switch (props.itemID) {
                case "1":
                    return "270px"; 
                    
                case "2":
                    return "960px";

                case "3":
                    return "1400px";
                case "4":
                    return "2100px";
                default:
                    return "300px";
            }

        }};  

    }

    @media (max-width: 530px) {

        top: ${ props => {

            switch (props.itemID) {
                case "1":
                    return "230px"; 
                   
                case "2":
                    return "1070px";

                case "3":
                    return "1650px";
                case "4":
                    return "2490px";
                default:
                    return "300px";
            }

        }};  


    }
    
     @media (max-width: 500px) {

        top: ${ props => {

            switch (props.itemID) {
                case "1":
                    return "230px"; 
                   
                case "2":
                    return "1060px";

                case "3":
                    return "1630px";
                case "4":
                    return "2460px";
                default:
                    return "300px";
            }

        }};  


    }
    

     @media (max-width: 410px) {

        width: 90%;

        left: ${props => props.leftIncrement(-9)};

        top: ${ props => {

            switch (props.itemID) {
                case "1":
                    return "160px"; 
                   
                case "2":
                    return "850px";

                case "3":
                    return "1280px";
                case "4":
                    return "1980px";
                default:
                    return "300px";
            }

        }};  


    }

     @media (max-width: 370px) {

        padding: 10px 0;

         top: ${ props => {

            switch (props.itemID) {
                case "1":
                    return "150px"; 
                   
                case "2":
                    return "800px";

                case "3":
                    return "1200px";
                case "4":
                    return "1860px";
                default:
                    return "300px";
            }

        }};  

    }

     @media (max-width: 350px) {

        padding: 10px 0;

         top: ${ props => {

            switch (props.itemID) {
                case "1":
                    return "160px"; 
                   
                case "2":
                    return "950px"

                case "3":
                    return "1480px"
                case "4":
                    return "2270px"
                default:
                    return "300px";
            }

        }};  

    }

  
`;


const StyledTitle = styled.h2`

    width: 100%;

    padding: 20px 0 20px 20px;

    color: ${props => props.theme.colorMainBlueGray};

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 3.4rem;

    animation-name: ${props => props.play ? animationTitle : 'none'};

    animation-duration: 1s;

    animation-fill-mode: forwards;

    animation-delay: ${props => (props.delayInSeconds + 1.5)}s;

`;

const StyledSeparator = styled.div`

    height: 1px;

    width: 100%;

    background-color: ${props => props.theme.colorMainBlueGray};

`;

const StyledSkillsList = styled.ul`

    width: 100%;

    list-style-type: none;

    display: flex;

    flex-flow: row nowrap;

    justify-content: space-between;

    align-items: center;

    padding: 25px 20px;

    background-color: ${props => rgba(props.theme.colorMainBlueDark1,0.7)};


    @media (max-width: 1250px) {


        flex-flow: row wrap;

        padding: 5px 20px;                

    }

`;



const output = (dataArray) => {

    return dataArray.map(skill => (<SkillsLastItem key={skill.name} titleName={skill.name} image={skill.image.childImageSharp.fixed} />));

};


function SkillsItem({ skillData, topInPx, leftInPercentage, side, itemID, play, delayInSeconds }) {

    const skillsArray = skillData.skills;

    
    return (           
        <StyledContainer topInPx={topInPx} leftInPercentage={leftInPercentage} side={side} itemID={itemID} play={play} delayInSeconds={delayInSeconds}>                
            <StyledTitle play={play} delayInSeconds={delayInSeconds}>{skillData.title}</StyledTitle>
            <StyledSeparator />
            <StyledSkillsList>
                { output(skillsArray) }
            </StyledSkillsList>            
        </StyledContainer>
    );
}

export default SkillsItem;
