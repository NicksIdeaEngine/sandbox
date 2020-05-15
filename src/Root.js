import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import GlobalStyles from './styles/GlobalStyles';

const PageContainer = styled.main`
  margin: 0 auto;
  max-width: 55em;
`;

const Root = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <PageContainer className="page">{children}</PageContainer>
    </>
  );
};

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
