---
title: Conventions
description: Coding standards and conventions for the Template repository
---

# Conventions

This document outlines the coding standards and conventions used across the Template repository.

## General Principles

### Code Quality
- **Readability**: Code should be easy to read and understand
- **Maintainability**: Code should be easy to maintain and modify
- **Testability**: Code should be easy to test
- **Simplicity**: Keep it simple, avoid over-engineering
- **Consistency**: Follow established patterns

### SOLID Principles
- **S**ingle Responsibility Principle
- **O**pen/Closed Principle
- **L**iskov Substitution Principle
- **I**nterface Segregation Principle
- **D**ependency Inversion Principle

## Naming Conventions

### Files and Directories

```
kebab-case for file names:
✅ user-service.ts
✅ auth-middleware.ts
❌ UserService.ts
❌ auth_middleware.ts

Descriptive names:
✅ user-authentication.service.ts
❌ uas.ts
```

### Variables and Functions

```typescript
// camelCase for variables and functions
const userName = 'John';
let isActive = true;

function getUserById(id: string): User {
  // Implementation
}

// Boolean variables should be prefixed
const isLoading = false;
const hasPermission = true;
const canEdit = false;
const shouldValidate = true;
```

### Classes and Interfaces

```typescript
// PascalCase for classes
class UserService {
  // Implementation
}

// PascalCase for interfaces
interface User {
  id: string;
  name: string;
}

// Interface names without 'I' prefix
✅ interface User {}
❌ interface IUser {}

// Type aliases also PascalCase
type UserId = string;
type UserRole = 'admin' | 'user' | 'guest';
```

### Constants

```typescript
// UPPER_SNAKE_CASE for constants
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';
const DEFAULT_TIMEOUT = 5000;

// Group related constants
const HttpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
} as const;
```

### Enums

```typescript
// PascalCase for enum name and members
enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}

enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}
```

## Code Structure

### File Organization

```typescript
// 1. Imports (grouped and sorted)
// External dependencies
import { Injectable } from '@nestjs/common';
import { z } from 'zod';

// Internal dependencies
import { UserRepository } from './user.repository';
import { EmailService } from '../email/email.service';

// Types
import type { User, CreateUserDto } from './user.types';

// 2. Type definitions
interface ServiceConfig {
  timeout: number;
  retries: number;
}

// 3. Constants
const DEFAULT_CONFIG: ServiceConfig = {
  timeout: 5000,
  retries: 3,
};

// 4. Main implementation
@Injectable()
export class UserService {
  // Implementation
}

// 5. Helper functions (if needed)
function validateEmail(email: string): boolean {
  // Implementation
}
```

### Function Structure

```typescript
// Function should do one thing
function createUser(data: CreateUserDto): Promise<User> {
  // 1. Validate input
  validateUserData(data);
  
  // 2. Transform data
  const user = transformToUser(data);
  
  // 3. Perform action
  return userRepository.save(user);
}

// Keep functions small (< 50 lines)
// Extract complex logic to separate functions
```

### Class Structure

```typescript
class UserService {
  // 1. Properties (private first, then public)
  private readonly repository: UserRepository;
  private cache: Map<string, User>;
  public name: string;
  
  // 2. Constructor
  constructor(repository: UserRepository) {
    this.repository = repository;
    this.cache = new Map();
    this.name = 'UserService';
  }
  
  // 3. Public methods
  public async getUser(id: string): Promise<User> {
    // Implementation
  }
  
  public async createUser(data: CreateUserDto): Promise<User> {
    // Implementation
  }
  
  // 4. Private methods
  private validateUser(user: User): void {
    // Implementation
  }
  
  private async cacheUser(user: User): Promise<void> {
    // Implementation
  }
}
```

## TypeScript Conventions

### Type Definitions

```typescript
// Use interfaces for object shapes
interface User {
  id: string;
  name: string;
  email: string;
}

// Use type for unions, intersections, and utility types
type Status = 'active' | 'inactive' | 'pending';
type AdminUser = User & { role: 'admin' };
type PartialUser = Partial<User>;

// Prefer type inference when obvious
const count = 5; // Type: number (inferred)
const name = 'John'; // Type: string (inferred)

// Explicit types when not obvious
function processUser(data: unknown): User {
  // Implementation
}

// Use unknown instead of any
✅ function parse(data: unknown): User {}
❌ function parse(data: any): User {}
```

### Generics

```typescript
// Use descriptive generic names for clarity
function findById<TEntity>(id: string): TEntity {
  // Implementation
}

// Common generic names:
// T - Type
// K - Key
// V - Value
// E - Element
// R - Return type

interface Repository<TEntity> {
  findById(id: string): Promise<TEntity>;
  save(entity: TEntity): Promise<TEntity>;
}
```

### Null and Undefined

```typescript
// Use strict null checks
// Prefer optional chaining
const email = user?.profile?.email;

// Use nullish coalescing
const name = user.name ?? 'Anonymous';

// Explicit undefined checks
if (value !== undefined) {
  // Use value
}

// Return types should be explicit
function getUser(id: string): User | null {
  // Return null if not found
}
```

## Comments

### JSDoc Comments

```typescript
/**
 * Creates a new user in the system.
 * 
 * @param data - The user data to create
 * @param options - Optional configuration
 * @returns The created user with generated ID
 * @throws {ValidationError} If user data is invalid
 * @throws {DuplicateError} If user email already exists
 * 
 * @example
 * ```typescript
 * const user = await createUser({
 *   name: 'John Doe',
 *   email: 'john@example.com'
 * });
 * ```
 */
async function createUser(
  data: CreateUserDto,
  options?: CreateUserOptions
): Promise<User> {
  // Implementation
}
```

### Inline Comments

```typescript
// Use comments to explain WHY, not WHAT
// ❌ Bad: Describes what the code does
// Increment counter by 1
counter++;

// ✅ Good: Explains why we're doing it
// Skip cached results to force refresh
counter++;

// Use TODO comments for future work
// TODO: Add input validation
// FIXME: Handle edge case when user is null
// NOTE: This is a temporary workaround
```

## Error Handling

### Custom Errors

```typescript
// Create custom error classes
class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends Error {
  constructor(resource: string, id: string) {
    super(`${resource} with id ${id} not found`);
    this.name = 'NotFoundError';
  }
}
```

### Error Handling Patterns

```typescript
// Always handle errors explicitly
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  // Log with context
  logger.error('Operation failed', { error, userId });
  
  // Transform to application error
  if (error instanceof DatabaseError) {
    throw new ApplicationError('Failed to access data');
  }
  
  throw error;
}

// Use early returns for error cases
function processUser(user: User | null): void {
  if (!user) {
    throw new NotFoundError('User', 'unknown');
  }
  
  if (!user.email) {
    throw new ValidationError('Email is required', 'email');
  }
  
  // Happy path
  processValidUser(user);
}
```

## Async/Await

```typescript
// Prefer async/await over promises
// ✅ Good
async function getUsers(): Promise<User[]> {
  const users = await userRepository.findAll();
  return users;
}

// ❌ Avoid
function getUsers(): Promise<User[]> {
  return userRepository.findAll()
    .then(users => users);
}

// Handle multiple async operations
// Parallel execution
const [users, posts] = await Promise.all([
  getUsers(),
  getPosts(),
]);

// Sequential execution
const user = await getUser(id);
const posts = await getUserPosts(user.id);
```

## Testing Conventions

### Test File Organization

```
src/
  user/
    user.service.ts
    user.service.spec.ts    # Unit tests
    user.service.int.spec.ts # Integration tests
    user.service.e2e.spec.ts # E2E tests
```

### Test Structure

```typescript
describe('UserService', () => {
  // Setup
  let service: UserService;
  let repository: MockRepository;
  
  beforeEach(() => {
    repository = createMockRepository();
    service = new UserService(repository);
  });
  
  // Group related tests
  describe('createUser', () => {
    it('should create user with valid data', async () => {
      // Arrange
      const userData = { name: 'John', email: 'john@example.com' };
      
      // Act
      const user = await service.createUser(userData);
      
      // Assert
      expect(user).toBeDefined();
      expect(user.name).toBe('John');
    });
    
    it('should throw error with invalid email', async () => {
      // Arrange
      const userData = { name: 'John', email: 'invalid' };
      
      // Act & Assert
      await expect(service.createUser(userData))
        .rejects.toThrow(ValidationError);
    });
  });
});
```

### Test Naming

```typescript
// Use descriptive test names
// Pattern: should [expected behavior] when [condition]

✅ it('should return user when ID exists')
✅ it('should throw NotFoundError when user does not exist')
✅ it('should update email when new email is valid')

❌ it('works')
❌ it('test user creation')
❌ it('returns data')
```

## Git Conventions

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

body

footer
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code refactoring
- `test`: Tests
- `chore`: Maintenance

**Examples**:
```
feat(auth): add OAuth2 authentication
fix(api): handle null response in user endpoint
docs(readme): update installation instructions
refactor(user): extract validation logic
test(user): add edge case tests
```

### Branch Naming

```
feature/add-user-authentication
fix/null-pointer-in-user-service
docs/update-api-documentation
chore/update-dependencies
```

## Documentation Conventions

### README Files

Each module should have a README:

```markdown
# Module Name

Brief description.

## Purpose

What this module does.

## Usage

```typescript
import { ModuleName } from './module-name';

const instance = new ModuleName();
```

## API

### ClassName

Description.

#### Methods

- `method(param: Type): ReturnType` - Description
```

### Code Documentation

```typescript
// Document public APIs
/**
 * Public API description
 */
export function publicFunction() {}

// Internal functions may have brief comments
// Internal helper to validate email format
function validateEmail(email: string): boolean {}
```

## Performance Conventions

```typescript
// Use efficient data structures
const userMap = new Map<string, User>(); // O(1) lookup

// Avoid unnecessary computations
const result = useMemo(() => expensive(), [deps]);

// Use early returns
function process(data: Data | null): void {
  if (!data) return; // Early return
  
  // Process data
}

// Batch operations
const results = await Promise.all(
  items.map(item => process(item))
);
```

## Security Conventions

```typescript
// Never commit secrets
❌ const apiKey = 'sk_live_abc123';
✅ const apiKey = process.env.API_KEY;

// Validate all inputs
function createUser(input: unknown): User {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
  });
  
  return schema.parse(input);
}

// Use parameterized queries
❌ db.query(`SELECT * FROM users WHERE id = ${id}`);
✅ db.query('SELECT * FROM users WHERE id = ?', [id]);

// Sanitize outputs
import { escape } from 'html-escaper';
const safe = escape(userInput);
```

## Related Documentation

- **[Tech Stack](../tech-stack/)**: Technologies used
- **[Toolchain](../toolchain/)**: Development tools
- **[Contributing](../../contributing/how-to-contribute/)**: How to contribute
- **[Agent Guidelines](https://github.com/IAmJonoBo/Template/blob/main/.github/agents/AGENT_GUIDELINES.md)**: AI agent instructions

---

**Last Updated**: 2024  
**Review**: These conventions should be reviewed and updated regularly
