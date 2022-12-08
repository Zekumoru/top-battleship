import GameBoard from './GameBoard';

export default class Player {
  #name;
  #board;

  constructor(name) {
    this.#name = name;
    this.#board = new GameBoard();
  }

  get name() {
    return this.#name;
  }

  get board() {
    return this.#board;
  }
}
