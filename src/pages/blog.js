import React from 'react';
import IndexLayout from '../posts/components/layout/IndexLayout';
import Featured from '../posts/components/Featured';
import { graphql } from 'gatsby';
import moment from 'moment';
import PostsList from '../posts/components/PostsList';


function BlogIndexPage({ data }) {
    
    const postsArray = data.allMdx.nodes;

    const recentPostsArray = postsArray.filter(post => {

        const postDate = moment(post.frontmatter.date,"DD-MM-YYYY");

        const today = moment();

        return (postDate.add(7,"days").format("X") >= today.format("X"));  // SOLO SELECCIONA LOS POSTS DE LOS ULTIMOS 7 DIAS
    });


    return (
        <IndexLayout selectedIndex={1}>
            <Featured />
            <PostsList postsList={recentPostsArray} />
        </IndexLayout>
    );
}

export const pageQuery = graphql`
    query pageIndexQuery {
      allMdx {
      nodes {
        id
        frontmatter {
          title
          slug
          date (formatString: "DD-MM-YYYY")
          author
          aboutAuthor
          bkColor
          category
          headerImage {
                        childImageSharp {
                            fixed(width:200) {
                                ...GatsbyImageSharpFixed
                            }
                        }

                    }
        }        
      }
    }
    }
`;


export default BlogIndexPage;