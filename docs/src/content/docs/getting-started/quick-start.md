---
title: Quick Start
description: Get started with Template in 5 minutes
---

# Quick Start

Get up and running with Template in just a few minutes!

## Prerequisites

Before you begin, ensure you have:

- **Node.js** 20.11.0 or higher ([Download](https://nodejs.org/))
- **npm**, **yarn**, or **pnpm** package manager
- **Git** version control ([Download](https://git-scm.com/))
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))

## Step 1: Create Your Repository

### Option A: Use as Template (Recommended)

1. Visit the [Template repository](https://github.com/IAmJonoBo/Template)
2. Click the **"Use this template"** button
3. Choose **"Create a new repository"**
4. Fill in your repository details:
   - **Repository name**: Your project name
   - **Description**: Brief project description
   - **Visibility**: Public or Private
5. Click **"Create repository"**

### Option B: Clone Directly

```bash
# Clone the repository
git clone https://github.com/IAmJonoBo/Template.git my-project
cd my-project

# Remove the original git history (optional)
rm -rf .git
git init
git add .
git commit -m "Initial commit from Template"
```

## Step 2: Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

## Step 3: Configure Your Project

### Update Project Information

1. **Update `package.json`**: Change name, description, author, repository URL
2. **Update `README.md`**: Customize for your project
3. **Update `LICENSE`**: Change copyright holder if needed
4. **Update `.github/` files**: Adjust templates to your needs

### Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
# Add any secrets or environment-specific values
```

## Step 4: Verify Setup

Run the verification script to ensure everything is working:

```bash
# Run all checks
npm run verify

# Or run individual checks
npm run lint      # Check code style
npm run typecheck # Check TypeScript types
npm run test      # Run tests
npm run build     # Build the project
```

## Step 5: Start Developing

### Start Development Server

```bash
npm run dev
```

This starts the development server with hot-reload enabled.

### View Documentation Locally

```bash
cd docs
npm install
npm run dev
```

Visit `http://localhost:4321` to browse the documentation.

## Common Tasks

### Add Dependencies

```bash
# Add a production dependency
npm install package-name

# Add a development dependency
npm install -D package-name
```

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Format Code

```bash
# Check formatting
npm run format:check

# Fix formatting
npm run format
```

### Create a New Feature

```bash
# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes
# ...

# Commit your changes
git add .
git commit -m "feat: add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Open a Pull Request on GitHub
```

## Next Steps

Now that you're set up, explore:

1. **[Installation Guide](../installation/)**: Detailed setup instructions
2. **[Tutorials](../../tutorials/)**: Step-by-step learning guides
3. **[How-To Guides](../../how-to/)**: Solve specific problems
4. **[Reference](../../reference/tech-stack/)**: Technical documentation
5. **[Contributing](../../contributing/how-to-contribute/)**: Learn how to
   contribute

## Troubleshooting

### Node Version Issues

If you encounter Node version issues:

```bash
# Check your Node version
node --version

# If using nvm, switch to the correct version
nvm use

# Install the version specified in .nvmrc
nvm install
```

### Installation Errors

If dependencies fail to install:

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Build Errors

If the build fails:

```bash
# Check for type errors
npm run typecheck

# Check for linting errors
npm run lint

# View detailed build output
npm run build -- --verbose
```

## Getting Help

Need assistance?

- 📚 Check the [documentation](/getting-started/introduction/)
- 💬 Ask in
  [GitHub Discussions](https://github.com/IAmJonoBo/Template/discussions)
- 🐛 Report [issues](https://github.com/IAmJonoBo/Template/issues)
- 📖 Read the [Contributing Guide](../../contributing/how-to-contribute/)

---

**Congratulations! 🎉** You're ready to start building with Template!
