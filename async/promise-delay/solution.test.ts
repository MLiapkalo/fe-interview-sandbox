import { assertEquals } from "@std/assert";
import { delay } from "./solution.ts";

Deno.test("delay - basic cases", async () => {
  const start = Date.now();
  const result = await delay(100, "test");
  const elapsed = Date.now() - start;
  
  assertEquals(result, "test");
  assertEquals(elapsed >= 100, true);
});

Deno.test("delay - edge cases", async () => {
  const result1 = await delay(0, 42);
  assertEquals(result1, 42);
  
  const result2 = await delay(1, null);
  assertEquals(result2, null);
});

Deno.test("delay - different types", async () => {
  const obj = { key: "value" };
  const result = await delay(1, obj);
  assertEquals(result, obj);
});
