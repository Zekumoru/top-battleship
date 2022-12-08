import { BOARD_SIZE } from './GameBoard';
import Player from './Player';

export default class ComputerPlayer extends Player {
  #availableMoves;
  #movesPointer;

  constructor() {
    super('Computer');
    this.#initAvailableMoves();
  }

  attack() {
    if (this.#movesPointer <= 0) return null;

    const index = Math.floor(Math.random() * this.#movesPointer);
    this.#movesPointer--;
    [this.#availableMoves[index], this.#availableMoves[this.#movesPointer]] = [this.#availableMoves[this.#movesPointer], this.#availableMoves[index]];
    return this.#availableMoves[this.#movesPointer];
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
