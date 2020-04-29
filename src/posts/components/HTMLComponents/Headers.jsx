import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';

const AutoLink = `
  a {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    a {
      svg {
        visibility: visible;
      }
    }
  }
`;


const StyledH1 = styled.h1`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 3.2rem;

    color: ${props => rgba(props.theme.colorMainBlueDark2, 0.9)};

    padding: 30px 0;

    ${AutoLink}
`;

export function H1({ children, ...props }) {
    return (
        <StyledH1 {...props}>
            { children }
        </StyledH1>
    )
}


const StyledH2 = styled.h2`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 2.8rem;

    color: ${props => rgba(props.theme.colorMainBlueDark2, 0.9)};

    padding: 20px 0;

    ${AutoLink}

`;

export function H2({ children, ...props }) {
    return (
        <StyledH2 {...props}>
            { children }
        </StyledH2>
    )
}








const StyledH3 = styled.h3`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 2.6rem;

    color: ${props => rgba(props.theme.colorMainBlueDark2, 0.9)};

    padding: 20px 0;

    ${AutoLink}

`;

export function H3({ children, ...props }) {
    return (
        <StyledH3 {...props}>
            { children }
        </StyledH3>
    )
}






const StyledH4 = styled.h4`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 2.4rem;

    color: ${props => rgba(props.theme.colorMainBlueDark2, 0.9)};

    padding: 20px 0;

    ${AutoLink}

`;

export function H4({ children, ...props }) {
    return (
        <StyledH4 {...props}>
            { children }
        </StyledH4>
    )
}







const StyledH5 = styled.h5`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 2.2rem;

    color: ${props => rgba(props.theme.colorMainBlueDark2, 0.9)};

    padding: 20px 0;

    ${AutoLink}

`;

export function H5({ children, ...props }) {
    return (
        <StyledH5 {...props}>
            { children }
        </StyledH5>
    )
}






const StyledH6 = styled.h6`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 2rem;

    color: ${props => rgba(props.theme.colorMainBlueDark2, 0.9)};

    padding: 20px 0;

    ${AutoLink}

`;

export function H6({ children, ...props }) {
    return (
        <StyledH6 {...props}>
            { children }
        </StyledH6>
    )
}

