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

test('Computer exhausts moves', () => {
  const computer = new ComputerPlayer();

  expect(() => {
    let counter = 0;
    while (computer.attack()) {
      if (counter >= 100) throw new Error('too many calls');
      counter++;
    }
  }).not.toThrow(Error);
});
