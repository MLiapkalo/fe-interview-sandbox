import { assertEquals } from "@std/assert";
import { DOMParser, Element } from "deno-dom";
import { getUniqueTags } from "./solution.ts";

// Helper to create Element from HTML string
function createElement(html: string): Element {
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, "text/html");
  const container = doc.querySelector("div");
  
  if (!container || !container.firstElementChild) {
    throw new Error("Failed to create element");
  }
  
  return container.firstElementChild as Element;
}

Deno.test("getUniqueTags - basic cases", () => {
  const element1 = createElement('<div><p>Hello</p><span>World</span></div>');
  const result1 = getUniqueTags(element1);
  assertEquals(result1, ['div', 'p', 'span']);
  
  const element2 = createElement('<section><h1>Title</h1><p>Content</p></section>');
  const result2 = getUniqueTags(element2);
  assertEquals(result2, ['h1', 'p', 'section']);
});

Deno.test("getUniqueTags - single element", () => {
  const element = createElement('<button>Click me</button>');
  const result = getUniqueTags(element);
  assertEquals(result, ['button']);
});

Deno.test("getUniqueTags - nested and duplicates", () => {
  const element = createElement('<div><div><span>Nested</span></div><span>Another</span></div>');
  const result = getUniqueTags(element);
  assertEquals(result, ['div', 'span']);
});
