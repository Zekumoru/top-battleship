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

test('that hitting and sinking a ship invoke the events accordingly', () => {
  const ship = new Ship(2);
  const hitListener = jest.fn();
  const sunkListener = jest.fn();

  ship.events.addEventListener('hit', hitListener);
  ship.events.addEventListener('sunk', sunkListener);
  ship.hit();

  expect(hitListener.mock.calls.length).not.toBe(0);
  expect(sunkListener.mock.calls.length).toBe(0);

  ship.hit();
  expect(sunkListener.mock.calls.length).not.toBe(0);
});
