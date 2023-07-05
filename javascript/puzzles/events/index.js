// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // add the events to an events object
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    // if there is a key in the events object with the event name, add the value
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    // remove the key and entire array of callbacks
    delete this.events[eventName];
  }
}

module.exports = Events;
