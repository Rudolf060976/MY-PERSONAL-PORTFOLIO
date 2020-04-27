import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';


const StyledContainer = styled.div`

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    display: grid;

    grid-template-areas: 
    "item item item"
    "item item item";

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    grid-auto-flow: row;

    padding: 20px 0;

    gap: 20px 20px;

`;


function PostsList({ postsList }) {

    const output = postsList.map(post => {

        return (
            <PostItem key={post.id} post={post} />
        );
    });

    return (
        <StyledContainer>
            {output}
        </StyledContainer>
    )
}

export default PostsList;
