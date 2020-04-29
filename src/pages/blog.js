import React from 'react';
import IndexLayout from '../posts/components/layout/IndexLayout';
import Featured from '../posts/components/Featured';
import { graphql } from 'gatsby';
import moment from 'moment';
import PostsList from '../posts/components/PostsList';
import SEO from '../components/seo';


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
            content: 'http://www.rafaelurbinadevpro.com/blog'
        },
        {
            property: `og:type`,
            content: 'article' // puede ser tambien 'website'
        },
        {
            property: `og:title`,
            content: 'Blog Profesional del Ing. Rafael E. Urbina N.'
        },
        {
            property: `og:description`,
            content: 'Prepárate desde hoy en Desarrollo Web!'
        },
        {
            property: `og:image`,
            content: "/AUTOLEARNING.png"
        },
        {
            property: `og:image:width`,
            content: "100"
        },
        {
            property: `og:image:height`,
            content: "200"
        }


    ];


    return (
        <IndexLayout selectedIndex={1}>
            <SEO title="Blog Home" meta={metaFacebook} description="Blog de Rafael Urbina" />
            <Featured />            
            <PostsList postsList={recentPostsArray} />            
            <div class="fb-share-button" data-href="https://www.rafaelurbinadevpro.com/blog" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.rafaelurbinadevpro.com%2Fblog&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Compartir</a></div>
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