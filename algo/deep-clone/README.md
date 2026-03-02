# Deep Clone

## Description
Implement a function that creates a deep copy of a JavaScript value, ensuring complete immutability from the original. The clone should handle nested objects, arrays, and primitive values.

## Requirements
- Input: Any JavaScript value (object, array, primitive, null, undefined)
- Output: A deep copy of the input value
- Constraints: 
  - Must handle nested objects and arrays
  - Must handle primitive values (string, number, boolean, null, undefined)
  - Must handle Date objects
  - Must handle circular references (throw error or handle gracefully)
  - Should not copy functions or symbols

## Examples
```typescript
// Example 1: Nested object
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 3;
console.log(original.b.c); // 2 (unchanged)

// Example 2: Array with objects
const arr = [{ x: 1 }, { y: 2 }];
const clonedArr = deepClone(arr);
clonedArr[0].x = 10;
console.log(arr[0].x); // 1 (unchanged)

// Example 3: Date object
const date = new Date('2026-01-01');
const clonedDate = deepClone(date);
console.log(clonedDate instanceof Date); // true
console.log(clonedDate.getTime() === date.getTime()); // true

// Example 4: Primitives
deepClone(42); // 42
deepClone("hello"); // "hello"
deepClone(null); // null
```

## Notes
- Time complexity: O(n) where n is total number of values in structure
- Space complexity: O(n) for the cloned structure
- Edge cases: circular references, Date objects, null/undefined, empty objects/arrays
