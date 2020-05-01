import React, { useEffect } from 'react';
import styled from 'styled-components';
import '../../../FontAwesome/library';
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
import FacebookButton from '../../components/FacebookButton';
import SEO from '../../../components/seo';
import EmailButton from '../../components/EmailButton';
import PostAuthorFootInfo from '../PostAuthorFootInfo';


const StyledFacebookButton = styled(FacebookButton)`

    position: absolute;
    top: 380px;
    left: 100px;

     @media (max-width: 1050px) {

        top: 240px;
        left: 180px;
        z-index: 3000;

    }

     @media (max-width: 950px) {

        left: 160px;

    }

     @media (max-width: 770px) {

        top: 240px;
        left: 120px;

    }

    @media (max-width: 690px) {

       
        left: 60px;

    }


     @media (max-width: 600px) {

        top: 320px;
        left: 50px;

    }

   

     @media (max-width: 280px) {

        top: 330px;       

    }


`;

const StyledEmailButton = styled(EmailButton)`

    position: absolute;
    top: 450px;
    left: 100px;

     @media (max-width: 1050px) {

        top: 240px;
        left: 250px;
        z-index: 3000;

    }

      @media (max-width: 950px) {

        left: 230px;

    }

      @media (max-width: 770px) {

        top: 240px;
        left: 190px;

    }

    @media (max-width: 690px) {

       
        left: 130px;

    }

     @media (max-width: 600px) {

        top: 320px;
        left: 120px;

    }

   

      @media (max-width: 280px) {

        top: 330px;       

    }


`;


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
    pre: Elements.PRE,
    ul: Elements.UL
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


    const metaFacebook = [
        {
            property: `og:url`,
            content: `https://www.rafaelurbinadevpro.com${postData.frontmatter.slug}`
        },
        {
            property: `og:type`,
            content: 'article' // puede ser tambien 'website'
        },
        {
            property: `og:title`,
            content: `${postData.frontmatter.title}`
        },
        {
            property: `og:description`,
            content: `${postData.frontmatter.author}`
        },
        {
            property: `og:image`,
            content: ""
        }


    ];


    const subject = `Artículo: ${postData.frontmatter.title}`;

    const body = `Te comparto este Interesante Artículo del Blog de Rafael E. Urbina ubicado en:  https://www.rafaelurbinadevpro.com${postData.frontmatter.slug}`;


    const authorData = {
        author: postData.frontmatter.author,
        aboutAuthor: postData.frontmatter.aboutAuthor,
        authorWebsite: postData.frontmatter.authorWebsite,
        authorImageFixed: postData.frontmatter.authorImage.childImageSharp.fixed
    };

    return (
        <IndexLayout selectedIndex={catIndex}>
            <SEO title={postData.frontmatter.title} meta={metaFacebook} description="Blog de Rafael Urbina" />      
            <PostHeader postData={postData} />
                <div id="post-page-layout-container">
                    <StyledFacebookButton pageSlug={postData.frontmatter.slug} />
                    <StyledEmailButton subject={subject} body={body} />   
                    <MDXProvider components={shortcodes}>
                        <MDXRenderer>
                            {data.mdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                    <PostAuthorFootInfo authorData={authorData} />
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
                authorWebsite
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
                        fixed(width:60) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }        

        }
    }

`;


export default PostsLayout;
