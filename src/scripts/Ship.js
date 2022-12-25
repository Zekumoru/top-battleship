import EventHandler from './EventHandler';

export default class Ship {
  #length;
  #hits;
  #sunk;
  #events;

  constructor(length) {
    if (length <= 0) throw new RangeError('invalid ship length');

    this.#hits = 0;
    this.#sunk = false;
    this.#length = length;
    this.#events = new EventHandler();
  }

  get length() {
    return this.#length;
  }

  get hits() {
    return this.#hits;
  }

  get events() {
    return this.#events;
  }

  hit() {
    this.#hits++;
    this.#events.dispatchEvent('hit', this.#hits, this);

    if (this.#hits >= this.#length) {
      this.#sunk = true;
      this.#events.dispatchEvent('sunk', this);
    }
  }

  isSunk() {
    return this.#sunk;
  }
}
