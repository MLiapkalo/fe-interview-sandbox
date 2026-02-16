# Promise Retry

## Description
Create a helper function that retries a failed Promise a specified number of times before throwing an error.

## Requirements
- Input: A function that returns a Promise, and the number of retry attempts
- Output: Resolves with the Promise result on success, or throws after all retries are exhausted
- Constraints: Must retry only on rejection, not on resolution

## Examples
```typescript
// Example 1: Success on first attempt
const successFn = () => Promise.resolve("success");
await promiseRetry(successFn, 3); // Returns "success" immediately

// Example 2: Success on second attempt
let attempt = 0;
const retryOnceFn = () => {
  attempt++;
  return attempt === 1 ? Promise.reject("fail") : Promise.resolve("success");
};
await promiseRetry(retryOnceFn, 3); // Returns "success" after 1 retry

// Example 3: All attempts fail
const failFn = () => Promise.reject("error");
await promiseRetry(failFn, 2); // Throws "error" after 2 retries
```

## Notes
- Time complexity: O(n) where n is the number of attempts
- Space complexity: O(1)
- Edge cases: Zero retries, immediate success, all failures
