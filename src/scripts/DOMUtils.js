import { BOARD_SIZE } from './GameBoard';

export default {
  renderBoard,
};

export function renderBoard(gameBoard) {
  for (let i = 0; i < (BOARD_SIZE + 1); i++) {
    for (let j = 0; j < (BOARD_SIZE + 1); j++) {
      const cell = createCell(j, i);
      gameBoard.appendChild(cell);
    }
  }

  return gameBoard;
}

function createCell(x, y) {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  if (!(x === 0 || y === 0)) {
    cell.classList.add('game-cell');
    cell.dataset.x = x - 1;
    cell.dataset.y = y - 1;
  }
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

export function renderShips(playerBoard, boardDOM, hideShips = false) {
  const start = 12;
  const gameCellSize = boardDOM.children[start].getBoundingClientRect().width;
  const borderSize = gameCellSize - Number(window.getComputedStyle(boardDOM.children[start], '::before').width.slice(0, -2));

  boardDOM.querySelectorAll('.ship').forEach((ship) => ship.remove());

  playerBoard.board.forEach((row, y) => {
    row.forEach((col, x) => {
      const index = start + y * 11 + x;
      const cell = boardDOM.children[index];
      const { ship, status, direction } = col;

      if (status === 'miss') {
        cell.style = 'background-color: grey;';
      }

      if (status === 'hit') {
        cell.style = 'background-color: red;';
      }

      if (ship === null) return;
      if (hideShips) return; // for computer's board so it's hidden for the player

      if (x > 0 && playerBoard.board[y][x - 1].ship === ship) return;
      if (y > 0 && playerBoard.board[y - 1][x].ship === ship) return;

      const top = gameCellSize * (1 + y);
      const left = gameCellSize * (1 + x);

      let width = gameCellSize;
      let height = gameCellSize;

      if (direction === 'horizontal') width *= ship.length;
      else height *= ship.length;

      width += borderSize;
      height += borderSize;

      if ((direction === 'vertical' && (x + 1) === BOARD_SIZE)
        || (direction === 'horizontal' && (x + ship.length) === BOARD_SIZE)) {
        width -= borderSize;
      }

      const shipElement = document.createElement('div');
      shipElement.className = 'ship';
      shipElement.dataset.x = x;
      shipElement.dataset.y = y;
      shipElement.style.width = `${width}px`;
      shipElement.style.height = `${height}px`;
      shipElement.style.top = `${top}px`;
      shipElement.style.left = `${left}px`;
      shipElement.addEventListener('click', null, true);

      const shipBlocks = document.createElement('div');
      shipBlocks.className = 'ship-blocks';
      shipBlocks.style.top = `-${borderSize * 2}px`;
      shipBlocks.style.left = `-${borderSize * 2}px`;
      shipBlocks.style.width = `${width}px`;
      shipBlocks.style.height = `${height}px`;

      if (direction === 'vertical') shipBlocks.style.flexDirection = 'column';
      for (let i = 0; i < ship.length; i++) {
        const shipBlock = document.createElement('div');
        shipBlock.className = 'ship-block';
        shipBlock.dataset.x = (direction === 'horizontal') ? x + i : x;
        shipBlock.dataset.y = (direction === 'vertical') ? y + i : y;
        shipBlock.dataset.index = i;
        shipBlocks.appendChild(shipBlock);
      }

      shipElement.appendChild(shipBlocks);
      boardDOM.appendChild(shipElement);
    });
  });
}
