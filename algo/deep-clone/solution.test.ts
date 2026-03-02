import { assertEquals, assertNotStrictEquals, assertThrows } from "@std/assert";
import { deepClone } from "./solution.ts";

Deno.test("deepClone - primitives", () => {
  assertEquals(deepClone(42), 42);
  assertEquals(deepClone("hello"), "hello");
  assertEquals(deepClone(null), null);
  assertEquals(deepClone(undefined), undefined);
});

Deno.test("deepClone - nested objects", () => {
  const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
  const cloned = deepClone(obj);
  
  assertEquals(cloned, obj);
  assertNotStrictEquals(cloned.b, obj.b);
  
  cloned.b.d.e = 100;
  assertEquals(obj.b.d.e, 3);
});

Deno.test("deepClone - nested arrays", () => {
  const arr = [1, [2, [3, 4]]];
  const cloned = deepClone(arr);
  
  assertEquals(cloned, arr);
  assertNotStrictEquals(cloned[1], arr[1]);
  
  (cloned[1] as number[])[0] = 100;
  assertEquals((arr[1] as number[])[0], 2);
});

Deno.test("deepClone - mixed nested structures", () => {
  const obj = { nums: [1, 2], nested: { arr: [{ x: 1 }] } };
  const cloned = deepClone(obj);
  
  cloned.nums[0] = 100;
  cloned.nested.arr[0].x = 200;
  
  assertEquals(obj.nums[0], 1);
  assertEquals(obj.nested.arr[0].x, 1);
});

Deno.test("deepClone - Date objects", () => {
  const obj = { created: new Date("2026-01-01") };
  const cloned = deepClone(obj);
  
  assertEquals(cloned.created instanceof Date, true);
  assertEquals(cloned.created.getTime(), obj.created.getTime());
  assertNotStrictEquals(cloned.created, obj.created);
});

Deno.test("deepClone - circular references", () => {
  const obj: any = { a: 1 };
  obj.self = obj;
  
  assertThrows(() => deepClone(obj), Error);
});
