type EventHandler = (...args: any[]) => void;

export class EventEmitter {
  // TODO: Implement event emitter with on, off, and emit methods
  
  on(event: string, handler: EventHandler): void {
    throw new Error("Not implemented");
  }

  off(event: string, handler: EventHandler): void {
    throw new Error("Not implemented");
  }

  emit(event: string, ...args: any[]): void {
    throw new Error("Not implemented");
  }
}
