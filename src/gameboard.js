let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const resultCheckSectors = {
  row1: () => [0, 1, 2].map((x) => board[x]),
  row2: () => [3, 4, 5].map((x) => board[x]),
  row3: () => [6, 7, 8].map((x) => board[x]),
  column1: () => [0, 3, 6].map((x) => board[x]),
  column2: () => [1, 4, 7].map((x) => board[x]),
  column3: () => [2, 5, 8].map((x) => board[x]),
  diagonal1: () => [0, 4, 8].map((x) => board[x]),
  diagonal2: () => [2, 4, 6].map((x) => board[x]),
};

export const getBoard = () => board;

export const getResultCheckSectors = () => resultCheckSectors;

export function getRemainingSectors(boardState) {
  return boardState.filter((i) => i !== "o" && i !== "x");
}

export function setBoard(index, marker) {
  board.splice(index, 1, marker);
}

export const clearBoard = () => {
  board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const boardSpaces = document.querySelectorAll(".board-space");
  boardSpaces.forEach((index) => {
    // eslint-disable-next-line no-param-reassign
    index.textContent = "";
  });
};
