import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { lighten, rgba } from 'polished';
import SkillsLastItem from './SkillsLastItem';


const StyledContainer = styled.div`

    width: 70%;

    background-color: ${props => rgba(props.theme.colorMainBlueClear1, 0.8)};

    padding: 10px 10px;
   

    position: absolute;

    top: ${props => props.top};

    left: ${props => props.left};

    border-radius: 5px;

`;

const ParallaxContainer = ({ children, top, left, xArray }) => (
    <Parallax x={xArray} tagOuter="div">
        <StyledContainer top={top} left={left}>
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

`;



const output = (dataArray) => {

    return dataArray.map(skill => (<SkillsLastItem key={skill.name} titleName={skill.name} image={skill.image.childImageSharp.fixed} />));

};


function SkillsItem({ skillData, top, left, xArray }) {

    const skillsArray = skillData.skills;

    
    return (           
        <ParallaxContainer top={top} left={left} xArray={xArray}>                
            <StyledTitle>{skillData.title}</StyledTitle>
            <StyledSeparator />
            <StyledSkillsList>
                { output(skillsArray) }
            </StyledSkillsList>            
        </ParallaxContainer>
    );
}

export default SkillsItem;
