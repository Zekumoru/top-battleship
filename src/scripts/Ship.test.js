import Ship from './Ship';

test('that a ship with length 3 and 3 hits is sunk', () => {
  const ship = new Ship(3);

  ship.hit();
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(true);
});

test('that a ship with no hits is still floating', () => {
  const ship = new Ship(1);

  expect(ship.isSunk()).toBe(false);
});

test('that creating a ship with length 0 throws a RangeError', () => {
  expect(() => {
    new Ship(0);
  }).toThrow(RangeError);
});
