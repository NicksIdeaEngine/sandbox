import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/GlobalStyles';

const Root = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <div className="page">{children}</div>
    </>
  );
};

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
