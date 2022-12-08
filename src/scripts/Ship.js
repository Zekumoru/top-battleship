export default class Ship {
  #length;
  #hits;
  #sunk;

  constructor(length) {
    if (length <= 0) throw new RangeError('invalid ship length');

    this.#hits = 0;
    this.#sunk = false;
    this.#length = length;
  }

  get length() {
    return this.#length;
  }

  get hits() {
    return this.#hits;
  }

  hit() {
    this.#hits++;
  }

  isSunk() {
    if (this.#hits >= this.#length) this.#sunk = true;
    return this.#sunk;
  }
}
