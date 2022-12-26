import ComputerPlayer from './ComputerPlayer';
import { BOARD_SIZE } from './GameBoard';
import Player from './Player';

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('that the player name is correct', () => {
  const player = new Player('Zekumoru');
  expect(player.name).toMatch('Zekumoru');
});

test('that the computer makes a move at some random location', () => {
  const computer = new ComputerPlayer();
  const coords = computer.attack();

  expect(coords.x).toBeDefined();
  expect(coords.y).toBeDefined();
});

test('that the computer does not make the same move', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.12345);

  const computer = new ComputerPlayer();

  const moveOne = computer.attack();
  const moveTwo = computer.attack();

  expect(moveOne).not.toBe(moveTwo);
});

test('that the attack is near the given coord', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.12345);

  const computer = new ComputerPlayer();
  const coord = computer.attack(); // returns { x: 2, y: 1 }

  expect(computer.attack(coord)).toMatchObject({ x: 1, y: 1 });
});

test('that attacking nearby does not return a move twice', () => {
  const computer = new ComputerPlayer();
  const coords = [];
  let coord = computer.attack(); // returns { x: 2, y: 1 }

  coords.push(coord);
  for (let i = 1; i < BOARD_SIZE ** 2; i++) {
    coord = computer.attack(coord);
    coords.push(coord);
  }

  const containsDuplicateValue = (array) => array.reduce((duplicate, value, index) => {
    if (duplicate) return duplicate;

    for (let i = index + 1; i < array.length; i++) {
      if (value === array[i]) return true;
    }

    return duplicate;
  }, false);

  expect(containsDuplicateValue(coords)).not.toBe(true);
});
