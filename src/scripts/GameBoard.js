import Ship from './Ship';

export const BOARD_SIZE = 10;

export default class GameBoard {
  #board;

  constructor() {
    this.#initBoard(BOARD_SIZE, BOARD_SIZE);
  }

  placeShip(x, y, length = 1, direction = 'horizontal') {
    if (x < 0 || x >= BOARD_SIZE) return false;
    if (y < 0 || y >= BOARD_SIZE) return false;

    if (direction === 'vertical') {
      if ((y + length - 1) >= BOARD_SIZE) return false;

      const ship = new Ship(length);
      for (let i = length - 1; i >= 0; i--) {
        this.#board[y + i][x] = ship;
      }
    }
    else {
      if ((x + length - 1) >= BOARD_SIZE) return false;

      const ship = new Ship(length);
      for (let i = length - 1; i >= 0; i--) {
        this.#board[y][x + i] = ship;
      }
    }

    return true;
  }

  receiveAttack(x, y) {
    const outcome = {
      coords: { x, y },
      hit: false,
    };

    const ship = this.#board[y]?.[x];

    if (ship === null) return outcome;
    if (ship === undefined) {
      return {
        error: 'invalid coordinates',
        ...outcome,
      };
    }

    ship.hit();
    outcome.hit = true;
    return outcome;
  }

  #initBoard(rows, cols) {
    this.#board = [];

    for (let i = 0; i < rows; i++) {
      const row = [];

      for (let j = 0; j < cols; j++) {
        row.push(null);
      }

      this.#board.push(row);
    }
  }
}
