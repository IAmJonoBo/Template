---
title: API Reference
description: API reference for Template repository functions and classes
---

# API Reference

This document provides a complete API reference for the Template repository.

## Core Functions

### `hello(message: string): string`

Returns a formatted greeting message.

**Parameters:**

- `message` (string): The message to include in the greeting

**Returns:** (string) The formatted greeting

**Example:**

```typescript
import { hello } from 'template-repository';

const greeting = hello('World');
console.log(greeting); // "Hello, World!"
```

**Edge Cases:**

- Empty string: Returns "Hello, !"
- Special characters: Preserved in output

---

### `version: string`

The current version of the template.

**Type:** `string`

**Example:**

```typescript
import { version } from 'template-repository';

console.log(version); // "0.1.0"
```

---

## Type Definitions

### Common Types

```typescript
/**
 * Configuration options for the application
 */
interface Config {
  /** Port number for the server */
  port: number;

  /** Environment (development, production, test) */
  env: 'development' | 'production' | 'test';

  /** Enable debug mode */
  debug?: boolean;
}

/**
 * User information
 */
interface User {
  /** Unique user identifier */
  id: string;

  /** User's full name */
  name: string;

  /** User's email address */
  email: string;

  /** User creation timestamp */
  createdAt: Date;

  /** Last update timestamp */
  updatedAt: Date;
}

/**
 * API response wrapper
 */
interface ApiResponse<T> {
  /** Response data */
  data: T;

  /** HTTP status code */
  status: number;

  /** Success indicator */
  success: boolean;

  /** Error message (if any) */
  error?: string;
}
```

---

## Error Types

### `ValidationError`

Thrown when input validation fails.

**Properties:**

- `name`: "ValidationError"
- `message`: Error description
- `field`: (optional) The field that failed validation

**Example:**

```typescript
try {
  validateEmail('invalid-email');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation failed: ${error.message}`);
    console.error(`Field: ${error.field}`);
  }
}
```

---

### `NotFoundError`

Thrown when a resource is not found.

**Properties:**

- `name`: "NotFoundError"
- `message`: Error description
- `resource`: The type of resource
- `id`: The identifier that wasn't found

**Example:**

```typescript
try {
  const user = await getUser('invalid-id');
} catch (error) {
  if (error instanceof NotFoundError) {
    console.error(`${error.resource} not found: ${error.id}`);
  }
}
```

---

## Utility Functions

### String Utilities

#### `capitalize(str: string): string`

Capitalizes the first letter of a string.

```typescript
capitalize('hello'); // "Hello"
capitalize('WORLD'); // "WORLD"
capitalize(''); // ""
```

#### `slugify(str: string): string`

Converts a string to a URL-friendly slug.

```typescript
slugify('Hello World'); // "hello-world"
slugify('Title: Example!'); // "title-example"
```

### Array Utilities

#### `unique<T>(array: T[]): T[]`

Returns an array with duplicate values removed.

```typescript
unique([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
unique(['a', 'b', 'a']); // ['a', 'b']
```

#### `groupBy<T>(array: T[], key: keyof T): Record<string, T[]>`

Groups array elements by a property.

```typescript
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
];

groupBy(users, 'role');
// {
//   admin: [{ name: 'Alice', ... }, { name: 'Charlie', ... }],
//   user: [{ name: 'Bob', ... }]
// }
```

### Object Utilities

#### `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`

Creates an object with only specified keys.

```typescript
const user = { id: '1', name: 'Alice', email: 'alice@example.com' };
pick(user, ['id', 'name']); // { id: '1', name: 'Alice' }
```

#### `omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>`

Creates an object without specified keys.

```typescript
const user = { id: '1', name: 'Alice', password: 'secret' };
omit(user, ['password']); // { id: '1', name: 'Alice' }
```

---

## Validation

### `isEmail(value: string): boolean`

Checks if a string is a valid email address.

```typescript
isEmail('user@example.com'); // true
isEmail('invalid'); // false
```

### `isUrl(value: string): boolean`

Checks if a string is a valid URL.

```typescript
isUrl('https://example.com'); // true
isUrl('not a url'); // false
```

### `isUuid(value: string): boolean`

Checks if a string is a valid UUID.

```typescript
isUuid('123e4567-e89b-12d3-a456-426614174000'); // true
isUuid('invalid'); // false
```

---

## Async Utilities

### `delay(ms: number): Promise<void>`

Returns a promise that resolves after a delay.

```typescript
await delay(1000); // Wait 1 second
```

### `retry<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>`

Retries a function until it succeeds or max attempts reached.

**Options:**

- `maxAttempts` (number): Maximum retry attempts (default: 3)
- `delayMs` (number): Delay between retries in ms (default: 1000)
- `exponentialBackoff` (boolean): Use exponential backoff (default: false)

```typescript
const result = await retry(() => fetchData(), {
  maxAttempts: 5,
  delayMs: 1000,
  exponentialBackoff: true,
});
```

### `timeout<T>(promise: Promise<T>, ms: number): Promise<T>`

Wraps a promise with a timeout.

```typescript
const result = await timeout(
  fetchData(),
  5000 // 5 second timeout
);
```

---

## Constants

### HTTP Status Codes

```typescript
const HttpStatus = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
```

### Common Patterns

```typescript
const Patterns = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL: /^https?:\/\/.+/,
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
} as const;
```

---

## Configuration

### Default Configuration

```typescript
const defaultConfig: Config = {
  port: 3000,
  env: 'development',
  debug: false,
};
```

### Environment Variables

| Variable    | Type    | Default       | Description             |
| ----------- | ------- | ------------- | ----------------------- |
| `NODE_ENV`  | string  | `development` | Application environment |
| `PORT`      | number  | `3000`        | Server port             |
| `LOG_LEVEL` | string  | `info`        | Logging level           |
| `DEBUG`     | boolean | `false`       | Enable debug mode       |

---

## Best Practices

### Type Safety

Always use TypeScript types:

```typescript
// ✅ Good
function getUser(id: string): Promise<User> {
  // Implementation
}

// ❌ Bad
function getUser(id: any): any {
  // Implementation
}
```

### Error Handling

Always handle errors explicitly:

```typescript
// ✅ Good
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  logger.error('Operation failed', { error });
  throw new ApplicationError('Failed to complete operation');
}

// ❌ Bad
const result = await riskyOperation(); // Unhandled error
```

### Async/Await

Prefer async/await over promise chains:

```typescript
// ✅ Good
async function getUser(id: string): Promise<User> {
  const user = await userRepository.findById(id);
  return user;
}

// ❌ Bad
function getUser(id: string): Promise<User> {
  return userRepository.findById(id).then((user) => user);
}
```

---

## Migration Guides

### Upgrading from 0.1.x to 0.2.x

No breaking changes. Simply update your dependencies:

```bash
npm update template-repository
```

---

## Contributing to the API

When adding new API functions:

1. Add TypeScript types
2. Add JSDoc comments
3. Add examples
4. Add tests
5. Update this documentation

See [Contributing Guide](../../contributing/how-to-contribute/) for details.

---

## Related Documentation

- [Tech Stack](../tech-stack/): Technologies used
- [Conventions](../conventions/): Coding standards
- [Architecture](../../explanation/architecture/): System design

---

**Last Updated**: 2024  
**API Version**: 0.1.0
