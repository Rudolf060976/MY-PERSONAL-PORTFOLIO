import React, { useEffect } from "react"
import { Link } from "gatsby"


import Layout from "../components/Layout/layout"
import PlaceholderImage from "../components/PlaceholderImage/PlaceholderImage"
import SEO from "../components/seo"

import theme from '../StyledComponents/theme';
import { ThemeProvider } from 'styled-components';


const IndexPage = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <ThemeProvider theme={theme} >
      <Layout>
      <SEO title="Home" />
      <h1>HELLO FROM INDEX</h1>   
      </Layout>
    </ThemeProvider>    
  ); 

};

export default IndexPage
