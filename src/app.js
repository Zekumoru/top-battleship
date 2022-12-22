/* eslint-disable no-constant-condition, no-loop-func, no-await-in-loop, no-console */
import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import './style.css';
import interact from 'interactjs';
import { renderBoard, renderShips } from './scripts/DOMUtils';
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

const dragInfo = {
  ship: null,
  shipDirection: 'none',
  shipElement: null,
  shipBlock: null,
  board: null,
  boardDOM: null,
};

function makeShipsDraggable(board, boardDOM) {
  const position = { x: 0, y: 0 };
  let clonedShip = null;

  interact('.ship').draggable({
    listeners: {
      start(event) {
        clonedShip = event.target.cloneNode(true);
        clonedShip.style.opacity = '0.6';
        boardDOM.appendChild(clonedShip);

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

        const x = Number(event.target.dataset.x);
        const y = Number(event.target.dataset.y);
        const { ship, shipDirection: direction } = dragInfo;
        if (ship !== null) {
          board.placeShip(x, y, ship.length, direction);
        }

        renderShips(player.board, userBoardDOM);
      },
    },
  });

  interact('.ship-block').on('down', (event) => {
    dragInfo.shipBlock = event.target;
  });
}

function makeDroppable() {
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

function makeShipsRotatable(board, boardDOM) {
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
