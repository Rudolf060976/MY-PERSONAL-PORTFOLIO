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



function BackEndPage({ data }) {

    const postsArray = data.allMdx.nodes;

    const selectedPostsArray = postsArray.filter(post => {

        return (post.frontmatter.category === "Back-End");

    });

    return (
        <IndexLayout selectedIndex={4}>
            <StyledTitle>Back-End</StyledTitle>
            <StyledContainer>                
                <PostsList postsList={selectedPostsArray} />   
            </StyledContainer>                    
        </IndexLayout>
    )
}


export const pageQuery = graphql`
    query pageBackEndQuery {
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

export default BackEndPage;