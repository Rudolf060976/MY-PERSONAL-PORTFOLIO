import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';



const StyledP = styled.p`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 18px;

    color: ${props => rgba(props.theme.colorMainBlueDark2, 0.9)};

    padding: 10px 0;

    width: 100%;

    line-height: 24px;
    
     @media (max-width: 600px) {

        font-size: 16px;

    }

`;

export function P({ children }) {
    return (
        <StyledP>
            { children }
        </StyledP>
    )
}


const StyledA = styled.a`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 18px;

    color: ${props => rgba(props.theme.colorMainBlueClear1, 0.9)};

    transition: all .2s linear;

    &:hover {

        color: ${props => rgba(props.theme.colorMainBlueClear2, 0.9)};

    }

     @media (max-width: 600px) {

        font-size: 16px;

    }

`;

export function A({ children, ...props }) {
    return (
        <StyledA {...props}>
            { children }
        </StyledA>
    )
}

const StyledUL = styled.ul`

    width: 100%;

    padding: 20px 0 20px 30px;

`;

export function UL({ children, ...props }) {
    return (
        <StyledUL {...props}>
            { children }
        </StyledUL>
    )
}

const StyledOL = styled.ol`

    width: 100%;

    padding: 20px 0 20px 30px;

`;

export function OL({ children, ...props }) {
    return (
        <StyledOL {...props}>
            { children }
        </StyledOL>
    )
}

const StyledLI = styled.li`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 18px;

    color: ${props => rgba(props.theme.colorMainBlueDark2, 0.9)};

    padding: 10px 0;

    width: 100%;

    line-height: 24px;

     @media (max-width: 600px) {

        font-size: 16px;

    }

`;

export function LI({ children, ...props }) {
    return (
        <StyledLI {...props}>
            { children }
        </StyledLI>
    )
}


// ESTE ES UN BOTON Copy QUE SE COLOCA EN TODOS LOS BLOQUES DE CODIGO GENERADOS POR EL PLUGIN gatsby-remark-prismjs

const StyledCodeButton = styled.button`

    position: absolute;

    top: 10%;

    right: 10%;

    width: 70px;

    z-index: 1000;

    border-radius: 5px;

    background-color: ${props => props.theme.colorMainBlueClear1};

    border: none;

    color: white;

    transition: all .2s linear;

    &:hover {

        background-color: ${props => props.theme.colorMainBlueClear2};

        cursor: pointer;

    }


    &:focus {

        outline: none;
    }

`;


const StyledLanguageName = styled.span`

    display: block;

    position: absolute;

    top: 0;

    left: 10%;
    
    z-index: 1000;

    border-radius: 0px 0px 5px 5px;

    background-color: ${props => props.theme.colorMainBlueClear1};

    text-align: center;

    padding: 0 10px;

    color: white;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 14px;

    letter-spacing: 1px;

`;


const StyledPRE = styled.pre`

    position: relative;

    width: 100%;

`;

const StyledImage = styled.img`

    width: 100%;

    border-radius: 10px;

`;

export function IMG({ children, ...props }) {
    return (
        <StyledImage {...props}>
            { children }
        </StyledImage>
    )
}

// ESTE ES EL COMPONENTE PRE QUE PERMITE PERSONALIZAR A LOS BLOQUES DE CODIGO GENERADOS POR EL PLUGIN gatsby-remark-prismjs
// SE AÑADE LA FUNCIONALIDAD DEL BOTON Copy QUE PERMITE COPIAR EL CONTENIDO DEL PRE AL PORTAPAPELES DE WINDOWS

export function PRE({ children, ...props }) {

    const preBlockRef = useRef(null);
    const buttonRef = useRef(null);
    const spanRef = useRef(null);

    const [copySuccess, setCopySuccess] = useState(false);
    const [languageName, setLanguageName] = useState('');
    
    useEffect(() => {

        const nombreClase = preBlockRef.current.className;   // NECESITAMOS SABER EL LENGUAJE UTILIZADO (CSS, JAVASCRIPT, TEXT, ETC)

        const re = /\blanguage-(\w+)\b/ig

        const langString = nombreClase.match(re);

        const langName = langString[0].replace(/language-(\w+)/ig,'$1');

        let lang = null;

        switch (langName) {
            case 'none':
                lang='TEXT';
                break;
            case 'text':
                lang='TEXT';
                break;
            case 'javascript':
                lang='JS'
                break;
            case 'css':
                lang='CSS';
                break;
            case 'sass':
                lang='SASS';
                break;
            case 'scss':
                lang='SCSS';
                break;   
            case 'html':
                lang='html5';
                break;  
            case 'code':
                lang='CODE';
                break;     
            default:
                lang='TEXT';
                break;
        }

        setLanguageName(lang);
       
    }, [])

    const handleButtonClick = (e) => {
        const spRef = spanRef.current.textContent;
        spanRef.current.textContent="";
        buttonRef.current.textContent='';
        const copyText = preBlockRef.current.textContent;
        const textArea = document.createElement('textarea');
        textArea.style="position:absolute; left: -100%;"
        textArea.textContent = copyText;
        document.body.append(textArea);
        
        textArea.select();
        document.execCommand("copy");

        spanRef.current.textContent = spRef;
        setCopySuccess(true);

        setTimeout(() => {
            
            setCopySuccess(false);
            

        }, 1000);

    }

    return (
        <StyledPRE ref={preBlockRef} {...props}>
            <StyledLanguageName ref={spanRef}>{ languageName.toUpperCase() }</StyledLanguageName>
            <StyledCodeButton ref={buttonRef} onClick={handleButtonClick}>{ copySuccess ? 'Copied!' : 'Copy'}</StyledCodeButton>
            { children }
        </StyledPRE>
    )
}
