import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import '../FontAwesome/library';
import IndexLayout from '../posts/components/layout/IndexLayout';
import Featured from '../posts/components/Featured';
import moment from 'moment';
import PostsList from '../posts/components/PostsList';
import SEO from '../components/seo';
import FacebookButton from '../posts/components/FacebookButton';
import EmailButton from '../posts/components/EmailButton';

const StyledFacebookButton = styled(FacebookButton)`

    position: absolute;
    top: 380px;
    left: 100px;

    @media (max-width: 1700px) {

        top: 360px;
        left: 300px;
        z-index: 3000;

    }

     @media (max-width: 1400px) {

        top: 360px;
        left: 110px;  
                     
    }

    @media (max-width: 950px) {

        top: 340px;
        left: 100px;

    }

     @media (max-width: 840px) {

        top: 320px;

    }

     @media (max-width: 770px) {

        top: 300px;

    }

     @media (max-width: 690px) {

        top: 280px;

    }

     @media (max-width: 600px) {

        top: 340px;
        left: 50px;

    }

     @media (max-width: 360px) {

        top: 350px;       

    }

     @media (max-width: 270px) {

        top: 350px;       

    }


`;

const StyledEmailButton = styled(EmailButton)`

    position: absolute;
    top: 450px;
    left: 100px;

     @media (max-width: 1700px) {

        top: 360px;
        left: 390px;
        z-index: 3000;

    }

     @media (max-width: 1400px) {

        top: 360px;
        left: 200px;       

    }


      @media (max-width: 950px) {

        top: 340px;
        left: 190px;

    }

      @media (max-width: 840px) {

        top: 320px;

    }

     @media (max-width: 770px) {

        top: 300px;

    }

     @media (max-width: 690px) {

        top: 280px;

    }

     @media (max-width: 600px) {

        top: 340px;
        left: 140px;

    }

     @media (max-width: 360px) {

        top: 350px;       

    }

      @media (max-width: 270px) {

        top: 350px;       

    }

`;


function BlogIndexPage({ data }) {

    const postsArray = data.allMdx.nodes;

    const recentPostsArray = postsArray.filter(post => {

        const postDate = moment(post.frontmatter.date,"DD-MM-YYYY");

        const today = moment();

        return (postDate.add(30,"days").format("X") >= today.format("X"));  // SOLO SELECCIONA LOS POSTS DE LOS ULTIMOS 7 DIAS
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

       const subject = 'Blog Profesional del Ing. Rafael E. Urbina N.';

       const body = 'Te comparto este Blog que contiene información interesante sobre temas de Auto-aprendizaje y Desarrollo Web, ubicado en: https://www.rafaelurbinadevpro.com/blog';

    return (
        <IndexLayout selectedIndex={1}>             
            <SEO title="Blog de Autoaprendizaje y Desarrollo Web" meta={metaFacebook} description="Blog del Ingeniero Rafael Urbina que contiene artículos sobre Desarrollo Web" keywords="Blog Desarrollador Web Venezuela" lang="es" />            
            <Featured /> 
            <StyledFacebookButton pageSlug="/blog" />  
            <StyledEmailButton subject={subject} body={body} />                   
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
                            fluid(maxWidth:200) {
                                ...GatsbyImageSharpFluid
                            }
                        }

                    }
        }        
      }
    }
    }
`;


export default BlogIndexPage;

