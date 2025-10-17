---
title: Your First Contribution
description: A step-by-step tutorial for making your first contribution
---

# Tutorial: Your First Contribution

Welcome! This tutorial will guide you through making your first contribution to
the Template repository.

**Time Required**: 30-45 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Basic Git knowledge, GitHub account

## What You'll Learn

By the end of this tutorial, you will:

- ✅ Set up your development environment
- ✅ Make a code change
- ✅ Write a test
- ✅ Create a changeset
- ✅ Submit a pull request
- ✅ Respond to code review

## Step 1: Fork and Clone

### Fork the Repository

1. Go to
   [https://github.com/IAmJonoBo/Template](https://github.com/IAmJonoBo/Template)
2. Click the **"Fork"** button in the top right
3. Wait for GitHub to create your fork

### Clone Your Fork

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/Template.git

# Navigate to the directory
cd Template

# Add upstream remote
git remote add upstream https://github.com/IAmJonoBo/Template.git
```

### Verify Setup

```bash
# Check remotes
git remote -v

# Expected output:
# origin    https://github.com/YOUR-USERNAME/Template.git (fetch)
# origin    https://github.com/YOUR-USERNAME/Template.git (push)
# upstream  https://github.com/IAmJonoBo/Template.git (fetch)
# upstream  https://github.com/IAmJonoBo/Template.git (push)
```

## Step 2: Install Dependencies

```bash
# Install all dependencies
npm install

# This will install:
# - TypeScript compiler
# - ESLint and Prettier
# - Jest testing framework
# - Other development tools
```

### Verify Installation

```bash
# Run verification script
npm run verify

# This runs:
# ✓ Linting
# ✓ Type checking
# ✓ Tests
# ✓ Build
```

If all checks pass, you're ready to code! 🎉

## Step 3: Create a Feature Branch

```bash
# Update main branch
git checkout main
git pull upstream main

# Create your feature branch
git checkout -b feature/add-goodbye-function
```

**Branch Naming Tip**: Use descriptive names like:

- `feature/add-user-authentication`
- `fix/null-pointer-error`
- `docs/improve-readme`

## Step 4: Make Your Change

Let's add a simple function. We'll add a `goodbye` function to complement the
existing `hello` function.

### Edit the Source File

Open `src/index.ts` and add:

```typescript
/**
 * Says goodbye to someone
 *
 * @param message - The name of the person
 * @returns The formatted goodbye message
 */
export function goodbye(message: string): string {
  return `Goodbye, ${message}!`;
}
```

Your `src/index.ts` should now look like:

```typescript
/**
 * Main entry point for the Template application
 */

export { version } from './version';

/**
 * Example function to demonstrate the template structure
 *
 * @param message - The message to display
 * @returns The formatted message
 */
export function hello(message: string): string {
  return `Hello, ${message}!`;
}

/**
 * Says goodbye to someone
 *
 * @param message - The name of the person
 * @returns The formatted goodbye message
 */
export function goodbye(message: string): string {
  return `Goodbye, ${message}!`;
}
```

## Step 5: Write a Test

Open `src/index.spec.ts` and add tests for the new function:

```typescript
describe('goodbye', () => {
  it('should return formatted goodbye', () => {
    const result = goodbye('World');
    expect(result).toBe('Goodbye, World!');
  });

  it('should handle empty string', () => {
    const result = goodbye('');
    expect(result).toBe('Goodbye, !');
  });

  it('should handle special characters', () => {
    const result = goodbye('Alice & Bob');
    expect(result).toBe('Goodbye, Alice & Bob!');
  });
});
```

Add the import at the top:

```typescript
import { hello, goodbye, version } from '../index';
```

## Step 6: Run Quality Checks

```bash
# Run linter
npm run lint

# Run type checker
npm run typecheck

# Run tests
npm test

# Run all checks
npm run verify
```

All checks should pass! ✅

## Step 7: Commit Your Changes

```bash
# Stage your changes
git add src/index.ts src/index.spec.ts

# Commit with a conventional commit message
git commit -m "feat: add goodbye function

Adds a new goodbye function that complements the hello function.
Includes comprehensive tests covering edge cases."
```

**Commit Message Format**:

```text
<type>: <subject>

<body>
```

**Common Types**:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `test`: Tests
- `refactor`: Code refactoring

## Step 8: Create a Changeset

Changesets help track what should be in the next release.

```bash
# Create a changeset
npx changeset add
```

Follow the prompts:

```text
🦋  What kind of change is this for template?
◯ major (breaking change)
◉ minor (new feature)
◯ patch (bug fix)

🦋  Please enter a summary:
Add goodbye function to complement hello function
```

This creates a file in `.changeset/` directory.

## Step 9: Push Your Changes

```bash
# Push to your fork
git push origin feature/add-goodbye-function
```

## Step 10: Create a Pull Request

### On GitHub

1. Go to your fork on GitHub
2. You'll see a banner: **"Compare & pull request"** - Click it
3. Fill out the PR template:

**Title**: `feat: add goodbye function`

**Description**:

```markdown
## Description

Adds a new `goodbye` function that provides a friendly farewell message,
complementing the existing `hello` function.

## Type of Change

- [x] ✨ New feature (non-breaking change which adds functionality)

## Changes Made

- Added `goodbye(message: string): string` function to src/index.ts
- Added comprehensive tests covering normal and edge cases
- Updated exports in index.ts

## Testing

- [x] Unit tests added/updated
- [x] All tests pass locally

## Checklist

- [x] My code follows the project's style guidelines
- [x] I have added tests that prove my feature works
- [x] I have added a changeset
- [x] My commits follow the conventional commit format
```

4. Click **"Create pull request"**

## Step 11: Wait for Review

### What Happens Next

1. **Automated Checks**: CI/CD runs automatically
   - Linting ✓
   - Type checking ✓
   - Tests ✓
   - Build ✓

2. **Code Review**: Maintainers will review your code
   - They may request changes
   - They may ask questions
   - Be patient and responsive

### Responding to Feedback

If changes are requested:

```bash
# Make the changes
# Edit files as suggested

# Commit the changes
git add .
git commit -m "refactor: address code review feedback"

# Push to update the PR
git push origin feature/add-goodbye-function
```

The PR automatically updates!

## Step 12: Celebrate! 🎉

Once your PR is approved and merged:

1. Your contribution is in the repository!
2. You'll be listed as a contributor
3. Your changes will be in the next release

### Clean Up

```bash
# Switch back to main
git checkout main

# Pull the latest changes
git pull upstream main

# Delete your feature branch
git branch -d feature/add-goodbye-function

# Delete remote branch (optional)
git push origin --delete feature/add-goodbye-function
```

## Common Issues

### Issue: Tests Failing

```bash
# Check what's failing
npm test

# Run in watch mode to debug
npm test -- --watch
```

### Issue: Linting Errors

```bash
# See what's wrong
npm run lint

# Auto-fix most issues
npm run lint:fix
```

### Issue: Type Errors

```bash
# Check types
npm run typecheck

# Fix type errors manually
```

### Issue: Merge Conflicts

```bash
# Update your branch
git fetch upstream
git rebase upstream/main

# Resolve conflicts in your editor
# Then:
git add .
git rebase --continue

# Force push
git push --force origin feature/add-goodbye-function
```

## Tips for Success

### Do's ✅

- Read existing code first
- Write tests for your code
- Keep changes focused
- Respond to review comments
- Be patient and respectful
- Ask questions if unclear

### Don'ts ❌

- Don't make large, unfocused PRs
- Don't skip tests
- Don't ignore style guidelines
- Don't force push to main
- Don't be discouraged by feedback

## Next Steps

Congratulations on your first contribution! 🎉

### Keep Contributing

- Look for `good first issue` labels
- Help improve documentation
- Review other PRs
- Share your experience

### Learn More

- [Contributing Guide](../../contributing/how-to-contribute/)
- [Development Setup](../../contributing/development-setup/)
- [Coding Conventions](../../reference/conventions/)

## Need Help?

Stuck? Don't worry!

- 💬 Ask in
  [GitHub Discussions](https://github.com/IAmJonoBo/Template/discussions)
- 📖 Read the [Contributing Guide](../../contributing/how-to-contribute/)
- 🐛 Check [existing issues](https://github.com/IAmJonoBo/Template/issues)

---

**You did it!** Welcome to the Template community! 🚀
