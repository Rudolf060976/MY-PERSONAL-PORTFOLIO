import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql } from "gatsby";
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import { Link as LocalLink, Events, scrollSpy } from 'react-scroll';
import IndexLayout from './IndexLayout';
import PostHeader from '../PostHeader';
import './PostsLayout.scss';
import * as Headers from '../HTMLComponents/Headers';
import * as Elements from '../HTMLComponents/Elements';
import {rgba} from 'polished';
/* import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();  // PARA HACER CODE BLOCKS EN LOS BLOGS MDX USANDO ```  ``` */


const StyledLink = styled(Link)`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 18px;

    color: ${props => rgba(props.theme.colorMainBlueClear1, 0.9)};

    transition: all .2s linear;

    &:hover {

        color: ${props => rgba(props.theme.colorMainBlueClear2, 0.9)};
       

    }

`;

const StyledLocalLink = styled(LocalLink)`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 18px;

    color: ${props => rgba(props.theme.colorMainBlueClear1, 0.9)};

    transition: all .2s linear;

    text-decoration: underline;

    &:hover {

        color: ${props => rgba(props.theme.colorMainBlueClear2, 0.9)};

        cursor: pointer;

    }

`;


const shortcodes ={
    Link: StyledLink,    
    LocalLink: props => <StyledLocalLink {...props} smooth={true} duration={500} />,
    h1: Headers.H1,
    h2: Headers.H2,
    h3: Headers.H3,
    h4: Headers.H4,
    h5: Headers.H5,
    h6: Headers.H6,
    p: Elements.P,
    a: Elements.A,
    li: Elements.LI,
    pre: Elements.PRE
};


function PostsLayout({ data }) {

    useEffect(() => {
        
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
          });
       
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
          });
       
        scrollSpy.update();


        return () => {
            
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');

        }
    },[]);


    const postData = data.mdx;
    
    let catIndex = null;

    switch (postData.frontmatter.category) {
        case "Auto-aprendizaje":
            catIndex = 2;
            break;
        case "Desarrollo Web":
            catIndex = 3;
            break;
        case "Back-End":
            catIndex = 4;
            break;
        case "Front-End":
            catIndex = 5;
            break;    
        default:
            break;
    }

    return (
        <IndexLayout selectedIndex={catIndex}>
            <PostHeader postData={postData} />
                <div id="post-page-layout-container">
                    <MDXProvider components={shortcodes}>
                        <MDXRenderer>
                            {data.mdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                </div>                   
        </IndexLayout>
    );
}


export const pageQuery = graphql`
    query BlogPostQuery($id: String!) {
        mdx(id: { eq: $id}) {
            id
            body 
            frontmatter {
                title
                slug
                date (formatString: "MMMM DD, YYYY")
                author
                aboutAuthor
                bkColor
                category
                headerImage {
                    childImageSharp {
                        fluid(maxWidth:600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                authorImage {
                    childImageSharp {
                        fixed(width:50) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }        

        }
    }

`;


export default PostsLayout;