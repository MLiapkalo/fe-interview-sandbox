# Memo

## Description
Implement a memo function that caches the results of expensive function calls based on their arguments. When called with the same arguments, return the cached result instead of re-executing the function.

## Requirements
- Input: A function to memoize
- Output: A memoized version of the function that caches results
- Constraints: 
  - Cache key should be based on function arguments
  - Should work with any number of arguments
  - Should work with primitive argument types (string, number, boolean)
  - Should handle object arguments (same values = cache hit, regardless of key order)

## Examples
```typescript
// Example 1: Multiple cached results
let callCount = 0;
const double = (n: number) => {
  callCount++;
  return n * 2;
};
const memoizedDouble = memo(double);

memoizedDouble(5); // callCount = 1, returns 10
memoizedDouble(3); // callCount = 2, returns 6
memoizedDouble(5); // callCount = 2 (cached), returns 10
memoizedDouble(3); // callCount = 2 (cached), returns 6

// Example 2: Object arguments
const process = (obj: { x: number; y: number }) => obj.x + obj.y;
const memoizedProcess = memo(process);

memoizedProcess({ x: 1, y: 2 }); // Executes, returns 3
memoizedProcess({ x: 1, y: 2 }); // Cached, returns 3
memoizedProcess({ y: 2, x: 1 }); // Cached (same values, different key order), returns 3
```

## Notes
- Time complexity: O(1) for cache hits, O(n) for cache misses where n is original function complexity
- Space complexity: O(k) where k is number of unique argument combinations
- Edge cases: Different argument types, multiple arguments, undefined/null arguments, object arguments with different key orders
