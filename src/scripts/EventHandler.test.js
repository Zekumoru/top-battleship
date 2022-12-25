import EventHandler from './EventHandler';

test('that the event invoked notifies the listener and sends the event\'s arguments correctly', () => {
  const events = new EventHandler();
  const listener = jest.fn((val1, val2) => [val1, val2]);

  events.addEventListener('someEvent', listener);
  events.dispatchEvent('someEvent', 1, 2);

  expect(listener.mock.results[0].value).toEqual([1, 2]);
});

it('should not call the listener when it is removed before an event is invoked', () => {
  const events = new EventHandler();
  const listener = jest.fn();

  events.addEventListener('someEvent', listener);
  events.removeEventListener('someEvent', listener);
  events.dispatchEvent('someEvent');

  expect(listener.mock.calls.length).toBe(0);
});
