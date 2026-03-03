# String Compression

## Description
Implement string compression using run-length encoding. Compress consecutive duplicate characters into character + count format. **Return the compressed string only if it's shorter than the original, otherwise return the original.**

## Requirements
- Input: A string
- Output: Compressed string if shorter, otherwise original string
- Constraints:
  - Format: character followed by count (e.g., "aaa" → "a3")
  - Only compress consecutive duplicates
  - **Critical: Return original if compressed length >= original length**
  - Case-sensitive

## Examples
```typescript
// Compression is shorter - return compressed
compressString("aabbbcc") // "a2b3c2"

// Compression NOT shorter - return original
compressString("abc") // "abc" (not "a1b1c1")

// Long runs
compressString("aaaaaaaaaa") // "a10"

// Case-sensitive
compressString("AAAaaa") // "A3a3"
```

## Notes
- Time complexity: O(n)
- Space complexity: O(n)
- Edge cases: Empty string, single character, no duplicates
