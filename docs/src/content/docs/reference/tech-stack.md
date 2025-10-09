---
title: Tech Stack
description: Technologies and frameworks used in the Template repository
---

# Tech Stack

This document provides an overview of the technologies, frameworks, and tools used in the Template repository.

## Core Technologies

### Runtime & Language

#### Node.js
- **Version**: 20.11.0 (LTS)
- **Purpose**: JavaScript runtime environment
- **Why**: Long-term support, excellent ecosystem, wide adoption
- **Documentation**: [nodejs.org](https://nodejs.org/)

#### TypeScript
- **Version**: ^5.0.0
- **Purpose**: Type-safe JavaScript superset
- **Why**: Enhanced code quality, better IDE support, catch errors at compile time
- **Documentation**: [typescriptlang.org](https://www.typescriptlang.org/)

### Documentation

#### Astro
- **Version**: ^4.8.0
- **Purpose**: Modern static site generator
- **Why**: Fast, flexible, great developer experience
- **Documentation**: [astro.build](https://astro.build/)

#### Starlight
- **Version**: ^0.22.0
- **Purpose**: Documentation theme for Astro
- **Why**: Built for documentation, excellent features, beautiful design
- **Documentation**: [starlight.astro.build](https://starlight.astro.build/)

## Development Tools

### Code Quality

#### ESLint
- **Purpose**: JavaScript/TypeScript linting
- **Why**: Catch errors, enforce code style, prevent bugs
- **Configuration**: `.eslintrc.json`
- **Documentation**: [eslint.org](https://eslint.org/)

#### Prettier
- **Purpose**: Code formatting
- **Why**: Consistent code style, automatic formatting
- **Configuration**: `.prettierrc`
- **Documentation**: [prettier.io](https://prettier.io/)

#### EditorConfig
- **Purpose**: Editor configuration
- **Why**: Consistent coding styles across editors
- **Configuration**: `.editorconfig`
- **Documentation**: [editorconfig.org](https://editorconfig.org/)

### Testing

#### Jest
- **Purpose**: Testing framework
- **Why**: Comprehensive, fast, widely used
- **Configuration**: `jest.config.js`
- **Documentation**: [jestjs.io](https://jestjs.io/)

#### Testing Library
- **Purpose**: Testing utilities
- **Why**: Best practices, user-centric testing
- **Documentation**: [testing-library.com](https://testing-library.com/)

### Version Control

#### Git
- **Purpose**: Source control
- **Why**: Industry standard, powerful, distributed
- **Documentation**: [git-scm.com](https://git-scm.com/)

#### Husky
- **Purpose**: Git hooks
- **Why**: Enforce quality checks before commits
- **Configuration**: `.husky/`
- **Documentation**: [typicode.github.io/husky](https://typicode.github.io/husky/)

## CI/CD & Automation

### GitHub Actions
- **Purpose**: Continuous Integration/Deployment
- **Why**: Native GitHub integration, powerful, free for public repos
- **Configuration**: `.github/workflows/`
- **Documentation**: [docs.github.com/actions](https://docs.github.com/en/actions)

### Dependabot
- **Purpose**: Automated dependency updates
- **Why**: Keep dependencies up-to-date, security patches
- **Configuration**: `.github/dependabot.yml`
- **Documentation**: [docs.github.com/dependabot](https://docs.github.com/en/code-security/dependabot)

## Package Management

### npm
- **Version**: 10.x
- **Purpose**: Package manager
- **Why**: Default Node.js package manager, reliable
- **Documentation**: [npmjs.com](https://www.npmjs.com/)

### Changesets
- **Purpose**: Version management and changelogs
- **Why**: Simplified versioning, automated changelog generation
- **Configuration**: `.changeset/`
- **Documentation**: [github.com/changesets/changesets](https://github.com/changesets/changesets)

## Security

### Snyk
- **Purpose**: Security vulnerability scanning
- **Why**: Comprehensive vulnerability database, automated fixes
- **Integration**: GitHub Actions
- **Documentation**: [snyk.io](https://snyk.io/)

### npm audit
- **Purpose**: Dependency security auditing
- **Why**: Built-in, quick vulnerability checks
- **Usage**: `npm audit`
- **Documentation**: [docs.npmjs.com/cli/audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)

## Documentation Methodology

### Diataxis
- **Purpose**: Documentation framework
- **Why**: Structured, user-centric, proven methodology
- **Categories**:
  - **Tutorials**: Learning-oriented
  - **How-To Guides**: Task-oriented
  - **Reference**: Information-oriented
  - **Explanation**: Understanding-oriented
- **Documentation**: [diataxis.fr](https://diataxis.fr/)

## Architecture Decision Records

### ADR Tools
- **Purpose**: Document architectural decisions
- **Why**: Track decision history, maintain context
- **Location**: `docs/src/content/docs/reference/adr/`
- **Format**: Markdown files with structured template

## Code Standards

### Conventional Commits
- **Purpose**: Standardized commit messages
- **Why**: Automated changelog, semantic versioning, clear history
- **Format**: `type(scope): description`
- **Documentation**: [conventionalcommits.org](https://www.conventionalcommits.org/)

### Semantic Versioning
- **Purpose**: Version numbering scheme
- **Why**: Clear version meaning, predictable releases
- **Format**: `MAJOR.MINOR.PATCH`
- **Documentation**: [semver.org](https://semver.org/)

## Optional Technologies

Depending on your project needs, consider adding:

### Frontend Frameworks
- React, Vue, Svelte, Angular
- Choose based on project requirements

### Backend Frameworks
- Express, Fastify, NestJS, Hapi
- Choose based on project needs

### Databases
- PostgreSQL, MySQL, MongoDB, Redis
- Select based on data requirements

### Deployment Platforms
- Vercel, Netlify, AWS, Azure, Google Cloud
- Choose based on infrastructure needs

### Additional Tools
- Docker for containerization
- Kubernetes for orchestration
- Terraform for infrastructure as code
- GraphQL for API layer

## Technology Selection Principles

When adding new technologies to the stack:

1. **Necessity**: Is it truly needed?
2. **Maturity**: Is it production-ready?
3. **Community**: Is there active support?
4. **Documentation**: Is it well-documented?
5. **Maintenance**: Can we maintain it long-term?
6. **Performance**: Does it meet performance needs?
7. **Security**: Does it meet security standards?
8. **License**: Is the license compatible?

## Keeping Up-to-Date

### Regular Updates

- **Weekly**: Patch updates via Dependabot
- **Monthly**: Review minor updates
- **Quarterly**: Review major updates
- **Annually**: Evaluate tech stack relevance

### Update Process

1. Review Dependabot PRs
2. Check changelog for breaking changes
3. Run tests
4. Update documentation if needed
5. Merge when all checks pass

## Version Support

### Long-Term Support (LTS)

We prioritize LTS versions for stability:

- **Node.js**: Use even-numbered major versions (20.x)
- **TypeScript**: Use stable releases (5.x)
- **Major dependencies**: Prefer stable versions

### End-of-Life (EOL)

Monitor and upgrade before EOL:

- Check [endoflife.date](https://endoflife.date/)
- Plan migrations in advance
- Update documentation

## Related Documentation

- **[Toolchain](../toolchain/)**: Development tools and utilities
- **[Conventions](../conventions/)**: Coding standards
- **[Architecture](../../explanation/architecture/)**: System design
- **[ADRs](../adr/)**: Architecture decisions

---

**Last Updated**: 2024  
**Review Schedule**: Quarterly
