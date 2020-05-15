interface IEventEmitter {
  /**
   * Interface providing Observer pattern functionality.
   */

  /**
   * Bind a callback function to an event.
   * @param eventName - name of the event.
   * @param callback - the callback function that will be called when the event is emitted.
   */

  addEventListener(eventName: string, callback: () => any): void;

  /**
   * Unbind a callback function from an event.
   * @param eventName - name of the event.
   * @param callback - the callback function to unbind.
   */
  removeEventListener(eventName: string, callback: () => any): void;

  /**
   * Emit an event.
   * @param eventName - name of the event to emit.
   */
  emit(eventName: string): void;
}

export { IEventEmitter };
