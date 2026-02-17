import { assertEquals } from "@std/assert";
import { memo } from "./solution.ts";

Deno.test("memo - caches results for same arguments", () => {
  let callCount = 0;
  const add = (a: number, b: number) => {
    callCount++;
    return a + b;
  };
  const memoizedAdd = memo(add);

  assertEquals(memoizedAdd(1, 2), 3);
  assertEquals(callCount, 1);
  
  assertEquals(memoizedAdd(1, 2), 3);
  assertEquals(callCount, 1, "Should use cached result");
  
  assertEquals(memoizedAdd(2, 3), 5);
  assertEquals(callCount, 2, "Should compute new result for different args");
});

Deno.test("memo - handles multiple cached results", () => {
  let callCount = 0;
  const multiply = (a: number, b: number) => {
    callCount++;
    return a * b;
  };
  const memoizedMultiply = memo(multiply);

  assertEquals(memoizedMultiply(2, 3), 6);
  assertEquals(memoizedMultiply(4, 5), 20);
  assertEquals(memoizedMultiply(2, 3), 6);
  assertEquals(callCount, 2, "Should cache both results independently");
});

Deno.test("memo - argument order matters", () => {
  let callCount = 0;
  const subtract = (a: number, b: number) => {
    callCount++;
    return a - b;
  };
  const memoizedSubtract = memo(subtract);

  assertEquals(memoizedSubtract(5, 3), 2);
  assertEquals(memoizedSubtract(3, 5), -2);
  assertEquals(callCount, 2, "Different argument order should not use cache");
});

Deno.test("memo - object arguments with different key order", () => {
  let callCount = 0;
  const process = (obj: { x: number; y: number }) => {
    callCount++;
    return obj.x + obj.y;
  };
  const memoizedProcess = memo(process);

  assertEquals(memoizedProcess({ x: 1, y: 2 }), 3);
  assertEquals(callCount, 1);
  
  assertEquals(memoizedProcess({ y: 2, x: 1 }), 3);
  assertEquals(callCount, 1, "Different key order should use cache");
  
  assertEquals(memoizedProcess({ x: 2, y: 3 }), 5);
  assertEquals(callCount, 2);
});

Deno.test("memo - multiple arguments and types", () => {
  let callCount = 0;
  const format = (name: string, age: number, active: boolean) => {
    callCount++;
    return `${name}-${age}-${active}`;
  };
  const memoizedFormat = memo(format);

  assertEquals(memoizedFormat("Alice", 30, true), "Alice-30-true");
  assertEquals(callCount, 1);
  
  assertEquals(memoizedFormat("Alice", 30, true), "Alice-30-true");
  assertEquals(callCount, 1, "Should cache mixed types");
  
  assertEquals(memoizedFormat("Alice", 30, false), "Alice-30-false");
  assertEquals(callCount, 2);
});
