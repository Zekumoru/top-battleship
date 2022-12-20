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

      for (let i = length - 1; i >= 0; i--) {
        if (this.#isCoordNearShips(x, y + i)) return false;
      }

      ship = new Ship(length);
      for (let i = length - 1; i >= 0; i--) {
        this.#board[y + i][x].ship = ship;
        this.#board[y + i][x].direction = direction;
      }
    }
    else {
      if ((x + length - 1) >= BOARD_SIZE) return false;

      for (let i = length - 1; i >= 0; i--) {
        if (this.#isCoordNearShips(x + i, y)) return false;
      }

      ship = new Ship(length);
      for (let i = length - 1; i >= 0; i--) {
        this.#board[y][x + i].ship = ship;
        this.#board[y][x + i].direction = direction;
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

    const block = this.#board[y]?.[x];

    if (block === undefined) {
      return {
        error: 'invalid coordinates',
        ...outcome,
      };
    }

    if (block.ship === null && block.status === 'none') {
      this.#board[y][x].status = 'miss';
      return outcome;
    }

    if (block.status === 'hit' || block.status === 'miss') {
      return {
        alreadyHit: true,
        ...outcome,
      };
    }

    block.ship.hit();
    outcome.hit = true;
    this.#board[y][x].status = 'hit';

    return outcome;
  }

  #initBoard(rows, cols) {
    this.#board = [];

    for (let i = 0; i < rows; i++) {
      const row = [];

      for (let j = 0; j < cols; j++) {
        row.push({
          ship: null,
          status: 'none',
          direction: 'none',
        });
      }

      this.#board.push(row);
    }
  }

  #isCoordNearShips(x, y) {
    for (let i = -1; i < 2; i++) {
      const aY = y + i;
      if (aY < 0 || aY >= BOARD_SIZE) continue;

      for (let j = -1; j < 2; j++) {
        const aX = x + j;
        if (aX < 0 || aX >= BOARD_SIZE) continue;

        if (this.#board[aY][aX].ship !== null) return true;
      }
    }

    return false;
  }
}
