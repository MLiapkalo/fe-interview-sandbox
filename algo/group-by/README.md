# Group By

## Description
Group array items by a specified property value. Takes an array of objects and a property key, returning a dictionary where keys are the property values and values are arrays of objects with that property value.

## Requirements
- Input: Array of objects and a property key (string)
- Output: Object with property values as keys and arrays of matching objects as values
- Constraints: Property key must exist on objects, handle empty arrays

## Examples
```typescript
// Example 1
input: ([{name: "Alice", age: 25}, {name: "Bob", age: 25}, {name: "Carol", age: 30}], "age")
output: {25: [{name: "Alice", age: 25}, {name: "Bob", age: 25}], 30: [{name: "Carol", age: 30}]}

// Example 2
input: ([{type: "fruit", name: "apple"}, {type: "vegetable", name: "carrot"}], "type")
output: {fruit: [{type: "fruit", name: "apple"}], vegetable: [{type: "vegetable", name: "carrot"}]}
```

## Notes
- Time complexity: O(n)
- Space complexity: O(n)
- Edge cases: Empty array, missing property values
