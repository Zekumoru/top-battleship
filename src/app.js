import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import './style.css';
import { BOARD_SIZE } from './scripts/GameBoard';

const gameBoard = document.querySelector('#game-board');
for (let i = 0; i < BOARD_SIZE; i++) {
  for (let j = 0; j < BOARD_SIZE; j++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    gameBoard.appendChild(cell);
  }
}
