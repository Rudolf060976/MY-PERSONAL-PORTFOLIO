import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {darken} from 'polished';


const EmailButton = ({ className, ...props }) => {


    const { subject, body } = props;

    const encodedSubject = encodeURIComponent(subject);

    const encodedBody = encodeURIComponent(body);

    const linkStyle={
        display: 'block',
        width: '100%',
        padding: '0', 
        backgroundColor: 'transparent',       
        fontSize: '24px',
        textDecoration: 'none'        
    };

    const emailHref = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;

    return (
        <button className={className}>
            <a style={linkStyle} href={emailHref} className="fb-xfbml-parse-ignore"><FontAwesomeIcon icon="envelope" size="lg" /></a>
        </button> 
    );

};


const StyledEmailButton = styled(EmailButton)`

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


export default StyledEmailButton;