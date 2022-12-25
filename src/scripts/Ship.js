export default class Ship {
  onHit;
  onSunk;
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
    if (typeof this.onHit === 'function') this.onHit(this.#hits);

    if (this.#hits >= this.#length) {
      this.#sunk = true;
      if (typeof this.onSunk === 'function') this.onSunk();
    }
  }

  isSunk() {
    return this.#sunk;
  }
}
