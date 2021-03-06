import React from 'react';
import IndexLayout from '../../posts/components/layout/IndexLayout';
import styled from 'styled-components';
import PostsList from '../../posts/components/PostsList';


const StyledContainer = styled.div`

    width: 100%;
    max-width: ${props => props.theme.maxPageContentWidth};
    margin: 0 auto;

`;

const StyledTitle = styled.h4`

    width: 100%;

    text-align: center;

    padding: 30px 0;

    background-color: #7962AE;
    
    color: white;
    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 2.4rem;
    letter-spacing: 2px;

`;



function DesarrolloWebPage({ data }) {

    const postsArray = data.allMdx.nodes;

    const selectedPostsArray = postsArray.filter(post => {

        return (post.frontmatter.category === "Desarrollo Web");

    });

    return (
        <IndexLayout selectedIndex={3}>
            <StyledTitle>Desarrollo Web</StyledTitle>
            <StyledContainer>                
                <PostsList postsList={selectedPostsArray} />   
            </StyledContainer>                    
        </IndexLayout>
    )
}


export const pageQuery = graphql`
    query pageWebDevelopmentQuery {
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

export default DesarrolloWebPage;