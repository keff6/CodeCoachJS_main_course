/**
 * @class PubSub
 * @description A simple pub/sub class
 * @example const pubsub = new PubSub();
 */
class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    // TODO: add the callback to the subscribers
    this.subscribers[event]
      ? this.subscribers[event].push(callback)
      : (this.subscribers[event] = [callback]);
  }

  publish(event, data) {
    // TODO: call the callback with the data
    (this.subscribers[event] || []).forEach((callback) => callback(data));
  }
}

/**
 * @class Singleton
 * @description A simple singleton class
 * @example const singleton = new Singleton();
 */
class Singleton {
  constructor() {
    // TODO: return the same instance
    if (Singleton.instance) {
      throw new Error("Cannot create another instance");
    }
    Singleton.instance = this;
  }
}

module.exports = {
  Singleton,
  PubSub,
};
