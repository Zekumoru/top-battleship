import ComputerPlayer from './ComputerPlayer';
import Player from './Player';

test('Player name is correct', () => {
  const player = new Player('Zekumoru');
  expect(player.name).toMatch('Zekumoru');
});

test('Computer makes a move at some random location', () => {
  const computer = new ComputerPlayer();
  const coords = computer.attack();

  expect(coords.x).toBeDefined();
  expect(coords.y).toBeDefined();
});

test('Computer does not make the same move', () => {
  jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.12345).mockReturnValueOnce(0.12345);

  const computer = new ComputerPlayer();

  const moveOne = computer.attack();
  const moveTwo = computer.attack();

  expect(moveOne).not.toBe(moveTwo);
});
