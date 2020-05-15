import { IEventEmitter } from "./IEventEmitter";

/**
 * Implementation of the IEventEmitter interface, providing Observer pattern functionality.
 */
class EventEmitter implements IEventEmitter {
  events: Map<string, Set<() => any>>;

  /**
   * Bind a callback function to an event.
   * @param eventName - name of the event.
   * @param callback - the callback function that will be called when the event is emitted.
   */
  addEventListener(eventName: string, callback: () => any): void {
    //If 'events' does not already have a Set object for the 'eventName' key, then create one.
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set<() => any>());
    }

    //Add the callback to the Set object in 'events' at index 'eventName'.
    this.events.get(eventName).add(callback);
  }

  /**
   * Unbind a callback function from an event.
   * @param eventName - name of the event.
   * @param callback - the callback function to unbind.
   */
  removeEventListener(eventName: string, callback: () => any): void {
    //If there is no Set object at index 'eventName', then there is no callback function bound to the event.
    if (!this.events.has(eventName)) return;

    //Remove the callback function from the Set object at index 'eventName'.
    this.events.get(eventName).delete(callback);
  }

  /**
   * Emit an event.
   * @param eventName - name of the event to emit.
   */
  emit(eventName: string): void {
    //If there is no Set object at index 'eventName', then there is no callback function bound to the event.
    if (!this.events.has(eventName)) return;

    //Loop through and call each function in the Set object at 'eventName'.
    this.events.get(eventName).forEach((callback) => callback());
  }
}

export { EventEmitter };
