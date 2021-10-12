/* 
                To-Do

    [x] Try switching row/column/diagonal functions into game module.
    [x] Figure out object of row/column/diagonal functions, loop through for results check.
    [ ] Make game.checkResults() return finalResult, have displayController check when this value
        equals something other than undefined then display that result via a div toggle with
        win message in body.
        --- returning finalResult from game module gets a referenceError: finalResult is not defined..
            figure this out!!!
    [x] game.checkResult function isn't detecting correctly after creating successful minimax ai
        figure out WHY this is happening before throwing solutions @ it all slap-dash.
    [ ] minimax function isn't working, only returning first possible value instead of using recursion

 
*/

const Player = (player1Or2, name, marker) => {
    return {
        player1Or2,
        name,
        marker,

    }
};

let playerOne = Player(1, `joey`, `x`)
let playerTwo = Player(2, `computer`, `o`)

let computerMarker = playerTwo.marker;
let humanMarker = playerOne.marker;

const gameboard = (() => {
    let board = [0, 1, 2,
                3, 4, 5,
                6, 7, 8];

    const resultCheckSectors = {

        row1: () => [0, 1, 2].map(x => board[x]),
        row2: () => [3, 4, 5].map(x => board[x]),
        row3: () => [6, 7, 8].map(x => board[x]),
        column1: () => [0, 3, 6].map(x => board[x]),
        column2: () => [1, 4, 7].map(x => board[x]),
        column3: () => [2, 5, 8].map(x => board[x]),
        diagonal1: () => [0, 4, 8].map(x => board[x]),
        diagonal2: () => [2, 4, 6].map(x => board[x]),
    }


    function getRemainingSectors(currBdst) {
        return currBdst.filter(i => i != `o` && i != `x`);
    }

    const getBoard = () => board;
    
    function setBoard(index, marker) {
        board.splice(index, 1, marker);
    }


    return {
        resultCheckSectors,
        getRemainingSectors,
        getBoard: getBoard,
        setBoard: setBoard,
        board,
    }
})();

let currentBoard = gameboard.getBoard()


const game = (() => {

    let whoseTurn = 0;
    const getTurn = () => whoseTurn;
    const setTurn = () => whoseTurn++;


    let currentBoard = gameboard.getBoard()

    let computerMarker = playerTwo.marker;
    let humanMarker = playerOne.marker;

    function choiceController() {

    }

    const computerOpponent = () => {
       

        // i think that the index displayed for the best move might be adjusted 1 higher or 1 lower,
        // some of the results are coming back undefined.
        let compChoice = minimax(gameboard.board, computerMarker);
        console.log(compChoice)
        let compChoiceSelector = document.querySelector(`#sector-${compChoice}`);
        console.log(compChoiceSelector)
        compChoiceSelector.textContent = playerTwo.marker;
        console.log(gameboard.board);
        gameboard.setBoard(compChoice, playerTwo.marker);
        console.log(checkResults());
        
        setTurn();
        console.log(`work`);
    }

    let finalResult = null;


    const checkResults = (currBdst, currMark) => {
        for (let key in gameboard.resultCheckSectors) {
            
            if ((gameboard.resultCheckSectors[`${key}`]().join(`,`) == `x,x,x`) ||
                (gameboard.resultCheckSectors[`${key}`]().join(`,`) == `o,o,o`)) {
                if ((getTurn() % 2) == 0) {
                    return `playerOne wins!`
                } else if ((getTurn() % 2) != 0) {
                    return `playerTwo wins!`
                }

                // improve this logic, it isn't catching the case of a win in the last turn
            } else if ((getTurn() === 8) &&
                (gameboard.resultCheckSectors[`${key}`]().join(``) != `xxx`) &&
                (gameboard.resultCheckSectors[`${key}`]().join(``) != `ooo`)) {
                return `it's a tie!`
            
            }
        }

    }


    function minimax(currBdst, currMark) {
        const emptyCellsStore = gameboard.getRemainingSectors(currBdst);


        if (checkResults() == `playerOne wins!`) {
            return { score: -1 };
        } else if (checkResults() == `playerTwo wins!`) {
            return { score: 1 };
        } else if (emptyCellsStore.length === 0) {
            return { score: 0 };
        }



        const testHistory = [];

        // seems that error is being caused by the minimax reading the same board state
        // solution is to actively update board state then revert it at the end. This is 
        // done by example effectively because board is a public variable that doesn't need
        // a public function to change it. 

        for (let i = 0; i < emptyCellsStore.length; i++) {
            const currentTest = [];
            currentTest.index = currBdst[emptyCellsStore[i]];
            currBdst[emptyCellsStore[i]] = currMark;

            if (currMark === computerMarker) {
                const result = minimax(currBdst, humanMarker);
                currentTest.score = result.score;

            } else {
                const result = minimax(currBdst, computerMarker);
                currentTest.score = result.score;
            }

            currBdst[emptyCellsStore[i]] = currentTest.index;
            testHistory.push(currentTest);
        }

        let bestNextMove;

        if (currMark === computerMarker) {
            let bestScore = -Infinity;
            for (let i = 0; i < testHistory.length; i++) {
                if (testHistory[i].score > bestScore) {
                    bestScore = testHistory[i].score;
                    bestNextMove = i;
                }
            }
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < testHistory.length; i++) {
                if (testHistory[i].score < bestScore) {
                    bestScore = testHistory[i].score;
                    bestNextMove = i;
                }
            }
        }
        return testHistory
    }


    return {
        checkResults,
        computerOpponent,
        finalResult,
        getTurn,
        setTurn
    }
})();

const displayController = (() => {
    const getBoard = gameboard.getBoard();
    const gameboardContainer = document.querySelector(`#gameboard-container`);

    function displayBoard() {

        // const boardSpace = document.getElementById(`${i}`);

        for (let i = 0; i < gameboard.board.length; i++) {
            const boardSpace = document.createElement(`div`);
            boardSpace.classList.add(`board-space`);
            boardSpace.setAttribute(`id`, `sector-${i}`);
            gameboardContainer.appendChild(boardSpace);

            boardSpace.addEventListener(`click`, () => {

                if (game.getTurn() % 2 == 0 && boardSpace.textContent !== `x` && boardSpace.textContent !== `o` && playerTwo.name == `computer`) {
                    boardSpace.textContent = playerOne.marker;
                    gameboard.setBoard(i, boardSpace.textContent);
                    game.checkResults();
                    console.log(game.checkResults());
                    if (game.checkResults() != undefined) {
                        alert(game.checkResults())
                    }
                    game.setTurn();
                    game.computerOpponent();
                    console.log(gameboard.board);
                    
                    

                } else if (game.getTurn() % 2 == 0 && boardSpace.textContent !== `x` && boardSpace.textContent !== `o`) {
                    boardSpace.textContent = playerOne.marker;
                    gameboard.setBoard(i, boardSpace.textContent);
                    game.checkResults();
                    game.setTurn();


                } else if (boardSpace.textContent !== `x` && boardSpace.textContent !== `o`) {
                    boardSpace.textContent = playerTwo.marker;
                    gameboard.setBoard(i, boardSpace.textContent);
                    game.checkResults();
                    game.setTurn();

                }


            })
        }
    };

    return {
        board: getBoard,
        displayBoard: displayBoard
    }
})();




displayController.displayBoard();

