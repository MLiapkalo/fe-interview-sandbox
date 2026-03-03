# Event Emitter

## Description
Implement a simple event emitter (pub/sub pattern) that allows subscribing to events, emitting events, and unsubscribing from events.

## Requirements
- Input: Event names (strings) and callback functions
- Output: Event emitter instance with the following methods:
  - `on(event, handler)` - Subscribe a handler to an event
  - `off(event, handler)` - Unsubscribe a specific handler from an event
  - `emit(event, ...args)` - Trigger all handlers for an event with optional arguments
- Constraints:
  - Support multiple listeners per event
  - Support unsubscribing specific listeners
  - Listeners called in order of subscription

## Examples
```typescript
const emitter = new EventEmitter();

// Subscribe to event
emitter.on('click', (x, y) => console.log(`Clicked at ${x}, ${y}`));

// Emit event with arguments
emitter.emit('click', 10, 20); // "Clicked at 10, 20"

// Unsubscribe specific handler
const handler = () => console.log('Handler');
emitter.on('data', handler);
emitter.off('data', handler);
emitter.emit('data'); // Nothing happens
```

## Notes
- Time complexity: O(n) for emit where n is number of listeners
- Space complexity: O(n) for storing listeners
- Edge cases: Non-existent events, removing non-existent listeners
