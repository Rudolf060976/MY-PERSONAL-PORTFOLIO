import React from 'react';
import Menu from '../Menu';
import { ThemeProvider } from 'styled-components';
import theme from '../../../StyledComponents/theme';
import './IndexLayout.scss';

function IndexLayout({ children, selectedIndex}) {
    return (
        <ThemeProvider theme={theme}>
            <div id="blog-index-layout-container">
                <Menu selectedIndex={selectedIndex} />
                <main id="blog-index-layout-main">                    
                    {children}
                </main>               
            </div>            
        </ThemeProvider>
    );
}

export default IndexLayout;
