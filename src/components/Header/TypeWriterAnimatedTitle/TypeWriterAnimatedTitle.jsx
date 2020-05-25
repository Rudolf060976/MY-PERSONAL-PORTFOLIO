import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const StyledSpan = styled.span`

    border-right: 2px solid white;


`;


function AnimatedTitle({ contentArray, waitAfterWordInMiliseconds, typeSpeedInMiliseconds, deleteSpeedInMiliseconds, waitAfterPhraseInMiliseconds }) {

    const [contentIndex, setContentIndex] = useState(0);
    
    const [index, setIndex] = useState(0);

    const [output, setOutput] = useState('');

    const [isDeleting, setIsDeleting] = useState(false);

        
    const separator = ' ';


    


    useEffect(() => {
       
      
        const currentContentIndex = contentIndex % contentArray.length;

        const currentIndex = index % contentArray[currentContentIndex].length;
      
        const currentLetter = contentArray[currentContentIndex][currentIndex];
       
             
        if (isDeleting) {
            
            setTimeout(() => {
                
                if (index === 0) {

                    setContentIndex(contentIndex + 1);

                    setIsDeleting(false);

                    setOutput('');

                    return;
                }

                setIndex(index - 1);

                setOutput(output.substring(0,output.length - 1));
            
            }, deleteSpeedInMiliseconds);

            return;

        }

        
        if (currentLetter !== separator ) {

                                    
            setTimeout(() => {

                if (output.length === contentArray[currentContentIndex].length) {
  
                    setTimeout(() => {

                        setIsDeleting(true);
                                            
                        
                    },waitAfterPhraseInMiliseconds);
                    
                    return;

                }
            
                setIndex(index + 1);

                setOutput(output + currentLetter);                 
    
            }, typeSpeedInMiliseconds);

        } else {

            
            setTimeout(() => {
                               
                setIndex(index + 1);
               
                setOutput(output + currentLetter);

            }, waitAfterWordInMiliseconds);

        }
       
        
    }, [output, isDeleting]);
     


    return (
        <StyledSpan>{output}</StyledSpan>           
    );
}

export default AnimatedTitle;
