import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import PlaceholderImage from "../components/PlaceholderImage/PlaceholderImage"
import SEO from "../components/seo"
import theme from '../StyledComponents/theme';
import { ThemeProvider } from 'styled-components';
import '../FontAwesome/library';
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import { ParallaxProvider } from 'react-scroll-parallax';
import Projects from "../components/Projects/Projects";
import LetsTalk from "../components/LetsTalk/LetsTalk"


const IndexPage = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme} >      
        <Layout>
          <SEO title="Home" />      
          <About />
          <Skills />
          <Projects />
          <LetsTalk />
        </Layout>
      </ThemeProvider>    
    </ParallaxProvider>    
  ); 

};

export default IndexPage
