/* eslint-disable no-alert */
/* eslint-disable no-console */
/*

  TO - DOs

    Optimization: 
    [x] Code-splitting
        [x] Figure out how to make a factory function with ES6 modules... research seems to
            say that you can use factory functions as normal but i'm not sure how to get this working
    Features:
    [ ] score keeping UI
        [x] basic layout and functionality
        [ ] add labels, animations, make pretty
    [x] game win / lose / draw announcements (render animated announcements on true checkwin
        function call)
        [x] work out draw logic as it's not written into check results yet.
    [ ] play again / main menu button under results announcement;
    [ ] form validation + lock other radio buttons when choice is made.
    [ ] Purely aesthetic UI completion (backgrounds, animations, music, sound effects)
        [x] animate background of gameboard to cycle through each color of my Hyperdrive
            pallete on coolors.co (fast loop), adjust opacity!
        [ ] change font + UI to have more sharp angles

    Bugs:
    [ ] Fix Time's up and timer restart functionality.
    [ ] Timer start is called when endless mode is selected, disable this
    [x] Computer win check is triggering twice, where is this happening?
    [x] win match check is being called twice on winning turn completion, once on restart after.
    [x] webpack is calling functions twice, messing with time mode dropdown
    [x] index.js is not able to locate audio source
    [x] playerOne + Two are not getting defined on form submit
    Completed:

    [x] Try switching row/column/diagonal functions into game module.
    [x] Figure out object of row/column/diagonal functions, loop through for results check.
    [x] Make game.checkResults() return finalResult, have displayController check when this value
        equals something other than undefined then display that result via a div toggle with
        win message in body.
        --- returning finalResult from game module gets a
        referenceError: finalResult is not defined..
            figure this out!!!
    [x] game.checkResult function isn't detecting correctly after creating successful minimax ai
        figure out WHY this is happening before throwing solutions @ it all slap-dash.
    [x] minimax function isn't working, only returning first possible value instead of using
        recursion
    [x] game difficulty selector
    [x] Put get player info functions in Player factory possibly?

*/

import "./css/style.scss";
import { displayBoard, menuController } from "./displayController";

displayBoard();
menuController();
