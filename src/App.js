import React from 'react';
import styled from '@emotion/styled';
import color from './colors/gruvbox-light.scss';
// import color from './colors/gruvbox-dark.scss';
import GameBoard from './components/GameBoard';

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 2em;
  width: 50em;
  height: 36em;
  border: 0.2em solid ${color.blue};
`;

function App() {
  return (
    <AppContainer className="app">
      <GameBoard />
    </AppContainer>
  );
}

export default App;
