import { assertEquals, assertThrows } from "@std/assert";
import { groupBy } from "./solution.ts";

Deno.test("groupBy - basic cases", () => {
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Carol", age: 30 }
  ];
  
  assertEquals(groupBy(people, "age"), {
    "25": [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }],
    "30": [{ name: "Carol", age: 30 }]
  });

  const items = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
    { type: "fruit", name: "banana" }
  ];
  
  assertEquals(groupBy(items, "type"), {
    "fruit": [{ type: "fruit", name: "apple" }, { type: "fruit", name: "banana" }],
    "vegetable": [{ type: "vegetable", name: "carrot" }]
  });
});

Deno.test("groupBy - edge cases", () => {
  assertEquals(groupBy([], "name"), {});
  
  const singleItem = [{ id: 1, category: "test" }];
  assertEquals(groupBy(singleItem, "category"), {
    "test": [{ id: 1, category: "test" }]
  });
  
  const duplicateValues = [
    { status: "active" },
    { status: "active" },
    { status: "active" }
  ];
  assertEquals(groupBy(duplicateValues, "status"), {
    "active": [{ status: "active" }, { status: "active" }, { status: "active" }]
  });
});

Deno.test("groupBy - different data types", () => {
  const mixed = [
    { value: 1, type: "number" },
    { value: true, type: "boolean" },
    { value: "test", type: "string" }
  ];
  
  assertEquals(groupBy(mixed, "type"), {
    "number": [{ value: 1, type: "number" }],
    "boolean": [{ value: true, type: "boolean" }],
    "string": [{ value: "test", type: "string" }]
  });
});
