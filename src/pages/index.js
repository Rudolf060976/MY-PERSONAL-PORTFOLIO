import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import '../FontAwesome/library';
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects";
import LetsTalk from "../components/LetsTalk/LetsTalk"
import Header from '../components/Header/Header';

const IndexPage = ({ data }) => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
 

  return (             
        <Layout>
          <SEO title="Full Stack Web developer from Venezuela Engineer Rafael Urbina" keywords="Web Developer React.js Rafael Urbina" />  
          <Header siteMetadata={data.site.siteMetadata} />    
          <About />
          <Skills />
          <Projects />
          <LetsTalk />
        </Layout>     
  ); 

};

export const query = graphql`
    query SiteTitleQueryIndexgat {
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
