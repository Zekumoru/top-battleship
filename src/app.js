/* eslint-disable no-constant-condition, no-loop-func, no-await-in-loop, no-console */
import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import './style.css';
import {
  renderBoard, renderShips, makeShipsDraggable, makeDroppable, makeShipsRotatable,
} from './scripts/DOMUtils';
import Game from './scripts/Game';
import Player from './scripts/Player';
import ComputerPlayer from './scripts/ComputerPlayer';

const userBoardDOM = renderBoard(document.querySelector('#user-game-board'));
const enemyBoardDOM = renderBoard(document.querySelector('#enemy-game-board'));

enemyBoardDOM.addEventListener('click', (e) => {
  if (!(e.target.classList.contains('game-cell') || e.target.classList.contains('ship-block'))) return;

  Game.getUserInput({
    board: enemyBoardDOM,
    ...e.target.dataset,
  });
});

const player = new Player('Player');
const computer = new ComputerPlayer();

window.addEventListener('resize', () => {
  renderShips(player.board, userBoardDOM);
  renderShips(computer.board, enemyBoardDOM, true);
});

Game.populateBoard(player.board);
Game.populateBoard(computer.board);

renderShips(player.board, userBoardDOM);
renderShips(computer.board, enemyBoardDOM, true);

makeShipsDraggable(player.board, userBoardDOM);
makeShipsRotatable(player.board, userBoardDOM);
makeDroppable();

Game.start({
  playerOne: player,
  playerTwo: computer,
  playerOneDOM: userBoardDOM,
  playerTwoDOM: enemyBoardDOM,
}).then((winner) => {
  console.log(`${winner.name} wins!`);
});
