import ComputerPlayer from './ComputerPlayer';
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

function attackPlayer(player, computer) {
  const attack = computer.attack(player.board);
  if (attack == null) return null;

  player.board.receiveAttack(attack.x, attack.y);
  return attack;
}

test('that the computer tries to sink a ship once hit', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  // 0.5 produces (0, 5) for computer's first attack

  const player = new Player('Player');
  const computer = new ComputerPlayer();

  player.board.placeShip(0, 5, 5, 'vertical');

  // once a ship has been hit, it takes at most
  // (length of ship) + 2 turns to sink a ship.
  for (let i = 0; i < 7; i++) attackPlayer(player, computer);

  expect(player.board.board[5][0].ship.isSunk()).toBe(true);
});

test('that attacking a ship of length one does not save it as a target since it\'s already sunk', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

  const player = new Player('Player');
  const computer = new ComputerPlayer();

  player.board.placeShip(0, 5);
  attackPlayer(player, computer);

  expect(attackPlayer(player, computer)).toMatchObject({ x: 7, y: 4 });
});

test('that the computer does not attack tiles around a sunk ship', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.45687);
  // 0.45687 produces (5, 4) as first computer's attack

  const player = new Player('Player');
  const computer = new ComputerPlayer();
  const aroundTiles = [];

  const x = 5;
  const y = 4;
  const length = 3;
  player.board.placeShip(x, y, length);

  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + length; j++) {
      if (i === y && j >= x && j < x + length) continue;
      aroundTiles.push({ x: j, y: i });
    }
  }

  while ((attackPlayer(player, computer)) != null);

  expect(aroundTiles.reduce((attacked, tile) => {
    if (attacked) return attacked;

    const { x, y } = tile;
    if (player.board.board[y][x].status !== 'none') return true;

    return attacked;
  }, false)).toBe(false);
});

test('that the computer does not go over the board if a ship is touching the borders', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.36454);

  const player = new Player('Player');
  const computer = new ComputerPlayer();

  player.board.placeShip(5, 3, 5);
  attackPlayer(player, computer); // attacks (6, 3)
  attackPlayer(player, computer); // attacks (7, 3)
  attackPlayer(player, computer); // attacks (8, 3)
  attackPlayer(player, computer); // attacks (9, 3)

  let attack;
  expect(() => {
    attack = attackPlayer(player, computer);
  }).not.toThrow(TypeError);

  expect(attack).toMatchObject({ x: 5, y: 3 });
});
