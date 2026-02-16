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
    if(!this.subscribers.hasOwnProperty(event)) {
      this.subscribers[event] = [callback]
    } else {
      this.subscribers[event].push(callback)
    }
  }

  publish(event, data) {
    // TODO: call the callback with the data
    if(this.subscribers.hasOwnProperty(event)) {
      for(let f of this.subscribers[event]) {
        f(data)
      }
    }
    
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
    if(!Singleton.instance) {
      Singleton.instance = new Object("Instance Created")
    } else {
      throw new Error("Cannot create another instance")
    }
    return Singleton.instance
  }
}

module.exports = {
  Singleton,
  PubSub,
};
