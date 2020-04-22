import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import SkillsContent from './SkillsContent';
import { Parallax } from 'react-scroll-parallax';

const BackgroundSection = ({ className, children }) => {

    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "BACK12.webp" }) {
                childImageSharp {
                    fluid(quality:90, maxWidth: 2560) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }    
    `);

    const imageData = data.desktop.childImageSharp.fluid;

    return (
        <BackgroundImage Tag="div" className={className} fluid={imageData} backgroundColor={'#325A73'}>
            {children}
        </BackgroundImage>
    );
};

const StyledBackgroundSection = styled(BackgroundSection)`

    width: 100%;

    height: 150vh; 

    min-height: 150vh; 

    position: absolute;

    z-index: -5000;
  
/* RECUERDEN QUE CUANDO SE USA MAX-WIDTH LOS VALORES DEBEN SER DESCENDENTES, Y CON MIN-WIDTH ASCENDENTES */

     

     @media (max-width: 1000px) and (max-height: 700px) {

        height: 360vh;

        min-height: 360vh; 

    }
     @media (max-width: 450px) and (max-height: 900px) {

        height: 350vh;

        min-height: 350vh; 

    }

    @media (max-width: 450px) and (max-height: 800px) {

        height: 370vh;

        min-height: 370vh; 

    }


     @media (max-width: 450px) and (max-height: 750px) {

        height: 390vh;

        min-height: 390vh; 

    }

     @media (max-width: 400px) and (max-height: 850px) {

        height: 285vh;

        min-height: 285vh; 

    }

     @media (max-width: 400px) and (max-height: 700px) {

        height: 360vh;

        min-height: 360vh; 

    }

     @media (max-width: 350px) and (max-height: 650px) {

        height: 480vh;

        min-height: 480vh; 

    }



   

     @media (min-width: 700px) and (min-height: 1000px)  {

        height: 220vh;

        min-height: 220vh; 

    }

     @media (min-width: 798px) and (min-height: 1200px)  {

        height: 180vh;

        min-height: 180vh; 

    }

     /* PARA ANCHOS MAYORES A 1000px */

    @media (min-width: 1000px) and (min-height: 700px)  {

        height: 260vh;

        min-height: 260vh; 

    }

      @media (min-width: 1000px) and (min-height: 1000px)  {

        height: 170vh;

        min-height: 170vh; 

    }

     @media (min-width: 1000px) and (min-height: 1200px)  {

        height: 160vh;

        min-height: 160vh; 

    }

     @media (min-width: 1000px) and (min-height: 1300px)  {

        height: 150vh;

        min-height: 150vh; 

    }

     @media (min-width: 1000px) and (min-height: 1800px)  {

        height: 110vh;

        min-height: 110vh; 

    }

     /* PARA ANCHOS MAYORES A 1200px */

     @media (min-width: 1200px) and (min-height: 700px)  {

        height: 220vh;

        min-height: 220vh; 

    }

       /* PARA ANCHOS MAYORES A 1300px */

     @media (min-width: 1300px) and (min-height: 700px) {

        height: 220vh;

        min-height: 220vh; 

    }


    @media (min-width: 1300px) and (min-height: 900px)  {

        height: 190vh;

        min-height: 190vh; 

    }

     @media (min-width: 1300px) and (min-height: 1000px)  {

        height: 170vh;

        min-height: 170vh; 

    }

     @media (min-width: 1300px) and (min-height: 1100px)  {

        height: 150vh;

        min-height: 150vh; 

    }


    

   
   

    


    
    

    

    
   

`;

const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-50, 50]} tagOuter="div">
        <StyledBackgroundSection />
    </Parallax>
);


const StyledContainer = styled.section`

    width: 100%;  
    
    position: relative;

    overflow: hidden;

    z-index: -5000;
    
    
`;


function Skills() {
    return (
        <StyledContainer id="skills-scroll-point">
            <ParallaxImage />  
            <SkillsContent />          
        </StyledContainer>
    );
}

export default Skills;
