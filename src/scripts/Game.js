/* eslint-disable no-constant-condition, no-loop-func, no-await-in-loop, no-console */
import { renderShips } from './DOMUtils';
import { BOARD_SIZE } from './GameBoard';
import ComputerPlayer from './ComputerPlayer';

let getUserInput;
const Game = {
  start,
  get getUserInput() {
    if (typeof getUserInput !== 'function') return () => {};
    return getUserInput;
  },
};

export default Game;

async function start({
  playerOne, playerTwo, playerOneDOM, playerTwoDOM,
}) {
  populateBoard(playerOne.board);
  populateBoard(playerTwo.board);

  renderShips(playerOne.board, playerOneDOM);
  renderShips(playerTwo.board, playerTwoDOM, true);

  while (true) {
    await handleTurn(playerOne, playerTwo, playerTwoDOM);
    if (playerTwo.board.hasAllSunk()) break;

    await handleTurn(playerTwo, playerOne, playerOneDOM);
    if (playerOne.board.hasAllSunk()) break;
  }

  console.log(`Game has finished! ${player.board.hasAllSunk() ? computer.name : 'Player'} wins!`);
}

async function handleTurn(player, opponent, opponentBoardDOM) {
  const isComputer = (player instanceof ComputerPlayer);
  let hit;
  let alreadyHit;

  do {
    const coords = (isComputer)
      ? player.attack()
      : (await new Promise((resolve) => { getUserInput = resolve; }));
    const { x, y } = coords;

    ({ hit, alreadyHit } = opponent.board.receiveAttack(x, y));
    renderShips(opponent.board, opponentBoardDOM, !isComputer);
  } while (hit || alreadyHit);
}

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
