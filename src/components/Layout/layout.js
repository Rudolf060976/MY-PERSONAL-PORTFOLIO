/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components';
import theme from '../../StyledComponents/theme';

import "./layout.scss"

const Layout = ({ children }) => {
  

  return (
    <>
      <ThemeProvider theme={theme} >      
      <div className="main-layout-body">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by Rafael E. Urbina N.            
        </footer>
      </div>
      </ThemeProvider>    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
