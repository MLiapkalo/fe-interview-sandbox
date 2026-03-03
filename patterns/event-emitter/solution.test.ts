import { assertEquals } from "@std/assert";
import { EventEmitter } from "./solution.ts";

Deno.test("EventEmitter - basic subscription and emission", () => {
  const emitter = new EventEmitter();
  let called = false;

  emitter.on("test", () => {
    called = true;
  });

  emitter.emit("test");
  assertEquals(called, true);
});

Deno.test("EventEmitter - multiple listeners", () => {
  const emitter = new EventEmitter();
  const results: number[] = [];

  emitter.on("event", () => results.push(1));
  emitter.on("event", () => results.push(2));
  emitter.on("event", () => results.push(3));

  emitter.emit("event");
  assertEquals(results, [1, 2, 3]);
});

Deno.test("EventEmitter - emit with arguments", () => {
  const emitter = new EventEmitter();
  let result = "";

  emitter.on("greet", (name: string, age: number) => {
    result = `${name} is ${age}`;
  });

  emitter.emit("greet", "Alice", 30);
  assertEquals(result, "Alice is 30");
});

Deno.test("EventEmitter - unsubscribe listener", () => {
  const emitter = new EventEmitter();
  let count = 0;

  const handler = () => {
    count++;
  };

  emitter.on("click", handler);
  emitter.emit("click");
  assertEquals(count, 1);

  emitter.off("click", handler);
  emitter.emit("click");
  assertEquals(count, 1);
});

Deno.test("EventEmitter - different events", () => {
  const emitter = new EventEmitter();
  const results: string[] = [];

  emitter.on("event1", () => results.push("e1"));
  emitter.on("event2", () => results.push("e2"));

  emitter.emit("event1");
  emitter.emit("event2");

  assertEquals(results, ["e1", "e2"]);
});

Deno.test("EventEmitter - non-existent event", () => {
  const emitter = new EventEmitter();
  
  // Should not throw
  emitter.emit("nonexistent");
  emitter.off("nonexistent", () => {});
  
  assertEquals(true, true);
});
