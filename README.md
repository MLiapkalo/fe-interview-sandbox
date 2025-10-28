# Frontend Interview Sandbox

A collection of coding problems for frontend developer interviews, organized by skill category and built with Deno and TypeScript.

## How to Use

### Prerequisites
- Install [Deno](https://deno.land/)

### Running Tests
```bash
# Test all problems
deno test

# Test specific category
deno test async/
deno test dom/
deno test algo/

# Test individual problem
deno task test:async-promise-delay
deno task test:dom-unique-tags
deno task test:algo-binary-search
```

## Available Problems

### Async Programming
Tests knowledge of Promises, async/await, and JavaScript timing.

| Problem | Description | Command |
|---------|-------------|---------|
| promise-delay | Create delayed Promise resolution | `deno task test:async-promise-delay` |

### DOM Manipulation
Tests DOM traversal and manipulation using deno-dom.

| Problem | Description | Command |
|---------|-------------|---------|
| unique-tags | Find unique HTML tag names | `deno task test:dom-unique-tags` |

### Algorithms
Tests fundamental algorithmic thinking for frontend development.

| Problem | Description | Command |
|---------|-------------|---------|
| binary-search | Search sorted array efficiently | `deno task test:algo-binary-search` |
| group-by | Group array items by property values | `deno task test:algo-group-by` |
| flatten-array | Flatten nested array structure | `deno task test:algo-flatten-array` |

## Problem Structure

Each problem contains:
- `README.md` - Problem requirements and examples
- `solution.ts` - Your implementation goes here
- `solution.test.ts` - Test suite to validate your solution

## Getting Started

1. Choose a problem from the categories above
2. Read the problem's `README.md` for requirements
3. Implement your solution in `solution.ts`
4. Run tests to verify your implementation
