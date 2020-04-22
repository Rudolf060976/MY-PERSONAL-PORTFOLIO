import React from "react";
import styled from 'styled-components';
import '../FontAwesome/library';
import SEO from "../components/seo";
import Layout from '../components/Layout/layout';

const StyledContainer = styled.main`



`;


const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Layout>
      <StyledContainer>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>  
      </StyledContainer>
    </Layout>
  </>
);

export default NotFoundPage;
