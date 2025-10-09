# AI Agent Instructions for Template Repository

This document provides comprehensive guidelines for AI agents working on this repository. Following these instructions ensures consistency, quality, and adherence to project standards.

## Core Principles

### 1. Code Quality Standards

**Always maintain highest quality:**
- Write clean, readable, maintainable code
- Follow SOLID principles
- Apply DRY (Don't Repeat Yourself)
- Practice YAGNI (You Aren't Gonna Need It)
- Write self-documenting code with clear naming
- Add comments only for complex logic

### 2. Testing Requirements

**Test-Driven Development:**
- Write tests before or alongside code changes
- Maintain minimum 80% code coverage
- Test happy paths and edge cases
- Test error handling
- Follow AAA pattern: Arrange, Act, Assert

### 3. Documentation Standards

**Comprehensive Documentation:**
- Update docs when changing functionality
- Follow Diataxis methodology:
  - **Tutorials**: `docs/src/content/docs/tutorials/` - Learning-oriented
  - **How-To**: `docs/src/content/docs/how-to/` - Task-oriented
  - **Reference**: `docs/src/content/docs/reference/` - Information-oriented
  - **Explanation**: `docs/src/content/docs/explanation/` - Understanding-oriented
- Create ADRs for architectural decisions
- Keep README.md up-to-date

## Coding Standards

### Naming Conventions

```javascript
// Variables and functions: camelCase
const userName = 'John';
function getUserData() {}

// Classes and types: PascalCase
class UserService {}
type UserData = {};

// Constants: UPPER_SNAKE_CASE
const MAX_RETRY_COUNT = 3;

// Files: kebab-case
// user-service.ts, auth-middleware.ts
```

### TypeScript Guidelines

```typescript
// Always use TypeScript when possible
// Use explicit types
function processUser(userId: string): Promise<User> {
  // Implementation
}

// Use interfaces for object shapes
interface User {
  id: string;
  name: string;
  email: string;
}

// Use type for unions/intersections
type Status = 'active' | 'inactive' | 'pending';

// Use enums for fixed sets
enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST'
}
```

### Code Style

```javascript
// Prefer const over let, avoid var
const config = { timeout: 5000 };

// Use arrow functions for callbacks
items.map(item => item.id);

// Use template literals
const message = `Hello, ${name}!`;

// Use async/await over promise chains
async function fetchData() {
  const result = await api.get('/data');
  return result.data;
}

// Use destructuring
const { name, email } = user;

// Use spread operator
const newUser = { ...user, verified: true };
```

## Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `test`: Adding missing tests
- `chore`: Changes to build process or auxiliary tools
- `ci`: Changes to CI configuration files and scripts
- `build`: Changes that affect the build system
- `revert`: Reverts a previous commit

### Examples

```bash
feat(auth): add OAuth2 authentication

Implements OAuth2 authentication flow with support for
Google, GitHub, and Microsoft providers.

Closes #123

---

fix(api): handle null response in user endpoint

Fixes a crash when the user endpoint returns null.
Added null checks and appropriate error handling.

Fixes #456

---

docs(readme): update installation instructions

Updates the README with clearer installation steps
and troubleshooting section.
```

## Pull Request Guidelines

### PR Creation Checklist

Before creating a PR, ensure:

1. **Code Quality**
   - [ ] Code follows style guidelines
   - [ ] No linting errors
   - [ ] No type errors
   - [ ] Code is self-reviewed

2. **Testing**
   - [ ] Tests added/updated
   - [ ] All tests pass
   - [ ] Coverage meets requirements
   - [ ] Edge cases tested

3. **Documentation**
   - [ ] Documentation updated
   - [ ] ADRs created if needed
   - [ ] Changelog updated via changeset

4. **Version Control**
   - [ ] Commits follow conventional format
   - [ ] Branch is up-to-date with main
   - [ ] No merge conflicts
   - [ ] Changeset added

### PR Description Template

Use the PR template provided. Include:
- Clear description of changes
- Type of change (bug, feature, etc.)
- Related issues
- Testing performed
- Screenshots (for UI changes)
- Breaking changes (if any)

## Architecture Decision Records (ADRs)

When making significant architectural decisions:

### ADR Template

```markdown
# ADR-XXXX: [Title]

## Status
[Proposed | Accepted | Deprecated | Superseded by ADR-YYYY]

## Context
[Describe the issue requiring a decision]

## Decision Drivers
- [Driver 1]
- [Driver 2]
- [Driver 3]

## Considered Options
1. [Option 1]
2. [Option 2]
3. [Option 3]

## Decision
[Chosen option and rationale]

## Consequences

### Positive
- [Positive consequence 1]
- [Positive consequence 2]

### Negative
- [Negative consequence 1]
- [Negative consequence 2]

### Neutral
- [Neutral consequence 1]

## Implementation
[Implementation details if relevant]

## References
- [Link 1]
- [Link 2]
```

### When to Create an ADR

Create an ADR when:
- Choosing between architectural patterns
- Selecting major dependencies/frameworks
- Making breaking changes
- Changing deployment strategies
- Establishing coding conventions
- Modifying security policies

## Semantic Versioning

Follow [Semantic Versioning 2.0.0](https://semver.org/):

```
MAJOR.MINOR.PATCH

Example: 1.4.2
```

### Version Increment Rules

- **MAJOR**: Breaking changes
  - API changes that break backward compatibility
  - Removal of features
  - Major architectural changes

- **MINOR**: New features (backward compatible)
  - New functionality
  - Enhancements
  - Deprecations (with backward compatibility)

- **PATCH**: Bug fixes (backward compatible)
  - Bug fixes
  - Security patches
  - Documentation fixes

### Using Changesets

```bash
# Add a changeset
npx changeset add

# Select packages affected
# Select version bump type (major/minor/patch)
# Write summary of changes

# Create version PR
npx changeset version

# Publish (maintainers only)
npx changeset publish
```

## Error Handling

### Best Practices

```typescript
// Always handle errors explicitly
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  // Log error with context
  logger.error('Failed to perform operation', { error, context });
  
  // Transform to application error
  throw new ApplicationError('Operation failed', {
    cause: error,
    code: 'OPERATION_FAILED'
  });
}

// Use custom error classes
class ApplicationError extends Error {
  constructor(message: string, public details?: any) {
    super(message);
    this.name = 'ApplicationError';
  }
}

// Validate inputs early
function processUser(userId: string) {
  if (!userId) {
    throw new ValidationError('userId is required');
  }
  // Process...
}
```

## Security Guidelines

### Security Checklist

- [ ] No secrets in code
- [ ] Input validation on all user inputs
- [ ] Output encoding for all dynamic content
- [ ] Use parameterized queries (no SQL injection)
- [ ] Authentication/authorization checks
- [ ] Rate limiting on APIs
- [ ] HTTPS only in production
- [ ] Security headers configured
- [ ] Dependencies regularly updated
- [ ] Security scanning in CI/CD

### Secure Coding Practices

```typescript
// Never commit secrets
// ❌ Bad
const apiKey = 'sk_live_abc123';

// ✅ Good
const apiKey = process.env.API_KEY;

// Validate and sanitize inputs
function createUser(input: unknown) {
  const schema = z.object({
    email: z.string().email(),
    name: z.string().min(1).max(100)
  });
  
  const validated = schema.parse(input);
  // Use validated data
}

// Use prepared statements
// ❌ Bad (SQL injection risk)
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ✅ Good
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

## Performance Guidelines

### Optimization Rules

1. **Measure First**: Profile before optimizing
2. **Optimize Critical Path**: Focus on bottlenecks
3. **Consider Trade-offs**: Balance performance vs. maintainability
4. **Document Decisions**: Explain performance-critical code

### Best Practices

```typescript
// Use efficient data structures
const userMap = new Map(); // O(1) lookup vs Array O(n)

// Avoid unnecessary computations
const memoized = useMemo(() => expensiveOperation(), [deps]);

// Use pagination for large datasets
const users = await db.users.findMany({
  skip: page * pageSize,
  take: pageSize
});

// Batch operations
const results = await Promise.all(
  items.map(item => processItem(item))
);

// Use streaming for large files
const stream = fs.createReadStream(file);
stream.pipe(response);
```

## Testing Guidelines

### Test Structure

```typescript
describe('UserService', () => {
  // Setup
  beforeEach(() => {
    // Initialize test data
  });
  
  // Teardown
  afterEach(() => {
    // Cleanup
  });
  
  describe('createUser', () => {
    it('should create user with valid data', async () => {
      // Arrange
      const userData = { name: 'John', email: 'john@example.com' };
      
      // Act
      const user = await userService.createUser(userData);
      
      // Assert
      expect(user).toBeDefined();
      expect(user.name).toBe('John');
      expect(user.email).toBe('john@example.com');
    });
    
    it('should throw error with invalid email', async () => {
      // Arrange
      const userData = { name: 'John', email: 'invalid' };
      
      // Act & Assert
      await expect(userService.createUser(userData))
        .rejects.toThrow('Invalid email');
    });
  });
});
```

### Test Coverage

- Minimum 80% overall coverage
- 100% coverage for critical paths
- Test all error cases
- Test edge cases and boundaries
- Test concurrent operations

## Repository Hygiene

### Branch Strategy

- `main`: Production-ready code
- `develop`: Integration branch (if used)
- `feature/*`: New features
- `fix/*`: Bug fixes
- `docs/*`: Documentation updates
- `chore/*`: Maintenance tasks

### Merge Strategy

- Use squash merge for PRs
- Keep commit history clean
- Write descriptive merge commit messages
- Delete branches after merging

### Code Review

**As a Reviewer:**
- Be constructive and respectful
- Focus on code, not the person
- Explain reasoning
- Approve only when quality standards met

**As a Reviewee:**
- Respond to all comments
- Be open to feedback
- Make requested changes
- Thank reviewers

## Workflow Process

### 1. Planning
- Review issue/requirements
- Break down into tasks
- Identify dependencies
- Create implementation plan

### 2. Implementation
- Create feature branch
- Write tests (TDD)
- Implement feature
- Document changes
- Update changelog

### 3. Quality Assurance
- Run linter
- Run tests
- Run type checker
- Run security scanner
- Manual testing

### 4. Documentation
- Update relevant docs
- Create/update ADRs
- Update README if needed
- Add code comments

### 5. Pull Request
- Create PR with template
- Add reviewers
- Respond to feedback
- Make necessary changes
- Merge when approved

### 6. Post-Merge
- Verify deployment
- Monitor for issues
- Update related issues
- Delete feature branch

## Common Patterns

### Async/Await Error Handling

```typescript
async function fetchUserData(userId: string): Promise<User> {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new NotFoundError(`User ${userId} not found`);
    }
    throw new ApiError('Failed to fetch user data', { cause: error });
  }
}
```

### Configuration Management

```typescript
// Use environment variables
const config = {
  port: parseInt(process.env.PORT || '3000'),
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432')
  }
};

// Validate configuration
const configSchema = z.object({
  port: z.number().min(1).max(65535),
  database: z.object({
    host: z.string(),
    port: z.number()
  })
});

const validatedConfig = configSchema.parse(config);
```

### Logging

```typescript
// Use structured logging
logger.info('User created', {
  userId: user.id,
  email: user.email,
  timestamp: new Date().toISOString()
});

logger.error('Failed to process payment', {
  error: error.message,
  userId: user.id,
  amount: payment.amount,
  timestamp: new Date().toISOString()
});
```

## Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Diataxis Documentation Framework](https://diataxis.fr/)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

## Questions?

If you have questions about these guidelines:
- Check the [documentation](../../docs)
- Ask in [discussions](https://github.com/IAmJonoBo/Template/discussions)
- Contact maintainers

---

**These guidelines are living documents. Suggest improvements via PR!**
