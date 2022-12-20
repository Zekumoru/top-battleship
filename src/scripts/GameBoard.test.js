import GameBoard, { BOARD_SIZE } from './GameBoard';

it('should return false placing a ship outside the board', () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.placeShip(-1, 0)).toBe(false);
  expect(gameBoard.placeShip(0, -1)).toBe(false);
  expect(gameBoard.placeShip(BOARD_SIZE, 0)).toBe(false);
  expect(gameBoard.placeShip(0, BOARD_SIZE)).toBe(false);
});

it('should return false placing a ship with length going outside the board', () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.placeShip(BOARD_SIZE - 1, 0, 2, 'horizontal')).toBe(false);
  expect(gameBoard.placeShip(0, BOARD_SIZE - 1, 2, 'vertical')).toBe(false);
});

test('that a cell contains status and direction', () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.board[0][0].status).toMatch('none');
  expect(gameBoard.board[0][0].direction).toMatch('none');
});

it('it should properly set the board\'s cell info when placing a ship', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(0, 0, 2, 'horizontal');
  gameBoard.placeShip(0, 2, 2, 'vertical');
  expect(gameBoard.board[0][0].ship).not.toBeUndefined();
  expect(gameBoard.board[2][0].ship).not.toBeUndefined();
});

test('that a cell contains a ship\'s direction when placed', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(0, 0, 2, 'horizontal');
  gameBoard.placeShip(0, 2, 2, 'vertical');
  expect(gameBoard.board[0][0].direction).toMatch('horizontal');
  expect(gameBoard.board[2][0].direction).toMatch('vertical');
});

it('should return false placing a ship adjacent to another ship', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(0, 0);
  expect(gameBoard.placeShip(0, 1)).toBe(false);
});

it('should return false placing a ship overlapping another ship', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(0, 0, 3, 'horizontal');
  expect(gameBoard.placeShip(2, 0)).toBe(false);
});

it('should return true placing a ship two blocks away from another ship', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(0, 0, 3, 'horizontal');
  expect(gameBoard.placeShip(0, 2)).toBe(true);
});

test('that a ship has been hit', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(0, 0, 3, 'horizontal');

  expect(gameBoard.receiveAttack(0, 0).hit).toBe(true);
});

it('should contain an error property sending a missile outside the board', () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.receiveAttack(-1, -1).error).toMatch(/invalid coordinates/);
});

test('that it returns missed if the coordinate has already been sent a missile to', () => {
  const gameBoard = new GameBoard();
  gameBoard.receiveAttack(0, 0);
  expect(gameBoard.board[0][0].status).toMatch('miss');
});

it('should return true if all ships have sunk', () => {
  const gameBoard = new GameBoard();

  gameBoard.placeShip(0, 0);
  gameBoard.placeShip(5, 5, 2);
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(5, 5);
  gameBoard.receiveAttack(6, 5);

  expect(gameBoard.hasAllSunk()).toBe(true);
});

it('should return hit property with false if attacked the same spot', () => {
  const gameBoard = new GameBoard();

  gameBoard.placeShip(1, 1);
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(1, 1);

  expect(gameBoard.receiveAttack(0, 0).alreadyHit).toBe(true);
  expect(gameBoard.receiveAttack(1, 1).alreadyHit).toBe(true);
});
