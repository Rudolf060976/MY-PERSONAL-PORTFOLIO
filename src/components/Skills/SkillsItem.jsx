import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { lighten, rgba } from 'polished';
import SkillsLastItem from './SkillsLastItem';


const StyledContainer = styled.div.attrs(props => ({

    leftDecrement: (value) => {

            return (props.left - value) + 'rem';
    },
    leftIncrement: (value) => {
            return (props.left + value) + 'rem';
    },
    topIncrement: (value) => {
        return (props.top + value) + 'rem';
    },
    topDecrement: (value) => {
        return (props.top - value) + 'rem';
    }

}))`

    width: 70%;

    background-color: ${props => rgba(props.theme.colorMainBlueClear1, 0.8)};

    padding: 10px 10px;
   

    position: absolute;

    top: ${props => props.top};

    left: ${props => props.left + 'rem'};

    border-radius: 5px;

    @media (max-width: 1500px) {

        width: 80%;

        left: ${props => (props.side === "R") ? props.leftDecrement(18) : props.left + 'rem'};

    }

    @media (max-width: 1350px) {

        width: 90%;

        left: ${props => (props.side === "R") ? props.leftDecrement(37) : props.left + 'rem'};

    }

    @media (max-width: 1250px) {

        width: 80%;

        left: ${props => (props.side === "R") ? props.leftDecrement(35) : props.leftDecrement(0)};

        top: ${ props => {

            switch (props.itemID) {
                case "1":
                    return "75px"; 
                               
                case "2":
                    return "510px"

                case "3":
                    return "820px"
                case "4":
                    return "1250px"
            }


        }};       

    }

    @media (max-width: 1150px) {

        transform: ${props => (props.side === "L") ? 'translateX(15rem)' : 'translateX(-10rem)' };


    }

    @media (max-width: 865px) {

        transform: ${props => (props.side === "L") ? 'translateX(20rem)' : 'translateX(-15rem)' };

        top: ${ props => {

        switch (props.itemID) {
            case "1":
                return "75px"; 
                   
            case "2":
                return "510px"

            case "3":
                return "950px"
            case "4":
                return "1520px"
        }

        }};       

    }

    @media (max-width: 750px) {

        transform: ${props => (props.side === "R") ? 'translateX(-25rem)' : 'translateX(20rem)' };

    }

    @media (max-width: 700px) {

        top: ${ props => {

        switch (props.itemID) {
            case "1":
                return "75px"; 
           
            case "2":
                return "620px"

            case "3":
                return "1040px"
            case "4":
                return "1720px"
        }

    }};       


    }

    @media (max-width: 650px) {

        transform: ${props => (props.side === "R") ? 'translateX(-35rem)' : 'translateX(30rem)' };

    }

    @media (max-width: 565px) {

        top: ${ props => {

        switch (props.itemID) {
            case "1":
                return "75px"; 
           
            case "2":
                return "750px"

            case "3":
                return "1300px"
            case "4":
                return "2100px"
        }

    }};  
    
        transform: ${props => (props.side === "R") ? 'translateX(-40rem)' : 'translateX(35rem)' };


    }

     @media (max-width: 410px) {

        width: 90%;

        transform: ${props => (props.side === "R") ? 'translateX(-51rem)' : 'translateX(35rem)' };

    }

     @media (max-width: 360px) {

        width: 90%;

        padding: 10px 0;

        transform: ${props => (props.side === "R") ? 'translateX(-54rem)' : 'translateX(37rem)' };

    }

  

  
`;

const ParallaxContainer = ({ children, top, left, xArray, side, itemID }) => (
    <Parallax x={xArray} tagOuter="div">
        <StyledContainer top={top} left={left} side={side} itemID={itemID}>
            {children}
        </StyledContainer>        
    </Parallax>
);

const StyledTitle = styled.h2`

    width: 100%;

    padding: 20px 0 20px 20px;

    color: ${props => props.theme.colorMainBlueGray};

    font-family: Rubik, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 3.4rem;

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


function SkillsItem({ skillData, top, left, xArray, side, itemID }) {

    const skillsArray = skillData.skills;

    
    return (           
        <ParallaxContainer top={top} left={left} xArray={xArray} side={side} itemID={itemID}>                
            <StyledTitle>{skillData.title}</StyledTitle>
            <StyledSeparator />
            <StyledSkillsList>
                { output(skillsArray) }
            </StyledSkillsList>            
        </ParallaxContainer>
    );
}

export default SkillsItem;
