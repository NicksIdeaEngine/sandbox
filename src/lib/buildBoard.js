import React from 'react';

function buildBoard() {
  let id = 0;
  let row = 1;
  let column = 1;
  const value = 'x';
  const candidates = [];
  const newBoard = [];
  let newRowContents = [];

  for (let i = 0; i < 3; i += 1) {
    candidates.push([]);
    for (let j = 0; j < 3; j += 1) {
      candidates[i].push('o');
    }
  }

  for (row = 1; row <= 9; row += 1) {
    newRowContents = [];
    for (column = 1; column <= 9; column += 1) {
      newRowContents.push({
        id: `tile-${id}`,
        candidates,
        value,
      });
      id += 1;
    }

    newBoard.push(<div id={`row-${row - 1}`}>{newRowContents}</div>);
  }

  return newBoard;
}

export default buildBoard;
