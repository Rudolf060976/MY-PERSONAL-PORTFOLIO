import React from 'react';
import styled from 'styled-components';
import ProjectsContent from './ProjectsContent';

import { rgba } from 'polished';



const StyledContainer = styled.section`

    width: 100%;
   
    background-color: ${props => props.theme.colorMainBlueDark1};

    padding: 50px 10px 300px 10px;   

    border-bottom: 1px solid ${props => rgba(props.theme.colorMainBlueGray, .5)};
   
`;

function Projects() {
    return (
        <StyledContainer>
            <ProjectsContent />
        </StyledContainer>
    );
}

export default Projects;
