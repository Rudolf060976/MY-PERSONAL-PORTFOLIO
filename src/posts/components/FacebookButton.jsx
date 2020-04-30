import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {darken} from 'polished';


const FacebookButton = ({ className, ...props }) => {

    const { pageSlug } = props;  // EJEMPLO '/auto-aprendizaje

    const appUrl = "https://www.rafaelurbinadevpro.com";

    const postUrl = pageSlug;

    const completeUrl = appUrl + postUrl;

    const encodedUrl = encodeURIComponent(completeUrl);

    const faceHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&amp;src=sdkpreparse`;
    

    const linkStyle={
        display: 'block',
        width: '100%',
        padding: '0', 
        backgroundColor: 'transparent',       
        fontSize: '30px',
        textDecoration: 'none'        
    };

    

    return (
        <button className={className}>
            <a style={linkStyle} target="_blank" href={faceHref} className="fb-xfbml-parse-ignore"><FontAwesomeIcon icon={['fab',"facebook"]} size="lg" /></a>
        </button>        
    );  // className="fb-share-button"
};



const StyledFacebookButton = styled(FacebookButton)`

    border: none;        
    background-color: transparent;
    max-width: 200px;
    
    

    & > a {

        color: ${props => darken(0.1,props.theme.colorMainBlueGray)};
        transition: all .2s linear;
    }

    & > a:hover {

        color: #3b5998;

    }
   
`;

export default StyledFacebookButton;