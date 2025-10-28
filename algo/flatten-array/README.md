# Flatten Array

## Description
Flatten a nested array structure, converting multi-dimensional arrays into a single-dimensional array while preserving element order.

## Requirements
- Input: Array of mixed elements (numbers, strings, nested arrays)
- Output: Single-dimensional array with all elements flattened
- Constraints: Handle arbitrary nesting depth

## Examples
```typescript
// Example 1
input: [1, [2, 3], [4, [5, 6]]]
output: [1, 2, 3, 4, 5, 6]

// Example 2
input: [[1, 2], [3, [4, [5]]]]
output: [1, 2, 3, 4, 5]
```

## Notes
- Time complexity: O(n) where n is total number of elements
- Space complexity: O(d) where d is maximum nesting depth
- Edge cases: Empty arrays, single elements, deeply nested structures
