import React from 'react';
import { graphql } from "gatsby";
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

const shortcodes ={
    Link
};


function PostsLayout({ data }) {


    return (
        <div>
            <h1>{ data.mdx.frontmatter.title}</h1>
            <MDXProvider components={shortcodes}>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </MDXProvider>
        </div>
    );
}

export default PostsLayout;


/* export default pageQuery = graphql`
    query BlogPostQuery($id: String!) {
        mdx(id: { eq: $id}) {
            id
            body 
            frontmatter {
                title
            }

        }
    }

`; */
