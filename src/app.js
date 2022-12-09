import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import './style.css';
import { BOARD_SIZE } from './scripts/GameBoard';
import { renderBoard } from './scripts/DOMUtils';
import Player from './scripts/Player';
import ComputerPlayer from './scripts/ComputerPlayer';

renderBoard(document.querySelector('#user-game-board'));
renderBoard(document.querySelector('#enemy-game-board'));

function gameLoop() {
  const player = new Player();
  const computer = new ComputerPlayer();

  populateBoard(player.board);
  populateBoard(computer.board);
}

function populateBoard(board) {
  const shipsLengths = [5, 4, 3, 2, 2, 1, 1];
  shipsLengths.forEach((shipLength) => {
    let x;
    let y;

    do {
      x = generateRandomInt(BOARD_SIZE);
      y = generateRandomInt(BOARD_SIZE);
    } while (!board.placeShip(x, y, shipLength));
  });
}

function generateRandomInt(num) {
  return Math.floor(Math.random() * num);
}

gameLoop();
