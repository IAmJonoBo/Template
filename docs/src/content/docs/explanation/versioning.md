---
title: Versioning Strategy
description: Semantic versioning and release management strategy
---

# Versioning Strategy

This document outlines the versioning and release management strategy for the Template repository.

## Overview

We follow **[Semantic Versioning 2.0.0](https://semver.org/)** (SemVer) with automated changelog generation using **[Changesets](https://github.com/changesets/changesets)**.

## Semantic Versioning

### Version Format

```
MAJOR.MINOR.PATCH[-PRERELEASE][+BUILD]

Examples:
1.0.0         - Initial release
1.2.3         - Patch release
2.0.0         - Major release
1.0.0-alpha.1 - Pre-release
1.0.0+20240101 - Build metadata
```

### Version Components

#### MAJOR Version (Breaking Changes)

Increment when making **incompatible API changes**.

**Examples**:
- Removing or renaming public APIs
- Changing function signatures
- Removing features
- Major architectural changes
- Changing default behavior in breaking ways

```typescript
// Version 1.x.x
function getUser(id: string): User {}

// Version 2.0.0 (Breaking)
function getUser(id: string, options: GetUserOptions): Promise<User> {}
```

#### MINOR Version (New Features)

Increment when adding **backward-compatible functionality**.

**Examples**:
- Adding new features
- Adding new optional parameters
- Deprecating features (with backward compatibility)
- Performance improvements
- Enhancements to existing features

```typescript
// Version 1.0.0
class UserService {
  getUser(id: string): User {}
}

// Version 1.1.0 (New feature, backward compatible)
class UserService {
  getUser(id: string): User {}
  getUserByEmail(email: string): User {} // New method
}
```

#### PATCH Version (Bug Fixes)

Increment when making **backward-compatible bug fixes**.

**Examples**:
- Bug fixes
- Security patches
- Documentation fixes
- Internal refactoring
- Performance optimizations (non-breaking)

```typescript
// Version 1.0.0 (Bug)
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0); // Missing tax
}

// Version 1.0.1 (Fix)
function calculateTotal(items: Item[]): number {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  return subtotal * 1.1; // Add tax
}
```

### Pre-release Versions

Use pre-release identifiers for versions not ready for production.

**Format**: `MAJOR.MINOR.PATCH-IDENTIFIER.NUMBER`

**Identifiers**:
- `alpha`: Early development, unstable
- `beta`: Feature complete, testing phase
- `rc`: Release candidate, final testing

**Examples**:
```
1.0.0-alpha.1   - First alpha
1.0.0-alpha.2   - Second alpha
1.0.0-beta.1    - First beta
1.0.0-beta.2    - Second beta
1.0.0-rc.1      - First release candidate
1.0.0           - Stable release
```

## Using Changesets

### What is a Changeset?

A changeset is a file that describes changes and indicates the version bump type.

### Creating a Changeset

#### Step 1: Make Changes

Make your code changes as usual.

#### Step 2: Add Changeset

```bash
npx changeset add
```

You'll be prompted for:
1. Which packages changed (if monorepo)
2. Version bump type (major, minor, patch)
3. Summary of changes

#### Step 3: Example Interaction

```
🦋  Which packages would you like to include?
◉ template

🦋  Which type of change is this for template?
◯ major
◉ minor
◯ patch

🦋  Please enter a summary for this change:
Add user authentication with OAuth2 support

🦋  === Releasing the following packages ===
[Minor]
  template

🦋  Is this your desired changeset? (Y/n)
```

This creates a file in `.changeset/` directory:

```markdown
---
"template": minor
---

Add user authentication with OAuth2 support
```

### Changeset Guidelines

#### Writing Good Summaries

```markdown
✅ Good summaries:
- Add OAuth2 authentication support
- Fix null pointer error in user service
- Update documentation for API endpoints
- Improve performance of database queries

❌ Poor summaries:
- Updates
- Bug fix
- Changes
- WIP
```

#### Multiple Changes

If you have multiple unrelated changes, create separate changesets:

```bash
# For feature
npx changeset add
# Select minor, describe feature

# For bug fix
npx changeset add
# Select patch, describe fix
```

## Release Process

### Automated Release (Recommended)

We use GitHub Actions to automate releases.

#### Process Flow

```
1. Developer creates changeset
   ↓
2. Merge PR with changeset
   ↓
3. Bot creates "Version Packages" PR
   ↓
4. Review and merge Version PR
   ↓
5. Automatic release published
   ↓
6. Changelog updated
   ↓
7. Git tag created
```

### Manual Release

If automation isn't set up:

```bash
# 1. Version packages
npx changeset version

# 2. Review changes
git diff

# 3. Commit version changes
git add .
git commit -m "chore: version packages"

# 4. Publish (if npm package)
npx changeset publish

# 5. Push changes and tags
git push --follow-tags
```

## Version Lifecycle

### Development Phase

**Version**: `0.x.x`

- API may change frequently
- Breaking changes allowed in minor versions
- Not production-ready

```
0.1.0 - Initial development
0.2.0 - Add features (may break API)
0.3.0 - More features (may break API)
```

### Stable Phase

**Version**: `1.x.x` and above

- Follow SemVer strictly
- Breaking changes only in major versions
- Production-ready

```
1.0.0 - First stable release
1.1.0 - New features (backward compatible)
1.1.1 - Bug fixes
2.0.0 - Breaking changes
```

### Maintenance Phase

**Version**: Previous major versions

- Security patches only
- Critical bug fixes
- No new features

```
1.x.x - Previous major version
├── 1.5.1 - Security patch
└── 1.5.2 - Critical bug fix
```

## Branching Strategy

### Main Branches

```
main (or master)
├── Production-ready code
└── All releases tagged here

develop (optional)
├── Integration branch
└── Next release preparation
```

### Release Branches

```
release/v2.0.0
├── Prepare for major release
├── Bug fixes only
└── Merge to main when ready
```

### Feature Branches

```
feature/add-authentication
├── New feature development
└── Merge to develop/main via PR
```

### Hotfix Branches

```
hotfix/fix-security-issue
├── Urgent production fix
├── Branch from main
└── Merge to main and develop
```

## Changelog Management

### Automatic Generation

Changesets automatically generates `CHANGELOG.md`:

```markdown
# template

## 1.2.0

### Minor Changes

- abc1234: Add OAuth2 authentication support
- def5678: Add user profile management

### Patch Changes

- ghi9012: Fix null pointer error in user service
- jkl3456: Update documentation for API endpoints

## 1.1.0

### Minor Changes

- mno7890: Add email verification
```

### Manual Additions

For important context, manually add to changelog:

```markdown
## 1.2.0

### Minor Changes

- Add OAuth2 authentication support
  
  This release adds support for OAuth2 authentication with
  Google, GitHub, and Microsoft providers.
  
  **Migration Guide**: See [docs/migration/v1.2.0.md]

### Patch Changes

- Fix null pointer error in user service
```

## Deprecation Policy

### Announcing Deprecation

1. Mark as deprecated in code:
```typescript
/**
 * @deprecated Use getUserById instead
 */
function getUser(id: string): User {
  // Implementation
}
```

2. Add deprecation notice in changelog
3. Update documentation
4. Provide migration guide

### Deprecation Timeline

- **Minor version**: Announce deprecation
- **Major version**: Remove deprecated feature

```
v1.5.0 - Deprecate feature (still works)
v1.6.0 - Deprecation warnings in logs
v2.0.0 - Remove feature (breaking change)
```

## Version Support

### Support Levels

| Version | Support Level | Updates |
|---------|--------------|---------|
| Latest major | Full support | Features, fixes, security |
| Previous major | Maintenance | Critical fixes, security |
| Older versions | No support | None |

### Example Support Timeline

```
v3.x.x (Current)
├── Full support
├── New features
└── Regular updates

v2.x.x (Previous)
├── Maintenance mode
├── Security patches
└── Critical fixes only

v1.x.x (Old)
└── No support
```

## Migration Guides

### Creating Migration Guides

For major version bumps, create a migration guide:

```markdown
# Migration Guide: v1.x to v2.0

## Breaking Changes

### 1. API Changes

**Before (v1.x)**:
```typescript
function getUser(id: string): User
```

**After (v2.0)**:
```typescript
function getUser(id: string, options?: GetUserOptions): Promise<User>
```

**Migration**:
```typescript
// Update synchronous calls to async
const user = await getUser(id);

// Add error handling
try {
  const user = await getUser(id);
} catch (error) {
  // Handle error
}
```

### 2. Configuration Changes

**Before**: Config in `.config.js`
**After**: Config in `.config.mjs` with ESM syntax

**Migration**:
```bash
# Rename file
mv .config.js .config.mjs

# Update syntax
# Change: module.exports = {}
# To: export default {}
```

## Best Practices

### Do's

✅ Create changesets for every PR
✅ Write clear, descriptive summaries
✅ Follow SemVer strictly
✅ Update documentation with changes
✅ Create migration guides for breaking changes
✅ Use pre-release versions for testing
✅ Keep changelog up-to-date

### Don'ts

❌ Skip changesets for "small" changes
❌ Make breaking changes in patch/minor versions
❌ Release without testing
❌ Break SemVer rules
❌ Forget to update documentation
❌ Remove features without deprecation period

## Tools and Automation

### GitHub Actions

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx changeset version
      - run: npx changeset publish
```

### Package.json Scripts

```json
{
  "scripts": {
    "version": "changeset version",
    "release": "changeset publish",
    "changeset": "changeset"
  }
}
```

## Related Documentation

- **[Contributing](../../contributing/how-to-contribute/)**: Contribution workflow
- **[Architecture](./architecture/)**: System architecture
- **[ADRs](../reference/adr/)**: Architecture decisions

---

**Last Updated**: 2024  
**Review**: Review this strategy annually
