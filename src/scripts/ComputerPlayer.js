import { BOARD_SIZE } from './GameBoard';
import Player from './Player';

export default class ComputerPlayer extends Player {
  #availableMoves;
  #movesPointer;
  #targetShip;
  #firstHitCoord;
  #prevMove;

  constructor() {
    super('Computer');
    this.#initAvailableMoves();
  }

  attack(board) {
    if (this.#movesPointer <= 0) return null;

    if (this.#targetShip == null && this.#isLastMoveAHit(board)) {
      this.#targetShip = this.#getShip(this.#prevMove, board);
      this.#firstHitCoord = this.#prevMove;
    }
    else if (this.#targetShip?.isSunk()) {
      this.#targetShip = null;
    }

    if (this.#targetShip?.hits === 1) {
      if (this.#isLastMoveAMiss(board)) {
        return this.#getRandomAdjacentMove(this.#firstHitCoord, board, { direction: this.#getShipDirection(this.#targetShip, board) });
      }
      return this.#getRandomAdjacentMove(this.#prevMove, board);
    }

    if (this.#targetShip?.hits > 1) {
      if (this.#isLastMoveAMiss(board)) {
        return this.#getRandomAdjacentMove(this.#firstHitCoord, board, { direction: this.#getShipDirection(this.#targetShip, board) });
      }
      return this.#getRandomAdjacentMove(this.#prevMove, board, { direction: this.#getShipDirection(this.#targetShip, board) });
    }

    return this.#getRandomMove();
  }

  #isLastMoveAHit(board) {
    if (this.#prevMove == null) return false;

    const { x, y } = this.#prevMove;
    return board.board[y][x].status === 'hit';
  }

  #isLastMoveAMiss(board) {
    if (this.#prevMove == null) return false;

    const { x, y } = this.#prevMove;
    return board.board[y][x].status === 'miss';
  }

  #getShip(coord, board) {
    const { x, y } = coord;
    return board.board[y][x].ship;
  }

  #getShipDirection(ship, board) {
    let direction = 'none';

    board.board.forEach((row) => {
      row.forEach((col) => {
        if (col.ship === ship) {
          direction = col.direction;
        }
      });
    });

    return direction;
  }

  #getRandomAdjacentMove(fromMove, board, { direction } = { direction: 'none' }) {
    const { x, y } = fromMove;
    let possibleMoves = [];

    if (direction === 'none' || direction === 'horizontal') {
      possibleMoves.push({ x: x - 1, y });
      possibleMoves.push({ x: x + 1, y });
    }

    if (direction === 'none' || direction === 'vertical') {
      possibleMoves.push({ x, y: y - 1 });
      possibleMoves.push({ x, y: y + 1 });
    }

    possibleMoves = possibleMoves.filter((move) => {
      if (move.x < 0 || move.y < 0) return false;
      if (move.x >= BOARD_SIZE || move.y >= BOARD_SIZE) return false;
      return !this.#alreadyMoved(move.x, move.y);
    });

    const index = Math.floor(Math.random() * possibleMoves.length);
    this.#prevMove = this.#getMove(this.#getMoveIndex(possibleMoves[index]));
    return this.#prevMove;
  }

  #alreadyMoved(x, y) {
    for (let i = this.#movesPointer; i < this.#availableMoves.length; i++) {
      const previousMove = this.#availableMoves[i];
      if (previousMove.x === x && previousMove.y === y) return true;
    }
    return false;
  }

  #getRandomMove() {
    const index = Math.floor(Math.random() * this.#movesPointer);
    this.#prevMove = this.#getMove(index);
    return this.#prevMove;
  }

  #getMoveIndex(coord) {
    for (let i = 0; i < this.#movesPointer; i++) {
      const move = this.#availableMoves[i];
      if (move.x === coord.x && move.y === coord.y) {
        return i;
      }
    }

    return -1;
  }

  #getMove(index) {
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
