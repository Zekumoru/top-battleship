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

  do {
    let alreadyHit;
    do {
      // eslint-disable-next-line no-await-in-loop, no-loop-func
      const attackedTile = await new Promise((resolve) => { userClick = resolve; });
      const { x, y } = attackedTile.dataset;

      ({ alreadyHit } = computer.board.receiveAttack(x, y));
    } while (alreadyHit);

    const { x, y } = computer.attack();
    player.board.receiveAttack(x, y);

    renderShips(player.board, userBoardDOM);
    renderShips(computer.board, enemyBoardDOM, true);
  } while (!player.board.hasAllSunk() && !computer.board.hasAllSunk());

  console.log('Game has finished!');
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
