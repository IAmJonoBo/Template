# Contributing Guidelines

Thank you for your interest in contributing to this project! This document provides guidelines and best practices for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/Template.git`
3. Add upstream remote: `git remote add upstream https://github.com/IAmJonoBo/Template.git`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Setup

### Prerequisites

- Node.js 20.11.0 or higher (use the version specified in `.nvmrc`)
- npm, yarn, or pnpm
- Git

### Installation

```bash
# Install dependencies
npm install

# Set up pre-commit hooks
npm run setup:hooks

# Verify setup
npm run verify
```

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/IAmJonoBo/Template/issues)
2. If not, create a new issue using the Bug Report template
3. Provide detailed information:
   - Clear description of the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Environment details
   - Screenshots/logs if applicable

### Suggesting Features

1. Check [Discussions](https://github.com/IAmJonoBo/Template/discussions) for similar suggestions
2. Create a new issue using the Feature Request template
3. Provide:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach
   - Alternatives considered

### Improving Documentation

Documentation contributions are highly valued:

1. Follow the [Diataxis](https://diataxis.fr/) methodology
2. Place content in the appropriate category:
   - **Tutorials**: `docs/src/content/docs/tutorials/`
   - **How-To Guides**: `docs/src/content/docs/how-to/`
   - **Reference**: `docs/src/content/docs/reference/`
   - **Explanation**: `docs/src/content/docs/explanation/`
3. Use clear, concise language
4. Include code examples where appropriate
5. Add diagrams for complex concepts

## Coding Standards

### General Principles

- **Keep it simple**: Write clear, maintainable code
- **DRY**: Don't Repeat Yourself
- **SOLID**: Follow SOLID principles
- **YAGNI**: You Aren't Gonna Need It - don't add unnecessary complexity
- **Test-Driven**: Write tests for your code
- **Document**: Add comments for complex logic

### Code Style

- Follow the `.editorconfig` settings
- Use consistent naming conventions:
  - `camelCase` for variables and functions
  - `PascalCase` for classes and types
  - `UPPER_SNAKE_CASE` for constants
  - `kebab-case` for file names
- Maximum line length: 100 characters
- Use meaningful variable names
- Add JSDoc comments for public APIs

### Language-Specific Guidelines

#### JavaScript/TypeScript

- Use TypeScript when possible
- Prefer `const` over `let`, avoid `var`
- Use arrow functions for callbacks
- Use async/await over promises chains
- Use template literals for string concatenation

#### Python

- Follow PEP 8 style guide
- Use type hints
- Write docstrings for all public functions
- Use virtual environments

#### Go

- Follow official Go style guide
- Use `gofmt` for formatting
- Add comments for exported functions
- Use meaningful package names

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks
- **perf**: Performance improvements
- **ci**: CI/CD changes
- **build**: Build system changes
- **revert**: Revert a previous commit

### Examples

```
feat(auth): add OAuth2 authentication

Implements OAuth2 authentication flow with support for
Google, GitHub, and Microsoft providers.

Closes #123
```

```
fix(api): handle null response in user endpoint

Fixes a crash when the user endpoint returns null.

Fixes #456
```

### Rules

- Use the imperative mood ("add" not "added")
- Don't capitalize the first letter
- No period at the end
- Keep subject line under 72 characters
- Reference issues and PRs in the footer

## Pull Request Process

### Before Submitting

1. **Update your branch**: `git pull upstream main`
2. **Run tests**: `npm test`
3. **Run linters**: `npm run lint`
4. **Run type checks**: `npm run typecheck`
5. **Build successfully**: `npm run build`
6. **Add tests**: For new features or bug fixes
7. **Update documentation**: If needed
8. **Add changeset**: `npx changeset add`

### PR Guidelines

1. **Title**: Follow commit message format
2. **Description**: Use the PR template
3. **Link issues**: Reference related issues
4. **Small PRs**: Keep changes focused and small
5. **Screenshots**: Include for UI changes
6. **Breaking changes**: Clearly document
7. **Draft PRs**: Use for work in progress

### PR Review Process

1. Automated checks must pass
2. At least one approval required
3. No unresolved conversations
4. Up-to-date with main branch
5. Maintainer will merge using squash

### After Merging

1. Delete your branch
2. Update your fork
3. Close related issues if not auto-closed

## Testing Guidelines

### Test Structure

- **Unit tests**: Test individual functions/components
- **Integration tests**: Test component interactions
- **E2E tests**: Test complete user flows
- **Snapshot tests**: Test UI components

### Test Requirements

- Minimum 80% code coverage
- Test happy paths and edge cases
- Test error handling
- Use descriptive test names
- Follow AAA pattern: Arrange, Act, Assert

### Test Examples

```javascript
describe('UserService', () => {
  it('should create a new user with valid data', async () => {
    // Arrange
    const userData = { name: 'John', email: 'john@example.com' };
    
    // Act
    const user = await userService.create(userData);
    
    // Assert
    expect(user).toBeDefined();
    expect(user.name).toBe('John');
  });
  
  it('should throw error with invalid email', async () => {
    // Arrange
    const userData = { name: 'John', email: 'invalid-email' };
    
    // Act & Assert
    await expect(userService.create(userData))
      .rejects.toThrow('Invalid email format');
  });
});
```

## Documentation

### Documentation Standards

- Write in clear, concise English
- Use active voice
- Include code examples
- Add diagrams for complex concepts
- Keep it up-to-date

### Diataxis Structure

Follow the Diataxis methodology:

1. **Tutorials**: Learning-oriented
   - Step-by-step guides
   - Help beginners get started
   - Achieve specific outcomes

2. **How-To Guides**: Goal-oriented
   - Solve specific problems
   - Assume some knowledge
   - Focus on practical steps

3. **Reference**: Information-oriented
   - Technical descriptions
   - API documentation
   - Configuration options

4. **Explanation**: Understanding-oriented
   - Conceptual discussions
   - Design decisions
   - Background information

### ADRs (Architecture Decision Records)

When making significant architectural decisions:

1. Create a new ADR in `docs/src/content/docs/reference/adr/`
2. Use the ADR template
3. Number sequentially (e.g., `0001-use-astro-for-docs.md`)
4. Include:
   - Context and problem statement
   - Decision drivers
   - Considered options
   - Decision outcome
   - Consequences

## Questions?

If you have questions:

- Check the [documentation](../docs)
- Search [existing issues](https://github.com/IAmJonoBo/Template/issues)
- Ask in [discussions](https://github.com/IAmJonoBo/Template/discussions)
- Contact maintainers

## Thank You!

Your contributions make this project better. Thank you for being part of our community! 🎉
