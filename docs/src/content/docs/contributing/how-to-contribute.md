---
title: How to Contribute
description: Learn how to contribute to the Template repository
---

# How to Contribute

Thank you for your interest in contributing! This guide will help you get started.

## Quick Links

- [Code of Conduct](https://github.com/IAmJonoBo/Template/blob/main/.github/CODE_OF_CONDUCT.md)
- [Contributing Guidelines](https://github.com/IAmJonoBo/Template/blob/main/.github/CONTRIBUTING.md)
- [Issue Tracker](https://github.com/IAmJonoBo/Template/issues)
- [Discussions](https://github.com/IAmJonoBo/Template/discussions)

## Ways to Contribute

### 1. Report Bugs

Found a bug? Help us fix it!

1. Check [existing issues](https://github.com/IAmJonoBo/Template/issues) first
2. Create a new issue using the [Bug Report template](https://github.com/IAmJonoBo/Template/issues/new?template=bug_report.yml)
3. Provide detailed information to help reproduce the issue

### 2. Suggest Features

Have an idea? We'd love to hear it!

1. Check [discussions](https://github.com/IAmJonoBo/Template/discussions) for similar ideas
2. Create a new issue using the [Feature Request template](https://github.com/IAmJonoBo/Template/issues/new?template=feature_request.yml)
3. Describe your idea and its benefits

### 3. Improve Documentation

Documentation is crucial!

1. Find areas that need improvement
2. Create an issue using the [Documentation template](https://github.com/IAmJonoBo/Template/issues/new?template=documentation.yml)
3. Or directly submit a PR with improvements

### 4. Write Code

Ready to code? Great!

1. Find an issue to work on (look for `good first issue` label)
2. Comment on the issue to claim it
3. Fork and create a branch
4. Write code and tests
5. Submit a pull request

## Contribution Workflow

### Step 1: Set Up Your Environment

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR-USERNAME/Template.git
cd Template

# Add upstream remote
git remote add upstream https://github.com/IAmJonoBo/Template.git

# Install dependencies
npm install

# Run setup
npm run setup
```

### Step 2: Create a Branch

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `chore/` - Maintenance tasks
- `refactor/` - Code refactoring

### Step 3: Make Changes

1. **Write Code**
   - Follow the [coding conventions](../../reference/conventions/)
   - Keep changes focused and minimal
   - Write clear, self-documenting code

2. **Add Tests**
   - Write tests for new features
   - Ensure existing tests pass
   - Aim for 80%+ coverage

3. **Update Documentation**
   - Update relevant docs
   - Add JSDoc comments
   - Update README if needed

### Step 4: Commit Changes

```bash
# Stage your changes
git add .

# Commit with conventional commit message
git commit -m "feat: add new feature"
```

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Refactoring
- `test`: Tests
- `chore`: Maintenance

### Step 5: Add Changeset

```bash
# Create a changeset
npx changeset add

# Follow the prompts:
# 1. Select version bump type (major/minor/patch)
# 2. Write a summary of changes
```

### Step 6: Push Changes

```bash
# Push to your fork
git push origin feature/your-feature-name
```

### Step 7: Create Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template:
   - Clear title following conventional commits
   - Detailed description
   - Link related issues
   - Add screenshots if relevant
   - Complete the checklist

### Step 8: Code Review

1. Wait for review from maintainers
2. Respond to comments
3. Make requested changes
4. Push updates to your branch

### Step 9: Merge

Once approved:
1. Maintainer will merge your PR
2. Your changes will be in the next release
3. Delete your feature branch

## Code Quality Standards

### Before Submitting

Run all checks:

```bash
# Lint code
npm run lint

# Check types
npm run typecheck

# Run tests
npm test

# Build project
npm run build
```

Or run all at once:

```bash
npm run verify
```

### Writing Tests

```typescript
describe('Feature', () => {
  it('should do something correctly', () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = myFunction(input);
    
    // Assert
    expect(result).toBe('expected');
  });
});
```

### Code Style

- Use TypeScript
- Follow ESLint rules
- Format with Prettier
- Add JSDoc for public APIs
- Write descriptive names
- Keep functions small
- Handle errors properly

## Documentation Contributions

### Structure

Follow the [Diataxis](https://diataxis.fr/) methodology:

```
docs/src/content/docs/
├── tutorials/        # Learning-oriented
├── how-to/          # Task-oriented
├── reference/       # Information-oriented
└── explanation/     # Understanding-oriented
```

### Writing Guidelines

- Use clear, concise language
- Include code examples
- Add diagrams for complex concepts
- Test all code examples
- Keep it up-to-date

### Building Docs Locally

```bash
cd docs
npm install
npm run dev
```

Visit http://localhost:4321

## Community

### Communication Channels

- **Issues**: Bug reports and feature requests
- **Discussions**: Questions and ideas
- **Pull Requests**: Code contributions

### Getting Help

Need help?

1. Check the [documentation](/)
2. Search [existing issues](https://github.com/IAmJonoBo/Template/issues)
3. Ask in [discussions](https://github.com/IAmJonoBo/Template/discussions)
4. Contact maintainers

### Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/IAmJonoBo/Template/blob/main/.github/CODE_OF_CONDUCT.md).

## Recognition

We recognize contributors in:

- README.md (Contributors section)
- Release notes
- Changelog
- GitHub contributor graph

## Tips for Success

### Good First Issues

New to the project? Look for issues labeled:
- `good first issue` - Great for beginners
- `help wanted` - We need help
- `documentation` - Docs improvements

### Making Impact

- Start small with documentation or tests
- Ask questions in discussions
- Help others in issues
- Review pull requests
- Share your experience

### Best Practices

✅ **Do**:
- Read existing code
- Ask questions
- Keep PRs focused
- Write tests
- Update docs
- Be patient and respectful

❌ **Don't**:
- Submit huge PRs
- Ignore feedback
- Break existing functionality
- Skip tests
- Forget documentation

## Advanced Topics

### Working with Forks

Keep your fork updated:

```bash
# Fetch upstream changes
git fetch upstream

# Merge into your main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

### Resolving Conflicts

```bash
# Update your branch with main
git checkout feature/your-feature
git rebase upstream/main

# Resolve conflicts in your editor
git add .
git rebase --continue

# Force push to your branch
git push --force origin feature/your-feature
```

### Multiple Commits

```bash
# Squash commits
git rebase -i HEAD~3

# Mark commits as 'squash' or 'fixup'
# Edit commit message
# Force push
git push --force origin feature/your-feature
```

## Questions?

Still have questions?

- Read the [full Contributing Guidelines](https://github.com/IAmJonoBo/Template/blob/main/.github/CONTRIBUTING.md)
- Join [GitHub Discussions](https://github.com/IAmJonoBo/Template/discussions)
- Contact maintainers

---

**Thank you for contributing!** 🎉 Every contribution, no matter how small, makes a difference.
