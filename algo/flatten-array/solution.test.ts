import { assertEquals } from "@std/assert";
import { flattenArray } from "./solution.ts";

Deno.test("flattenArray - basic cases", () => {
  assertEquals(flattenArray([1, [2, 3], [4, [5, 6]]]), [1, 2, 3, 4, 5, 6]);
  assertEquals(flattenArray([[1, 2], [3, [4, [5]]]]), [1, 2, 3, 4, 5]);
  assertEquals(flattenArray([1, 2, 3]), [1, 2, 3]);
});

Deno.test("flattenArray - edge cases", () => {
  assertEquals(flattenArray([]), []);
  assertEquals(flattenArray([[]]), []);
  assertEquals(flattenArray([[[[1]]]]), [1]);
  assertEquals(flattenArray([1, [], [2, []], 3]), [1, 2, 3]);
});

Deno.test("flattenArray - mixed types", () => {
  assertEquals(flattenArray(["a", ["b", "c"], ["d"]]), ["a", "b", "c", "d"]);
  assertEquals(flattenArray([1, ["hello", [true, [null]]]]), [1, "hello", true, null]);
});
