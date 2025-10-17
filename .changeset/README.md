# Changesets

This directory contains changesets, which are files that describe changes to the
package.

## What is a Changeset?

A changeset is a piece of information about changes made in a branch or commit.
It holds three key pieces of information:

1. What packages need to be released
2. What version they need to be released at (using a
   [semver bump type](https://semver.org/))
3. A changelog entry for the released packages

## Creating a Changeset

To create a changeset, run:

```bash
npx changeset add
```

You will be prompted to:

1. Select which packages have changed (if monorepo)
2. Select whether this is a major, minor, or patch change
3. Write a summary of the changes

## Format

Changesets are markdown files with YAML frontmatter. They look like:

```markdown
---
'package-name': minor
---

Add new feature to do something cool
```

## When to Create Changesets

Create a changeset when you:

- Add a new feature (minor)
- Fix a bug (patch)
- Make a breaking change (major)
- Update documentation that affects the API (patch)

## Version Bumps

- **Major**: Breaking changes
- **Minor**: New features (backward compatible)
- **Patch**: Bug fixes (backward compatible)

## Learn More

- [Changesets Documentation](https://github.com/changesets/changesets)
- [Semantic Versioning](https://semver.org/)
