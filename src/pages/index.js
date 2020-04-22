import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import '../FontAwesome/library';
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import { ParallaxProvider } from 'react-scroll-parallax';
import Projects from "../components/Projects/Projects";
import LetsTalk from "../components/LetsTalk/LetsTalk"
import Header from '../components/Header/Header';

const IndexPage = ({ data }) => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
 

  return (
    <ParallaxProvider>          
        <Layout>
          <SEO title="Home" />  
          <Header siteMetadata={data.site.siteMetadata} />    
          <About />
          <Skills />
          <Projects />
          <LetsTalk />
        </Layout>     
    </ParallaxProvider>    
  ); 

};

export const query = graphql`
    query SiteTitleQueryIndex {
      site {
        siteMetadata {
          title
          subtitle
          description
          author
        }
      }
    }
  `;


export default IndexPage;
