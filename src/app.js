/* eslint-disable no-constant-condition, no-loop-func, no-await-in-loop, no-console */
import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import './style.css';
import { BOARD_SIZE } from './scripts/GameBoard';
import { renderBoard, renderShips } from './scripts/DOMUtils';
import Player from './scripts/Player';
import ComputerPlayer from './scripts/ComputerPlayer';

let userClick;
const userBoardDOM = renderBoard(document.querySelector('#user-game-board'));
const enemyBoardDOM = renderBoard(document.querySelector('#enemy-game-board'));

async function gameLoop() {
  const player = new Player();
  const computer = new ComputerPlayer();

  populateBoard(player.board);
  populateBoard(computer.board);

  renderShips(player.board, userBoardDOM);
  renderShips(computer.board, enemyBoardDOM, true);

  while (true) {
    await handlePlayerTurn(computer, enemyBoardDOM);
    if (computer.board.hasAllSunk()) break;

    await handleComputerTurn(computer, player, userBoardDOM);
    if (player.board.hasAllSunk()) break;
  }

  console.log(`Game has finished! ${player.board.hasAllSunk() ? computer.name : 'Player'} wins!`);
}

async function handlePlayerTurn(opponent, opponentBoardDOM) {
  let hit;
  let alreadyHit;

  do {
    const attackedTile = await new Promise((resolve) => { userClick = resolve; });
    const { x, y } = attackedTile.dataset;

    ({ hit, alreadyHit } = opponent.board.receiveAttack(x, y));
    renderShips(opponent.board, opponentBoardDOM, true);
  } while (hit || alreadyHit);
}

async function handleComputerTurn(computer, opponent, opponentBoardDOM) {
  let hit;

  do {
    const { x, y } = computer.attack();

    ({ hit } = opponent.board.receiveAttack(x, y));
    renderShips(opponent.board, opponentBoardDOM);
  } while (hit && !opponent.board.hasAllSunk());
}

enemyBoardDOM.addEventListener('click', (e) => {
  if (!e.target.classList.contains('game-cell')) return;
  userClick(e.target);
});

function populateBoard(board) {
  const shipsLengths = [5, 4, 3, 2, 2, 1, 1];
  shipsLengths.forEach((shipLength) => {
    let x;
    let y;
    let direction;

    do {
      x = generateRandomInt(BOARD_SIZE);
      y = generateRandomInt(BOARD_SIZE);
      direction = (Math.random() > 0.5) ? 'horizontal' : 'vertical';
    } while (!board.placeShip(x, y, shipLength, direction));
  });
}

function generateRandomInt(num) {
  return Math.floor(Math.random() * num);
}

gameLoop();
