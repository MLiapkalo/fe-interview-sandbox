# Unique Tags

## Description
Find all unique HTML tag names in a given DOM Element and return them as a sorted array.

## Requirements
- Input: Element (DOM node from deno-dom)
- Output: Array of unique tag names in lowercase, sorted alphabetically
- Constraints: Handle nested elements and traverse entire subtree

## Examples
```typescript
// Example 1
input: Element containing <div><p>Hello</p><span>World</span></div>
output: ['div', 'p', 'span']

// Example 2
input: Element containing <img src="test.jpg" /><br /><img alt="another" />
output: ['br', 'img']
```

## Notes
- Time complexity: O(n log n)
- Space complexity: O(n)
- Edge cases: Single element, nested duplicates, self-closing tags
