import React from 'react';
import { graphql } from 'gatsby';
import '../FontAwesome/library';
import IndexLayout from '../posts/components/layout/IndexLayout';
import Featured from '../posts/components/Featured';
import moment from 'moment';
import PostsList from '../posts/components/PostsList';
import SEO from '../components/seo';
import FacebookButton from '../posts/components/FacebookButton';




function BlogIndexPage({ data }) {

    const postsArray = data.allMdx.nodes;

    const recentPostsArray = postsArray.filter(post => {

        const postDate = moment(post.frontmatter.date,"DD-MM-YYYY");

        const today = moment();

        return (postDate.add(7,"days").format("X") >= today.format("X"));  // SOLO SELECCIONA LOS POSTS DE LOS ULTIMOS 7 DIAS
    });

    const metaFacebook = [
        {
            property: `og:url`,
            content: 'https://www.rafaelurbinadevpro.com/blog'
        },
        {
            property: `og:type`,
            content: 'website' // puede ser tambien 'website'
        },
        {
            property: `og:title`,
            content: 'Blog Profesional del Ing. Rafael E. Urbina N.'
        },
        {
            property: `og:description`,
            content: 'Prepárate para Aprender Desarrollo Web!'
        },
        {
            property: `og:image`,
            content: "https://www.rafaelurbinadevpro.com/FACEBOOK-CARD-BLOG.jpg"
        }


    ];

       

    return (
        <IndexLayout selectedIndex={1}>             
            <SEO title="Blog Home" meta={metaFacebook} description="Blog de Rafael Urbina" />            
            <Featured /> 
            <FacebookButton pageSlug="/blog" />                     
            <PostsList postsList={recentPostsArray} />              
        </IndexLayout>
    ); //
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

