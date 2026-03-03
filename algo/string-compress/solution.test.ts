import { assertEquals } from "@std/assert";
import { compressString } from "./solution.ts";

Deno.test("compressString - basic compression", () => {
  assertEquals(compressString("aabbbcc"), "a2b3c2");
  assertEquals(compressString("aaaa"), "a4");
});

Deno.test("compressString - no compression benefit", () => {
  assertEquals(compressString("abc"), "abc");
  assertEquals(compressString("abcd"), "abcd");
});

Deno.test("compressString - long runs", () => {
  assertEquals(compressString("aaaaaaaaaa"), "a10");
  assertEquals(compressString("aaaaabbbbb"), "a5b5");
});

Deno.test("compressString - case sensitivity", () => {
  assertEquals(compressString("AAAaaa"), "A3a3");
  assertEquals(compressString("AaBbCc"), "AaBbCc");
});

Deno.test("compressString - edge cases", () => {
  assertEquals(compressString(""), "");
  assertEquals(compressString("a"), "a");
  assertEquals(compressString("aa"), "aa");
  assertEquals(compressString("aaa"), "a3");
});

Deno.test("compressString - non-consecutive duplicates", () => {
  assertEquals(compressString("aabaa"), "aabaa");
  assertEquals(compressString("aaabaaacaaa"), "a3b1a3c1a3");
});
