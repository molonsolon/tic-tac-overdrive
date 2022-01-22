export default function Gameboard() {
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

  const getBoard = () => board;

  const getResultCheckSectors = () => resultCheckSectors;

  function getRemainingSectors(boardState) {
    return boardState.filter((i) => i !== "o" && i !== "x");
  }

  function setBoard(index, marker) {
    board.splice(index, 1, marker);
  }

  const clearBoard = () => {
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const boardSpaces = document.querySelectorAll(".board-space");
    boardSpaces.forEach((index) => {
      // eslint-disable-next-line no-param-reassign
      index.textContent = "";
    });
  };

  return {
    getResultCheckSectors,
    getRemainingSectors,
    getBoard,
    setBoard,
    clearBoard,
  };
}
