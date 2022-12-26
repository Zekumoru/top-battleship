import interact from 'interactjs';
import { BOARD_SIZE } from './GameBoard';

export default {
  renderBoard,
  renderShips,
  renderFleetIndicator,
  makeShipsDraggable,
  makeDroppable,
  makeShipsRotatable,
  removeInteracts,
};

const dragInfo = {
  ship: null,
  shipDirection: 'none',
  shipElement: null,
  shipBlock: null,
  board: null,
  boardDOM: null,
  interactEnabled: false,
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

      cell.classList.remove('miss');
      cell.classList.remove('hit');

      if (status === 'miss') cell.classList.add('miss');
      if (status === 'hit') cell.classList.add('hit');

      if (ship === null) return;
      if (hideShips && !ship.isSunk()) return; // for computer's board so it's hidden to the player, shows the ship if it is sunk though

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
      if (dragInfo.interactEnabled) shipElement.classList.add('interactable');

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

export function renderFleetIndicator(player, fleetIndicator) {
  const shipSize = fleetIndicator.clientWidth / 11;
  fleetIndicator.innerHTML = '';

  player.board.ships.forEach((ship) => {
    const shipElement = document.createElement('div');
    shipElement.className = 'ship';
    shipElement.style.width = `${shipSize * ship.length}px`;
    shipElement.style.height = `${shipSize}px`;
    if (ship.isSunk()) shipElement.classList.add('sunk');

    for (let i = 0; i < ship.length; i++) {
      const shipBlock = document.createElement('div');
      shipBlock.className = 'ship-block';

      shipElement.appendChild(shipBlock);
    }

    fleetIndicator.insertAdjacentElement('beforeend', shipElement);

    ship.onSunk = () => {
      shipElement.classList.add('sunk');
    };
  });
}

export function makeShipsDraggable(board, boardDOM) {
  const position = { x: 0, y: 0 };
  let clonedShip = null;
  dragInfo.interactEnabled = true;

  interact('.ship').draggable({
    listeners: {
      start(event) {
        clonedShip = event.target.cloneNode(true);
        clonedShip.style.opacity = '0.6';
        boardDOM.appendChild(clonedShip);

        event.target.classList.add('dragging');

        position.x = 0;
        position.y = 0;

        const x = Number(event.target.dataset.x);
        const y = Number(event.target.dataset.y);

        dragInfo.ship = board.board[y][x].ship;
        dragInfo.shipDirection = board.board[y][x].direction;
        board.removeShip(dragInfo.ship);

        dragInfo.shipElement = event.target;
        dragInfo.board = board;
        dragInfo.boardDOM = boardDOM;
      },
      move(event) {
        position.x += event.dx;
        position.y += event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
      end(event) {
        clonedShip.remove();
        event.target.style.transform = '';
        event.target.classList.remove('dragging');

        const x = Number(event.target.dataset.x);
        const y = Number(event.target.dataset.y);
        const { ship, shipDirection: direction } = dragInfo;
        if (ship !== null) {
          board.placeShip(x, y, ship.length, direction);
        }

        renderShips(board, boardDOM);
      },
    },
  });

  interact('.ship-block').on('down', (event) => {
    dragInfo.shipBlock = event.target;
  });
}

export function makeDroppable() {
  interact('.game-cell').dropzone({
    listeners: {
      dragenter(event) {
        let x = Number(event.target.dataset.x);
        let y = Number(event.target.dataset.y);
        const { board, ship, shipDirection: direction } = dragInfo;
        const draggedShipBlockIndex = Number(dragInfo.shipBlock.dataset.index);

        if (direction === 'horizontal') x -= draggedShipBlockIndex;
        else y -= draggedShipBlockIndex;

        if (!board.canShipBePlaced(x, y, ship.length, direction)) {
          event.relatedTarget.classList.add('cant-place');
        }
        else {
          event.relatedTarget.classList.remove('cant-place');
        }
      },
      drop(event) {
        const origX = Number(dragInfo.shipElement.dataset.x);
        const origY = Number(dragInfo.shipElement.dataset.y);
        const draggedShipBlockX = Number(dragInfo.shipBlock.dataset.x);
        const draggedShipBlockY = Number(dragInfo.shipBlock.dataset.y);
        const offsetX = draggedShipBlockX - origX;
        const offsetY = draggedShipBlockY - origY;

        const newX = Number(event.target.dataset.x);
        const newY = Number(event.target.dataset.y);

        const { ship, board, shipDirection: direction } = dragInfo;

        const placed = board.placeShip(newX - offsetX, newY - offsetY, ship.length, direction);
        if (!placed) {
          board.placeShip(origX, origY, ship.length, direction);
        }

        dragInfo.ship = null;
      },
    },
  });
}

export function makeShipsRotatable(board, boardDOM) {
  interact('.ship-block').on('doubletap', (event) => {
    const shipElement = event.target.closest('.ship');
    const x = Number(shipElement.dataset.x);
    const y = Number(shipElement.dataset.y);
    const { ship, direction } = board.board[y][x];
    const newDirection = (direction === 'horizontal') ? 'vertical' : 'horizontal';

    board.removeShip(ship);

    const placed = board.placeShip(x, y, ship.length, newDirection);
    if (!placed) {
      board.placeShip(x, y, ship.length, direction);
    }

    renderShips(board, boardDOM);
  });
}

export function removeInteracts(classList) {
  dragInfo.interactEnabled = false;

  classList.forEach((className) => {
    interact(`.${className}`).unset();
  });
}
