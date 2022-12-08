import Ship from './Ship';

export const BOARD_SIZE = 10;

export default class GameBoard {
  #board;
  #ships;

  constructor() {
    this.#ships = [];
    this.#initBoard(BOARD_SIZE, BOARD_SIZE);
  }

  get board() {
    return Object.freeze(this.#board);
  }

  hasAllSunk() {
    if (!this.#ships.length) return false;

    return this.#ships.reduce((sunk, ship) => {
      if (!ship.isSunk()) return false;
      return sunk;
    }, true);
  }

  placeShip(x, y, length = 1, direction = 'horizontal') {
    if (x < 0 || x >= BOARD_SIZE) return false;
    if (y < 0 || y >= BOARD_SIZE) return false;

    let ship;
    if (direction === 'vertical') {
      if ((y + length - 1) >= BOARD_SIZE) return false;

      ship = new Ship(length);
      for (let i = length - 1; i >= 0; i--) {
        this.#board[y + i][x] = ship;
      }
    }
    else {
      if ((x + length - 1) >= BOARD_SIZE) return false;

      ship = new Ship(length);
      for (let i = length - 1; i >= 0; i--) {
        this.#board[y][x + i] = ship;
      }
    }

    this.#ships.push(ship);

    return true;
  }

  receiveAttack(x, y) {
    const outcome = {
      coords: { x, y },
      hit: false,
    };

    const ship = this.#board[y]?.[x];

    if (ship === null) {
      this.#board[y][x] = {
        missed: true,
      };

      return outcome;
    }

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
