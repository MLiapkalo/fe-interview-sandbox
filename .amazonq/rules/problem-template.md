# Problem Template Guide

## Overview
This guide defines the standard structure for adding coding problems to the Deno workspace for **Frontend Developer interviews**. Each problem follows a consistent format to ensure clarity and maintainability.

## Categories
Problems are organized into categories based on frontend development skills:

- **async/** - Tests knowledge of async/await, Promises, micro and macro tasks
- **dom/** - Working with DOM manipulation and browser APIs
- **algo/** - Fundamental algorithm problems relevant to frontend development

## Directory Structure
```
category-name/
├── problem-name/
│   ├── README.md           # Problem description and requirements
│   ├── solution.ts         # Implementation file
│   └── solution.test.ts    # Comprehensive test suite
```

## Naming Convention
- Category: `kebab-case` (e.g., `async`, `dom`, `algo`)
- Problem directory: `kebab-case` (e.g., `promise-chain`, `event-delegation`, `binary-search`)
- Files: Use consistent naming as shown above

## File Templates

### README.md Template
```markdown
# Problem Name

## Description
[Clear, concise problem statement relevant to frontend development]

## Requirements
- Input: [Describe input parameters and types]
- Output: [Describe expected return type and format]
- Constraints: [List any constraints or edge cases]

## Examples
```typescript
// Example 1
input: [example input]
output: [expected output]

// Example 2
input: [example input]
output: [expected output]
```

## Notes
- Time complexity: O(?)
- Space complexity: O(?)
- Edge cases: [List important edge cases if necessary for solution]
```

### solution.ts Template
```typescript
export function functionName(param1: type, param2: type): returnType {
  // TODO: [Very concise explanation of what needs to be implemented]
  throw new Error("Not implemented");
}

// REMOVE BEFORE COMMIT
// export function functionName(param1: type, param2: type): returnType {
//   // Actual implementation here
// }
```

### solution.test.ts Template
```typescript
import { assertEquals, assertThrows } from "@std/assert";
import { functionName } from "./solution.ts";

Deno.test("functionName - basic cases", () => {
  assertEquals(functionName(input1), expectedOutput1);
  assertEquals(functionName(input2), expectedOutput2);
});

Deno.test("functionName - edge cases", () => {
  assertEquals(functionName(edgeInput1), expectedOutput1);
  assertEquals(functionName(edgeInput2), expectedOutput2);
});

Deno.test("functionName - error cases", () => {
  assertThrows(() => functionName(invalidInput));
});
```

## Test Requirements
Tests must cover:
1. **Basic functionality** - Standard use cases
2. **Edge cases** - Empty inputs, single elements, boundary values
3. **Error handling** - Invalid inputs, type mismatches
4. **Frontend-specific scenarios** - Browser behavior, async timing, DOM states

## Task Configuration
Each problem must have its own test task in `deno.json` for targeted testing:

```json
{
  "tasks": {
    "test:category-problem": "deno test category/problem/",
    "test:async-promise-chain": "deno test async/promise-chain/",
    "test:dom-event-delegation": "deno test dom/event-delegation/",
    "test:algo-binary-search": "deno test algo/binary-search/"
  }
}
```

## Running Tests
```bash
# Run all tests
deno test

# Run specific problem tests
deno task test:category-problem

# Run all tests in a category
deno test category/

# Run with coverage
deno test --coverage
```

## Checklist for New Problems
- [ ] Problem is in appropriate category directory
- [ ] Directory uses kebab-case naming
- [ ] README.md includes clear problem description with frontend context
- [ ] solution.ts has proper TypeScript types
- [ ] solution.test.ts covers all test categories
- [ ] Tests pass with `deno test`
- [ ] Code follows TypeScript best practices
- [ ] Problem is relevant to frontend development skills
- [ ] Task added to deno.json for individual testing
- [ ] Root README.md updated if new category was added
