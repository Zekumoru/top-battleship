/* eslint-disable no-constant-condition, no-loop-func, no-await-in-loop, no-console */
import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import './style.css';
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
  renderShips(computer.board, enemyBoardDOM);
});

Game.populateBoard(player.board);
Game.populateBoard(computer.board);

renderShips(player.board, userBoardDOM);
renderShips(computer.board, enemyBoardDOM, true);

makeShipsDraggable(userBoardDOM);
makeDroppable(userBoardDOM.querySelectorAll('.game-cell'));

// Game.start({
//   playerOne: player,
//   playerTwo: computer,
//   playerOneDOM: userBoardDOM,
//   playerTwoDOM: enemyBoardDOM,
// }).then((winner) => {
//   console.log(`${winner.name} wins!`);
// });

const dragInfo = {
  ship: null,
  shipBlock: null,
  shipBlockIndex: -1,
};

function makeShipsDraggable(boardDOM) {
  boardDOM.querySelectorAll('.ship').forEach((ship) => {
    ship.draggable = true;

    [...ship.children].forEach((shipBlock, index) => {
      shipBlock.addEventListener('mousedown', () => {
        dragInfo.shipBlock = shipBlock;
        dragInfo.shipBlockIndex = index;
      });
    });

    ship.addEventListener('dragstart', () => {
      dragInfo.ship = ship;
      makeDroppable([...ship.children].filter((shipBlock) => (shipBlock !== dragInfo.shipBlock)));
    });

    ship.addEventListener('dragend', () => {
      dragInfo.ship = null;
      dragInfo.shipBlock = null;
      dragInfo.shipBlockIndex = -1;
      removeDroppable([...ship.children]);
    });
  });
}

function makeDroppable(array) {
  array.forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', drop);
  });
}

function removeDroppable(array) {
  array.forEach((item) => {
    item.removeEventListener('dragover', dragOver);
    item.removeEventListener('drop', drop);
  });
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  console.log(e.target);
}
