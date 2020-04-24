import React from 'react';
import styled from '@emotion/styled';
import color from './colors/gruvbox-light.scss';
// import color from './colors/gruvbox-dark.scss';

const AppContainer = styled.div`
  border: 0.2em solid ${color.blue};
`;

const AppHeader = styled.header`
  border: 0.2em solid ${color.yellow};
  padding: 0.5em;
`;

const H1 = styled.h1`
  line-height: 1.5em;
  color: ${color.purple};
`;

function App() {
  return (
    <AppContainer className="app">
      <AppHeader>
        <H1>hello world</H1>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
