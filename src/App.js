import React from 'react';
import styled from '@emotion/styled';
import colors from './colors/gruvbox-light.scss';

const AppHeader = styled.div`
  color: ${colors.purple};
`;

function App() {
  return (
    <div className="app">
      <AppHeader>hello world</AppHeader>
    </div>
  );
}

export default App;
