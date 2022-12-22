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
makeDroppable(userBoardDOM);

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

        dragInfo.ship = event.target;
        dragInfo.board = board;
        dragInfo.boardDOM = boardDOM;
        dragInfo.moving = true;
      },
      move(event) {
        position.x += event.dx;
        position.y += event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
      end(event) {
        clonedShip.remove();
        event.target.style.transform = '';
        renderShips(player.board, userBoardDOM);
        dragInfo.moving = false;
      },
    },
  });

  interact('.ship-block').on('down', (event) => {
    dragInfo.shipBlock = event.target;
  });
}

function makeDroppable() {
  interact('.game-cell').dropzone({
    ondrop(event) {
      const origX = Number(dragInfo.ship.dataset.x);
      const origY = Number(dragInfo.ship.dataset.y);
      const draggedShipBlockX = Number(dragInfo.shipBlock.dataset.x);
      const draggedShipBlockY = Number(dragInfo.shipBlock.dataset.y);
      const offsetX = draggedShipBlockX - origX;
      const offsetY = draggedShipBlockY - origY;

      const newX = Number(event.target.dataset.x);
      const newY = Number(event.target.dataset.y);

      const { board } = dragInfo;
      const { ship, direction } = board.board[origY][origX];

      board.removeShip(ship);

      const placed = board.placeShip(newX - offsetX, newY - offsetY, ship.length, direction);
      if (!placed) {
        board.placeShip(origX, origY, ship.length, direction);
      }
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
