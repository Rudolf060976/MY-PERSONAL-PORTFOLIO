import React, { useEffect } from "react"
import { Link } from "gatsby"


import Layout from "../components/Layout/layout"
import PlaceholderImage from "../components/PlaceholderImage/PlaceholderImage"
import SEO from "../components/seo"

import theme from '../StyledComponents/theme';
import { ThemeProvider } from 'styled-components';

import '../FontAwesome/library';

import About from "../components/About/About"



const IndexPage = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <ThemeProvider theme={theme} >      
      <Layout>
        <SEO title="Home" />      
        <About />
      </Layout>
    </ThemeProvider>    
  ); 

};

export default IndexPage
