import { BOARD_SIZE } from './GameBoard';
import Player from './Player';

export default class ComputerPlayer extends Player {
  #availableMoves;
  #movesPointer;

  constructor() {
    super('Computer');
    this.#initAvailableMoves();
  }

  attack(nearCoord = null) {
    if (this.#movesPointer <= 0) return null;

    let index = -1;

    if (nearCoord) index = this.#randomIndexNearToCoord(nearCoord);
    if (index === -1) index = Math.floor(Math.random() * this.#movesPointer);

    this.#movesPointer--;
    [this.#availableMoves[index], this.#availableMoves[this.#movesPointer]] = [this.#availableMoves[this.#movesPointer], this.#availableMoves[index]];
    return this.#availableMoves[this.#movesPointer];
  }

  #randomIndexNearToCoord(nearCoord) {
    // don't forget to account for cell's already hit by not adding them to possibleMoves
    const { x, y } = nearCoord;
    const possibleMoves = [
      { x: x - 1, y },
      { x, y: y - 1 },
      { x: x + 1, y },
      { x, y: y + 1 },
    ].filter((move) => {
      if (move.x < 0 || move.y < 0) return false;
      if (move.x >= BOARD_SIZE || move.y >= BOARD_SIZE) return false;
      return !this.#alreadyMoved(move.x, move.y);
    });

    if (possibleMoves.length === 0) return -1;

    const chosen = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    return this.#availableMoves.findIndex((move) => (move.x === chosen.x && move.y === chosen.y));
  }

  #alreadyMoved(x, y) {
    for (let i = this.#movesPointer; i < this.#availableMoves.length; i++) {
      const previousMove = this.#availableMoves[i];
      if (previousMove.x === x && previousMove.y === y) return true;
    }
    return false;
  }

  #initAvailableMoves() {
    this.#availableMoves = [];

    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        this.#availableMoves.push({
          x: j,
          y: i,
        });
      }
    }

    this.#movesPointer = this.#availableMoves.length;
  }
}
