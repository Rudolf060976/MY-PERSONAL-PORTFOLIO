import React from 'react';
import styled from 'styled-components';
import ProjectsContent from './ProjectsContent';



const StyledContainer = styled.section`

    width: 100%;

    height: 160vh;
   
    background-color: ${props => props.theme.colorMainBlueDark1};

    padding: 50px 10px 50px 10px;
   
`;




function Projects() {
    return (
        <StyledContainer>
            <ProjectsContent />
        </StyledContainer>
    );
}

export default Projects;
