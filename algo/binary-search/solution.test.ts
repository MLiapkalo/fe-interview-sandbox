import { assertEquals } from "@std/assert";
import { binarySearch } from "./solution.ts";

Deno.test("binarySearch - basic cases", () => {
  assertEquals(binarySearch([1, 3, 5, 7, 9], 5), 2);
  assertEquals(binarySearch([1, 3, 5, 7, 9], 1), 0);
  assertEquals(binarySearch([1, 3, 5, 7, 9], 9), 4);
  assertEquals(binarySearch([2, 4, 6, 8], 6), 2);
});

Deno.test("binarySearch - edge cases", () => {
  assertEquals(binarySearch([], 5), -1);
  assertEquals(binarySearch([42], 42), 0);
  assertEquals(binarySearch([42], 41), -1);
  assertEquals(binarySearch([1, 2], 1), 0);
  assertEquals(binarySearch([1, 2], 2), 1);
});

Deno.test("binarySearch - not found cases", () => {
  assertEquals(binarySearch([1, 3, 5, 7, 9], 6), -1);
  assertEquals(binarySearch([1, 3, 5, 7, 9], 0), -1);
  assertEquals(binarySearch([1, 3, 5, 7, 9], 10), -1);
  assertEquals(binarySearch([2, 4, 6, 8], 3), -1);
});
