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

  attack(board = null) {
    if (this.#movesPointer <= 0) return null;

    if (this.#targetShip == null && this.#isLastMoveAHit(board)) {
      this.#targetShip = this.#getShip(this.#prevMove, board);
      this.#firstHitCoord = this.#prevMove;
    }

    if (this.#targetShip?.isSunk()) {
      this.#removeAdjacentMoves(board);
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
    if (board == null) return false;
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

    if (possibleMoves.length === 0) {
      // this statement accounts for when the ship is touching the border
      return this.#getRandomAdjacentMove(this.#firstHitCoord, board, { direction: this.#getShipDirection(this.#targetShip, board) });
    }

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

  #removeAdjacentMoves(board) {
    let moveInfo = this.#getMoveInfo(this.#prevMove, board);
    while (moveInfo) {
      moveInfo.adjacents.forEach((adjacent) => this.#removeMove(adjacent));
      moveInfo = this.#getMoveInfo(moveInfo.next, board, moveInfo.move);
    }
  }

  #getMoveInfo(move, board, previous = null) {
    if (move == null) return null;

    const { x, y } = move;
    const moveInfo = {
      adjacents: [],
      next: null,
      move,
    };

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // don't push the move itself

        const dX = x + j;
        const dY = y + i;
        const cell = board.board[dY]?.[dX];
        if (cell === undefined) continue;

        moveInfo.adjacents.push({ x: dX, y: dY });
        if (cell.status === 'hit' && !(dX === previous?.x && dY === previous?.y)) {
          moveInfo.next = { x: dX, y: dY };
        }
      }
    }

    return moveInfo;
  }

  #removeMove(move) {
    const index = this.#getMoveIndex(move);
    if (index < 0) return false;

    this.#getMove(index);
    return true;
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
