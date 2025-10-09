---
title: Add a New Feature
description: Step-by-step guide for adding new features to the repository
---

# How to Add a New Feature

This guide shows you how to add a new feature to the Template repository following best practices.

## Planning Phase

### 1. Check Existing Features

Before starting:

```bash
# Search for similar functionality
git grep -i "similar-feature"

# Check open/closed issues
# Visit: https://github.com/IAmJonoBo/Template/issues
```

### 2. Create or Find an Issue

- Check if an issue exists
- If not, create a feature request
- Discuss the approach in the issue
- Get feedback before coding

### 3. Plan Your Implementation

Consider:
- **Scope**: What exactly needs to be done?
- **Impact**: What will change?
- **Testing**: How will you test it?
- **Documentation**: What docs need updates?

## Implementation Phase

### 1. Create a Feature Branch

```bash
# Update main
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/descriptive-name
```

### 2. Write Failing Tests (TDD)

Start with tests that define the feature:

```typescript
// src/features/calculator.spec.ts
import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    it('should handle zero', () => {
      expect(calculator.add(0, 5)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it('should handle negative results', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });
  });
});
```

Run tests (they should fail):
```bash
npm test
```

### 3. Implement the Feature

```typescript
// src/features/calculator.ts

/**
 * A simple calculator for basic arithmetic operations
 */
export class Calculator {
  /**
   * Adds two numbers together
   * 
   * @param a - First number
   * @param b - Second number
   * @returns The sum of a and b
   * 
   * @example
   * ```typescript
   * const calc = new Calculator();
   * calc.add(2, 3); // Returns: 5
   * ```
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts b from a
   * 
   * @param a - Number to subtract from
   * @param b - Number to subtract
   * @returns The difference of a and b
   * 
   * @example
   * ```typescript
   * const calc = new Calculator();
   * calc.subtract(5, 3); // Returns: 2
   * ```
   */
  subtract(a: number, b: number): number {
    return a - b;
  }
}
```

### 4. Run Tests

```bash
# Run tests
npm test

# Run with coverage
npm test -- --coverage

# All tests should pass ✓
```

### 5. Add Integration Tests (if needed)

```typescript
// tests/integration/calculator.int.spec.ts
import { Calculator } from '../../src/features/calculator';

describe('Calculator Integration', () => {
  it('should perform complex calculations', () => {
    const calc = new Calculator();
    
    // Complex operation: (5 + 3) - 2 = 6
    const sum = calc.add(5, 3);
    const result = calc.subtract(sum, 2);
    
    expect(result).toBe(6);
  });
});
```

### 6. Update Exports

```typescript
// src/index.ts
export { Calculator } from './features/calculator';

// ... other exports
```

### 7. Verify Quality Checks

```bash
# Run linter
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Run type checker
npm run typecheck

# Run all checks
npm run verify
```

## Documentation Phase

### 1. Add JSDoc Comments

Already done in the implementation above! ✓

### 2. Update README (if needed)

Add to the main README if this is a major feature:

```markdown
## Features

- ✨ Calculator with basic arithmetic operations
```

### 3. Create Feature Documentation

Create `docs/src/content/docs/reference/calculator.md`:

```markdown
---
title: Calculator API
description: Reference documentation for the Calculator class
---

# Calculator API

The Calculator class provides basic arithmetic operations.

## Installation

```typescript
import { Calculator } from 'template-repository';
```

## Usage

### Basic Addition

```typescript
const calc = new Calculator();
const result = calc.add(2, 3);
console.log(result); // 5
```

### Subtraction

```typescript
const calc = new Calculator();
const result = calc.subtract(5, 3);
console.log(result); // 2
```

## API Reference

### `add(a: number, b: number): number`

Adds two numbers together.

**Parameters:**
- `a` - First number
- `b` - Second number

**Returns:** The sum of a and b

**Example:**
```typescript
calc.add(2, 3); // Returns: 5
```

### `subtract(a: number, b: number): number`

Subtracts b from a.

**Parameters:**
- `a` - Number to subtract from
- `b` - Number to subtract

**Returns:** The difference of a and b

**Example:**
```typescript
calc.subtract(5, 3); // Returns: 2
```
```

### 4. Add to Documentation Sidebar

Update `docs/astro.config.mjs`:

```javascript
sidebar: [
  // ... existing items
  {
    label: 'API Reference',
    items: [
      { label: 'Calculator', link: '/reference/calculator/' },
      // ... other items
    ],
  },
]
```

## Version Control Phase

### 1. Review Your Changes

```bash
# Check what changed
git status

# Review the diff
git diff

# Check for any debug code or console.logs
git diff | grep -i console
```

### 2. Stage Changes

```bash
# Stage specific files
git add src/features/calculator.ts
git add src/features/calculator.spec.ts
git add src/index.ts
git add docs/src/content/docs/reference/calculator.md

# Or stage all
git add .
```

### 3. Commit with Conventional Commit

```bash
git commit -m "feat: add Calculator class with basic operations

Implements a Calculator class that supports:
- Addition of two numbers
- Subtraction of two numbers

Includes:
- Comprehensive unit tests
- Integration tests
- JSDoc documentation
- API reference documentation

Closes #123"
```

### 4. Create Changeset

```bash
npx changeset add

# Select: minor (new feature)
# Summary: Add Calculator class with addition and subtraction operations
```

## Review Phase

### 1. Self-Review

```bash
# Review your code
git diff main...feature/calculator

# Check for:
# - Unnecessary changes
# - Debug code
# - Console.logs
# - TODO comments
```

### 2. Run Final Checks

```bash
# One last verification
npm run verify

# Build docs
cd docs
npm run build
cd ..
```

### 3. Push to Your Fork

```bash
git push origin feature/calculator
```

### 4. Create Pull Request

1. Go to GitHub
2. Click "Compare & pull request"
3. Fill out the template:

```markdown
## Description
Adds a Calculator class with basic arithmetic operations (addition and subtraction).

## Type of Change
- [x] ✨ New feature (non-breaking change which adds functionality)

## Changes Made
- Created Calculator class in src/features/calculator.ts
- Added comprehensive unit tests
- Added integration tests
- Created API documentation
- Updated exports in index.ts

## Testing
- [x] Unit tests added (100% coverage)
- [x] Integration tests added
- [x] All tests pass locally

## Documentation
- [x] JSDoc comments added
- [x] API reference documentation created
- [x] README updated (if needed)

## Checklist
- [x] Code follows style guidelines
- [x] Self-reviewed
- [x] Added tests
- [x] Added documentation
- [x] Added changeset
- [x] All checks pass
```

## Post-Submission

### 1. Respond to CI Checks

Wait for automated checks to complete:
- ✓ Linting
- ✓ Type checking
- ✓ Tests
- ✓ Build

If any fail, fix and push again.

### 2. Address Review Comments

When maintainers review:

```bash
# Make requested changes
# Edit files...

# Commit changes
git add .
git commit -m "refactor: address code review feedback"

# Push to update PR
git push origin feature/calculator
```

### 3. After Merge

```bash
# Update local main
git checkout main
git pull upstream main

# Delete feature branch
git branch -d feature/calculator
```

## Best Practices Checklist

- [ ] Started with tests (TDD)
- [ ] Wrote clean, readable code
- [ ] Added comprehensive tests
- [ ] Included JSDoc comments
- [ ] Created documentation
- [ ] Followed naming conventions
- [ ] Used TypeScript types
- [ ] Handled edge cases
- [ ] Added error handling
- [ ] Created changeset
- [ ] Self-reviewed code
- [ ] Tested locally

## Common Pitfalls to Avoid

### ❌ Don't

- Add unrelated changes
- Skip tests
- Ignore type errors
- Forget documentation
- Use `any` type
- Leave debug code
- Skip changeset
- Make huge PRs

### ✅ Do

- Keep changes focused
- Write tests first
- Fix all type errors
- Document everything
- Use specific types
- Remove debug code
- Add changeset
- Keep PRs small

## Example: Complete Feature Flow

```bash
# 1. Plan
# - Created issue #123
# - Discussed approach

# 2. Implement
git checkout -b feature/calculator
# - Write tests
# - Implement feature
# - Add docs

# 3. Verify
npm run verify

# 4. Commit
git add .
git commit -m "feat: add Calculator class"
npx changeset add

# 5. Push & PR
git push origin feature/calculator
# - Create PR
# - Address feedback

# 6. Merge & Clean up
# - PR merged!
git checkout main
git pull upstream main
git branch -d feature/calculator
```

## Need Help?

- 📚 [Coding Conventions](../../reference/conventions/)
- 🏗️ [Architecture Guide](../../explanation/architecture/)
- 🧪 [Testing Guide](../testing/)
- 💬 [GitHub Discussions](https://github.com/IAmJonoBo/Template/discussions)

---

**Happy feature building!** 🚀
