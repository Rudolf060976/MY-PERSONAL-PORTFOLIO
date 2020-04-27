import React from 'react';
import { graphql } from "gatsby";
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import IndexLayout from './IndexLayout';
import PostHeader from '../PostHeader';
import './PostsLayout.scss';

const shortcodes ={
    Link
};


function PostsLayout({ data }) {

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
