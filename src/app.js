/* eslint-disable no-constant-condition, no-loop-func, no-await-in-loop, no-console */
import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import './style.css';
import { renderBoard } from './scripts/DOMUtils';
import Game from './scripts/Game';
import Player from './scripts/Player';
import ComputerPlayer from './scripts/ComputerPlayer';

const userBoardDOM = renderBoard(document.querySelector('#user-game-board'));
const enemyBoardDOM = renderBoard(document.querySelector('#enemy-game-board'));

enemyBoardDOM.addEventListener('click', (e) => {
  if (!e.target.classList.contains('game-cell')) return;
  Game.getUserInput(e.target.dataset);
});

Game.start({
  playerOne: new Player(),
  playerTwo: new ComputerPlayer(),
  playerOneDOM: userBoardDOM,
  playerTwoDOM: enemyBoardDOM,
});
