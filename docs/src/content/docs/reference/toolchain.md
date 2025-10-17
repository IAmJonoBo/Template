---
title: Toolchain
description: Development tools and utilities reference
---

This document describes the development tools and utilities used in the Template
repository.

## Editor & IDE

### VS Code (Recommended)

**Extensions**:

- **ESLint**: Linting integration
- **Prettier**: Code formatting
- **EditorConfig**: Editor configuration
- **GitLens**: Enhanced Git integration
- **Thunder Client**: API testing
- **Error Lens**: Inline error messages
- **Better Comments**: Enhanced comments
- **Path Intellisense**: Path autocomplete

**Configuration**: `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Other Supported Editors

- **WebStorm**: Full IDE with built-in tools
- **Sublime Text**: With Package Control extensions
- **Vim/Neovim**: With appropriate plugins
- **Emacs**: With appropriate packages

## Command Line Tools

### Package Manager

#### npm

```bash
# Install dependencies
npm install

# Add dependency
npm install package-name

# Add dev dependency
npm install -D package-name

# Update dependencies
npm update

# Audit security
npm audit
```

#### Alternative: yarn

```bash
yarn install
yarn add package-name
yarn add -D package-name
```

#### Alternative: pnpm

```bash
pnpm install
pnpm add package-name
pnpm add -D package-name
```

### Version Manager

#### nvm (Node Version Manager)

```bash
# Install Node version from .nvmrc
nvm install

# Use Node version from .nvmrc
nvm use

# Set default version
nvm alias default 20.11.0
```

## Code Quality Tools

### Linting

#### ESLint

```bash
# Lint all files
npm run lint

# Lint with auto-fix
npm run lint:fix

# Lint specific files
npx eslint src/**/*.ts
```

**Configuration**: `.eslintrc.json`

### Formatting

#### Prettier

```bash
# Check formatting
npm run format:check

# Format all files
npm run format

# Format specific files
npx prettier --write src/**/*.ts
```

**Configuration**: `.prettierrc`

### Type Checking

#### TypeScript

```bash
# Type check
npm run typecheck

# Type check in watch mode
npx tsc --watch

# Generate type declarations
npx tsc --declaration
```

**Configuration**: `tsconfig.json`

## Testing Tools

### Jest

```bash
# Run all tests
npm test

# Run in watch mode
npm test -- --watch

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test -- path/to/test.ts

# Update snapshots
npm test -- -u
```

**Configuration**: `jest.config.js`

### Testing Library

```bash
# Debug tests
npm test -- --debug

# Run with verbose output
npm test -- --verbose
```

## Build Tools

### TypeScript Compiler

```bash
# Build project
npm run build

# Clean build artifacts
npm run clean

# Watch mode
npm run build:watch
```

### Bundlers

Depending on your project type:

#### Vite

```bash
npm run dev
npm run build
npm run preview
```

#### Webpack

```bash
npm run dev
npm run build
npm run serve
```

## Git Tools

### Git Hooks (Husky)

**Pre-commit**: Runs linting and formatting checks

```bash
# Install hooks
npm run prepare

# Skip hooks (use cautiously)
git commit --no-verify
```

**Configuration**: `.husky/pre-commit`

### Conventional Commits

#### Commitizen

```bash
# Interactive commit
npx cz

# Or
npm run commit
```

#### Commitlint

Validates commit messages automatically via git hook.

**Configuration**: `.commitlintrc.json`

## Version Control

### Git

```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "feat: add new feature"

# Push changes
git push

# Pull latest
git pull

# Create branch
git checkout -b feature/new-feature

# View history
git log --oneline --graph
```

### GitHub CLI

```bash
# Create PR
gh pr create

# View PRs
gh pr list

# Check out PR
gh pr checkout <number>

# View issues
gh issue list

# Create issue
gh issue create
```

## Documentation Tools

### Astro & Starlight

```bash
# Start docs dev server
cd docs
npm run dev

# Build docs
npm run build

# Preview build
npm run preview
```

### Markdown Tools

#### markdownlint

```bash
# Lint markdown files
npx markdownlint docs/**/*.md

# Fix issues
npx markdownlint --fix docs/**/*.md
```

## Debugging Tools

### Node.js Debugger

```bash
# Start with debugger
node --inspect src/index.js

# Debug tests
node --inspect-brk node_modules/.bin/jest --runInBand
```

### VS Code Debugger

**Configuration**: `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Tests",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["--runInBand"],
      "console": "integratedTerminal"
    }
  ]
}
```

## Performance Tools

### Profiling

```bash
# Profile Node.js app
node --prof src/index.js

# Process profile output
node --prof-process isolate-*.log
```

### Benchmarking

```bash
# Using autocannon (API benchmarking)
npx autocannon http://localhost:3000

# Using clinic (Node.js diagnostics)
npx clinic doctor -- node src/index.js
```

## Deployment Tools

### Docker

```bash
# Build image
docker build -t template:latest .

# Run container
docker run -p 3000:3000 template:latest

# Compose
docker-compose up
```

### CI/CD

#### GitHub Actions

- Automatically runs on push/PR
- View in GitHub Actions tab
- Locally with act: `npx act`

## Automation Scripts

### Setup

```bash
# Full project setup
npm run setup

# Install git hooks
npm run prepare

# Verify installation
npm run verify
```

### Development

```bash
# Start development
npm run dev

# Watch tests
npm run test:watch

# Watch types
npm run typecheck:watch
```

### Quality Checks

```bash
# Run all checks
npm run check:all

# Pre-push checks
npm run prepush
```

### Maintenance

```bash
# Update dependencies
npm run update:deps

# Check for outdated
npm outdated

# Clean and reinstall
npm run clean:install
```

## Utility Tools

### File Operations

#### trash-cli

```bash
# Safely delete (to trash)
npx trash dist/
```

#### rimraf

```bash
# Cross-platform rm -rf
npx rimraf dist/
```

### Code Generation

#### Plop

```bash
# Generate component
npm run generate

# Generate from template
npx plop component
```

### Code Analysis

#### Dependency Cruiser

```bash
# Analyze dependencies
npx depcruise --include-only "^src" src
```

#### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze
```

## Security Tools

### Audit

```bash
# npm audit
npm audit

# yarn audit
yarn audit

# Fix vulnerabilities
npm audit fix
```

### Snyk

```bash
# Test for vulnerabilities
npx snyk test

# Monitor project
npx snyk monitor
```

## Monitoring Tools

### Logs

```bash
# View logs
npm run logs

# Follow logs
npm run logs:follow
```

### Health Checks

```bash
# Check application health
curl http://localhost:3000/health
```

## Recommended Global Tools

```bash
# Essential tools
npm install -g npm@latest
npm install -g typescript
npm install -g ts-node

# Quality tools
npm install -g eslint
npm install -g prettier

# Utility tools
npm install -g npm-check-updates
npm install -g http-server
npm install -g json-server
```

## Tool Configuration Files

```text
.
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── .editorconfig           # Editor configuration
├── tsconfig.json           # TypeScript configuration
├── jest.config.js          # Jest configuration
├── .nvmrc                  # Node version
├── .gitignore              # Git ignore patterns
├── .gitattributes          # Git attributes
└── package.json            # Package configuration
```

## Customization

### Adding New Tools

1. Install the tool: `npm install -D tool-name`
2. Add configuration file
3. Update scripts in `package.json`
4. Document in this guide
5. Update CI/CD if needed

### Removing Tools

1. Uninstall: `npm uninstall tool-name`
2. Remove configuration files
3. Update scripts
4. Update documentation
5. Update CI/CD

## Related Documentation

- **[Tech Stack](../tech-stack/)**: Core technologies
- **[Conventions](../conventions/)**: Coding standards
- **[Contributing](../../contributing/development-setup/)**: Development setup

---

**Last Updated**: 2024  
**Maintenance**: Update when adding/removing tools
