import EventEmitter from 'events';

export default class EventHandler {
  #events;

  constructor() {
    this.#events = new EventEmitter();
  }

  addEventListener(type, listener) {
    this.#events.on(type, listener);
  }

  removeEventListener(type, listener) {
    this.#events.removeListener(type, listener);
  }

  dispatchEvent(type, ...args) {
    this.#events.emit(type, ...args);
  }
}
