---
title: Set Up Your Development Environment
description:
  Configure your local development environment for the Template repository
---

# How to Set Up Your Development Environment

This guide walks you through setting up a complete development environment for
working with the Template repository.

## Prerequisites Checklist

Before you begin, ensure you have:

- [ ] Operating System: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- [ ] At least 4GB RAM (8GB recommended)
- [ ] 2GB free disk space
- [ ] Internet connection
- [ ] GitHub account

## 1. Install Node.js

### Option A: Using nvm (Recommended)

Node Version Manager (nvm) lets you easily switch between Node versions.

#### macOS / Linux

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal or run:
source ~/.bashrc  # or ~/.zshrc for zsh

# Verify nvm installation
nvm --version
```

#### Windows

Download and install nvm-windows from:
[nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases)

### Install Node.js 20.11.0

```bash
# Install Node.js
nvm install 20.11.0

# Use this version
nvm use 20.11.0

# Set as default
nvm alias default 20.11.0

# Verify installation
node --version  # Should show v20.11.0
npm --version   # Should show 10.x.x
```

## 2. Install Git

### macOS

```bash
# Using Homebrew
brew install git

# Or download from:
# https://git-scm.com/download/mac
```

### Windows

Download and install from: https://git-scm.com/download/win

### Linux

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install git

# Fedora
sudo dnf install git

# Arch
sudo pacman -S git
```

### Configure Git

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Verify configuration
git config --list
```

## 3. Install a Code Editor

### VS Code (Recommended)

1. Download from: https://code.visualstudio.com/
2. Install for your operating system
3. Open VS Code

### Install Essential Extensions

```bash
# Open VS Code
code .

# Install extensions via command palette (Cmd/Ctrl + P):
ext install dbaeumer.vscode-eslint
ext install esbenp.prettier-vscode
ext install editorconfig.editorconfig
ext install eamodio.gitlens
```

Or install from the Extensions marketplace:

- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **EditorConfig**: Consistent coding styles
- **GitLens**: Enhanced Git integration
- **Error Lens**: Inline error display
- **Thunder Client**: API testing
- **Path Intellisense**: Path autocomplete

### Configure VS Code

Create `.vscode/settings.json` in your project:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.rulers": [100],
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

Create `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "editorconfig.editorconfig",
    "eamodio.gitlens"
  ]
}
```

## 4. Clone the Repository

### Fork First (For Contributors)

1. Go to https://github.com/IAmJonoBo/Template
2. Click **"Fork"** button
3. Wait for your fork to be created

### Clone Your Fork

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/Template.git

# Navigate to directory
cd Template

# Add upstream remote
git remote add upstream https://github.com/IAmJonoBo/Template.git

# Verify remotes
git remote -v
```

## 5. Install Project Dependencies

```bash
# Install all dependencies
npm install

# This installs:
# - TypeScript
# - ESLint and Prettier
# - Jest for testing
# - All development tools
```

Wait for installation to complete. This may take a few minutes.

## 6. Set Up Git Hooks

```bash
# Install Husky git hooks
npm run setup:hooks

# This sets up:
# - Pre-commit: Lints and formats code
# - Pre-push: Runs tests
```

## 7. Configure Environment Variables

```bash
# Copy example environment file
cp .env.example .env

# Edit with your values
nano .env  # or use your preferred editor
```

Update `.env` with your configuration:

```env
NODE_ENV=development
PORT=3000

# Add any API keys or secrets you need
# Never commit this file!
```

## 8. Verify Your Setup

```bash
# Run verification script
npm run verify

# This runs:
# ✓ Linting
# ✓ Type checking
# ✓ Tests
# ✓ Build
```

Expected output:

```
✓ Linting passed
✓ Type checking passed
✓ Tests passed
✓ Build successful

Setup verified successfully! 🎉
```

## 9. Start Development

### Run in Development Mode

```bash
npm run dev
```

### Run Tests in Watch Mode

```bash
npm test -- --watch
```

### View Documentation Locally

```bash
cd docs
npm install
npm run dev
```

Visit http://localhost:4321

## 10. Set Up Additional Tools (Optional)

### GitHub CLI

Install GitHub CLI for easier interaction:

```bash
# macOS
brew install gh

# Windows
winget install --id GitHub.cli

# Linux
# See: https://github.com/cli/cli#installation
```

Authenticate:

```bash
gh auth login
```

### Docker (Optional)

If you plan to use Docker:

1. Download Docker Desktop
   - macOS: https://docs.docker.com/desktop/install/mac-install/
   - Windows: https://docs.docker.com/desktop/install/windows-install/
   - Linux: https://docs.docker.com/desktop/install/linux-install/

2. Verify installation:

```bash
docker --version
docker-compose --version
```

## Troubleshooting

### Node.js Not Found

```bash
# Check if Node.js is installed
node --version

# If not found, reinstall Node.js
# Make sure to restart your terminal
```

### npm Install Fails

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Permission Errors (macOS/Linux)

```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Add to PATH
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Git Hooks Not Working

```bash
# Reinstall hooks
rm -rf .husky
npm run setup:hooks

# Make hooks executable (macOS/Linux)
chmod +x .husky/*
```

### VS Code TypeScript Errors

```bash
# Use workspace TypeScript
# In VS Code: Cmd/Ctrl + Shift + P
# Type: "TypeScript: Select TypeScript Version"
# Choose "Use Workspace Version"
```

## Platform-Specific Notes

### Windows

- Use Git Bash or PowerShell
- Consider using WSL2 for Linux compatibility
- Enable long path support:
  ```powershell
  git config --system core.longpaths true
  ```

### macOS

- May need Xcode Command Line Tools:
  ```bash
  xcode-select --install
  ```

### Linux

- May need build essentials:
  ```bash
  sudo apt-get install build-essential
  ```

## Daily Workflow

### Starting Work

```bash
# 1. Update your main branch
git checkout main
git pull upstream main

# 2. Create a feature branch
git checkout -b feature/my-feature

# 3. Start development server
npm run dev
```

### Before Committing

```bash
# 1. Run quality checks
npm run verify

# 2. Stage changes
git add .

# 3. Commit (pre-commit hook runs automatically)
git commit -m "feat: add new feature"
```

### Before Pushing

```bash
# Pre-push hook runs tests automatically
git push origin feature/my-feature
```

## Next Steps

Now that your environment is set up:

1. **Read the Documentation**
   - [Coding Conventions](../../reference/conventions/)
   - [Architecture Guide](../../explanation/architecture/)
   - [Contributing Guide](../how-to-contribute/)

2. **Start Contributing**
   - Find a `good first issue`
   - Follow the
     [First Contribution Tutorial](../../tutorials/first-contribution/)

3. **Join the Community**
   - [GitHub Discussions](https://github.com/IAmJonoBo/Template/discussions)
   - [Issues](https://github.com/IAmJonoBo/Template/issues)

## Getting Help

Need assistance?

- 📚 Check the [Documentation](/)
- 💬 Ask in [Discussions](https://github.com/IAmJonoBo/Template/discussions)
- 🐛 Report [Issues](https://github.com/IAmJonoBo/Template/issues)

---

**Your development environment is ready!** Happy coding! 🚀
