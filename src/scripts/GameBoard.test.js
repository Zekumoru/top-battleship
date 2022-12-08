import GameBoard, { BOARD_SIZE } from './GameBoard';

test('Placing a ship outside the board returns false', () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.placeShip(-1, 0)).toBe(false);
  expect(gameBoard.placeShip(0, -1)).toBe(false);
  expect(gameBoard.placeShip(BOARD_SIZE, 0)).toBe(false);
  expect(gameBoard.placeShip(0, BOARD_SIZE)).toBe(false);
});

test('Placing a ship with length going outside the board returns false', () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.placeShip(BOARD_SIZE - 1, 0, 2, 'horizontal')).toBe(false);
  expect(gameBoard.placeShip(0, BOARD_SIZE - 1, 2, 'vertical')).toBe(false);
});

test('Ship has been hit', () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(0, 0, 3, 'horizontal');

  expect(gameBoard.receiveAttack(0, 0).hit).toBe(true);
});

test('Send missile to outside the board', () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.receiveAttack(-1, -1).error).toMatch(/invalid coordinates/);
});
