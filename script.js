/* 
                To-Do

    [ ] Try switching row/column/diagonal functions into game module.
    [ ] Figure out object of row/column/diagonal functions, loop through for results check.


*/



const gameboard = (() => {
    let board = ['', '', '',
                 '', '', '',
                 '', '', ''];
    
    const resultCheckSectors = {

        row1: () => [0,1,2].map(x => board[x]),
        row2:() => [3,4,5].map(x => board[x]),
        row3: () => [6,7,8].map(x => board[x]),
        column1: () => [0,3,6].map(x => board[x]),
        column2: () => [1,4,7].map(x => board[x]),
        column3: () => [2,5,8].map(x => board[x]),
        diagonal1: () => [0,4,8].map(x => board[x]),
        diagonal2: () => [2,4,6].map(x => board[x]),
    }
    

    const getBoard = () => board;
    function setBoard(index, marker) {
        board.splice(index, 1, marker);
    }

    return { 
        // row1, row2, row3, column1, column2,column3, diagonal1, diagonal2,
        resultCheckSectors,
        getBoard: getBoard,
        setBoard: setBoard
    }
})();

const game = (() => {
    let whoseTurn = 0;
    const getTurn = () => whoseTurn;
    const setTurn = () => whoseTurn++;
    function choiceController() {
        
    }
    
    

    const checkResults = () => {
        // Object.keys(gameboard.resultCheckSectors).forEach(key => {
            
        // });
        
        for (let key in gameboard.resultCheckSectors) {
            
            // if ( gameboard.resultCheckSectors[`${key}`]() == [`x`, 'x', 'x'] || [`o`, 'o', 'o']) {
            //     let finalResult = gameboard.resultCheckSectors[`${key}`];
            //     return finalResult
            // }
            // return finalResult'
            if (gameboard.resultCheckSectors[`${key}`]().join(``) === `xxx` ||
                gameboard.resultCheckSectors[`${key}`]().join(``) === `ooo`) {
                if (whoseTurn % 2 === 0) {
                    console.log(`playerOne wins!`)
                } else if (whoseTurn % 2 !== 0) {
                    console.log(`playerTwo wins!`)
                }
                
            // improve this logic, it isn't catching the case of a win in the last turn
            } else if (whoseTurn === 8 && (
                gameboard.resultCheckSectors[`${key}`]().join(``) !== `xxx` ||
                gameboard.resultCheckSectors[`${key}`]().join(``) !== `ooo`))
            {
                console.log(`it's a tie!`);
                break;
                
            } else {
                console.log(`no matches`);
            }
        }
        // console.log(finalResult);

    }

    return { 
        checkResults,
        getTurn,
        setTurn 
    }
})();

const displayController = (() => {
    const getBoard = gameboard.getBoard();
    const gameboardContainer = document.querySelector(`#gameboard-container`);
    
    function displayBoard() {
        
        // const boardSpace = document.getElementById(`${i}`);
        // 

        for (let i = 0; i<= 8; i++) {
            const boardSpace = document.createElement(`div`);
            boardSpace.classList.add(`board-space`);
            boardSpace.setAttribute(`id`, `space-${i}`);
            gameboardContainer.appendChild(boardSpace);

            boardSpace.addEventListener(`click`, () => {
                
                if (game.getTurn() % 2 == 0 && boardSpace.textContent == ``) {
                    boardSpace.textContent = playerOne.marker;
                } else if (boardSpace.textContent == ``) {
                    boardSpace.textContent = playerTwo.marker;
                }
                
                gameboard.setBoard(i, boardSpace.textContent);
                game.checkResults();
                game.setTurn();
            })
        } 
    };

    return {
        board: getBoard,
        displayBoard: displayBoard
    }
})();

const Player = (player1Or2, name, marker) => {
    return {
        player1Or2,
        name, 
        marker,
        
    }
};


let playerOne = Player(1, `joey`, `x`)
let playerTwo = Player(2, `computer`, `o`)

displayController.displayBoard();

// I need to split my games functionality between gameboard, game, and player objects.
// I must create a function that allows players to add marks to a specific spot while
// keeping them from marking over already-marked-spots. I also need to create the game logic
// which will track which player is making a move, names of players, and their designated `x` or
// `o` marks. 