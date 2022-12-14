/* eslint-disable no-constant-condition, no-loop-func, no-await-in-loop, no-console */
import { BOARD_SIZE } from './GameBoard';
import ComputerPlayer from './ComputerPlayer';

let getUserInput;
const Game = {
  start,
  populateBoard,
  get getUserInput() {
    if (typeof getUserInput !== 'function') return () => {};
    return getUserInput;
  },
};

export default Game;

async function start({
  playerOne, playerTwo, onBeforeTurn, onTurn, onTurnMade, onNextTurn,
}) {
  const listeners = {
    onBeforeTurn, onTurn, onTurnMade, onNextTurn,
  };

  while (true) {
    await handleTurn(playerOne, playerTwo, listeners);
    if (playerTwo.board.hasAllSunk()) break;

    await handleTurn(playerTwo, playerOne, listeners);
    if (playerOne.board.hasAllSunk()) break;
  }

  return playerTwo.board.hasAllSunk() ? playerOne : playerTwo;
}

async function handleTurn(player, opponent, listeners) {
  const isComputer = (player instanceof ComputerPlayer);
  let hit;
  let alreadyHit = true;

  if (typeof listeners.onBeforeTurn === 'function') await listeners.onBeforeTurn(player, opponent);

  do {
    const coord = (isComputer)
      ? player.attack(opponent.board)
      : (await new Promise((resolve) => { getUserInput = resolve; }));

    if (!isComputer && coord.player !== player) continue;
    const { x, y } = coord;
    coord.x = Number(x);
    coord.y = Number(y);

    if (typeof listeners.onTurn === 'function') await listeners.onTurn(player, opponent);

    ({ hit, alreadyHit } = opponent.board.receiveAttack(x, y));
    if (typeof listeners.onTurnMade === 'function') await listeners.onTurnMade(player, opponent, (alreadyHit) ? null : coord);

    if (opponent.board.hasAllSunk()) return;
  } while (hit || alreadyHit);

  if (typeof listeners.onNextTurn === 'function') await listeners.onNextTurn(player, opponent);
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
