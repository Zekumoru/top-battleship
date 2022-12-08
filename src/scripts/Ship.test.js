import Ship from './Ship';

test('A length of 3 ship with 3 hits is sunk', () => {
  const ship = new Ship(3);

  ship.hit();
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(true);
});

test('A ship not hit is floating', () => {
  const ship = new Ship(1);

  expect(ship.isSunk()).toBe(false);
});

test('A ship with length zero throws RangeError', () => {
  expect(() => {
    new Ship(0);
  }).toThrow(RangeError);
});
