import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import '../FontAwesome/library';
import IndexLayout from '../posts/components/layout/IndexLayout';
import Featured from '../posts/components/Featured';
import moment from 'moment';
import PostsList from '../posts/components/PostsList';
import SEO from '../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {darken} from 'polished';

const FacebookButton = ({ className }) => {

    const spanStyle={
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none'    
    };

    const linkStyle={
        display: 'block',
        width: '100%',
        padding: '0', 
        backgroundColor: 'transparent',       
        fontSize: '30px',
        textDecoration: 'none'        
    };

    

    return (
        <button className={className}>
            <a style={linkStyle} target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.rafaelurbinadevpro.com%2Fblog&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore"><FontAwesomeIcon icon={['fab',"facebook"]} size="lg" /></a>
        </button>        
    );  // className="fb-share-button"
};


/*

return (
        <button className={className}>
            <span style={spanStyle} className="" data-href="https://www.rafaelurbinadevpro.com/blog" data-layout="" data-size="large"><a style={linkStyle} target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.rafaelurbinadevpro.com%2Fblog&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore"><FontAwesomeIcon icon={['fab',"facebook"]} size="lg" /></a></span>
        </button>        
    );  // className="fb-share-button"

*/

const StyledFacebookButton = styled(FacebookButton)`

    border: none;        
    background-color: transparent;
    max-width: 200px;
    position: absolute;
    top: 380px;
    left: 100px;
    

    & > a {

        color: ${props => darken(0.1,props.theme.colorMainBlueGray)};
        transition: all .2s linear;
    }

    & > a:hover {

        color: #3b5998;

    }
   
`;



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
            content: 'article' // puede ser tambien 'website'
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
            <StyledFacebookButton />                     
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

