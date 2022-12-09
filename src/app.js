import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import './style.css';
import { BOARD_SIZE } from './scripts/GameBoard';

renderBoard(document.querySelector('#user-game-board'));
renderBoard(document.querySelector('#enemy-game-board'));

function renderBoard(gameBoard) {
  for (let i = 0; i < (BOARD_SIZE + 1); i++) {
    for (let j = 0; j < (BOARD_SIZE + 1); j++) {
      const cell = createCell(j, i);
      gameBoard.appendChild(cell);
    }
  }
}

function createCell(x, y) {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  if (!(x === 0 || y === 0)) cell.classList.add('game-cell');
  else if (x !== 0 && y === 0) {
    cell.innerHTML = `<div class="content">${String.fromCharCode(x + 64)}</div>`;
    cell.classList.add('alpha-label');
  }
  else if (x === 0 && y !== 0) {
    cell.innerHTML = `<div class="content">${y}</div>`;
    cell.classList.add('numeric-label');
  }

  return cell;
}
