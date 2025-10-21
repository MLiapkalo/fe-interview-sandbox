# Promise Delay

## Description
Create a function that returns a Promise which resolves after a specified delay with a given value.

## Requirements
- Input: Delay in milliseconds (number) and value (any type)
- Output: Promise that resolves to the value after the delay
- Constraints: Delay must be non-negative

## Examples
```typescript
// Example 1
input: delay(1000, "hello")
output: Promise that resolves to "hello" after 1 second

// Example 2
input: delay(0, 42)
output: Promise that resolves to 42 immediately
```

## Notes
- Time complexity: O(1)
- Space complexity: O(1)
