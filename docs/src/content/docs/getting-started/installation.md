---
title: Installation
description: Detailed installation and setup guide
---

# Installation Guide

This comprehensive guide covers the installation and setup of the Template
repository in various scenarios.

## System Requirements

### Minimum Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **Node.js**: 20.11.0 or higher
- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: 1GB free space
- **Internet Connection**: Required for downloading dependencies

### Recommended Tools

- **Package Manager**: npm 10.0+, yarn 1.22+, or pnpm 8.0+
- **Git**: 2.30+ for version control
- **Code Editor**: VS Code, WebStorm, or similar
- **Terminal**: Modern terminal with shell support

## Installation Methods

### Method 1: Use as GitHub Template (Recommended)

The easiest way to start with Template:

1. **Navigate to the repository**
   - Visit https://github.com/IAmJonoBo/Template

2. **Click "Use this template"**
   - Click the green "Use this template" button
   - Select "Create a new repository"

3. **Configure your repository**

   ```
   Repository name: my-awesome-project
   Description: My project based on Template
   Visibility: Public or Private
   ```

4. **Create repository**
   - Click "Create repository from template"

5. **Clone your new repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/my-awesome-project.git
   cd my-awesome-project
   ```

6. **Install dependencies**

   ```bash
   npm install
   ```

7. **Run setup**
   ```bash
   npm run setup
   ```

### Method 2: Fork and Clone

For contributing back to Template:

1. **Fork the repository**
   - Visit https://github.com/IAmJonoBo/Template
   - Click "Fork" button

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/Template.git
   cd Template
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/IAmJonoBo/Template.git
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Run setup**
   ```bash
   npm run setup
   ```

### Method 3: Direct Clone

For quick testing or local use:

1. **Clone the repository**

   ```bash
   git clone https://github.com/IAmJonoBo/Template.git
   cd Template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run setup**
   ```bash
   npm run setup
   ```

### Method 4: Download ZIP

For offline use or exploration:

1. **Download ZIP**
   - Visit https://github.com/IAmJonoBo/Template
   - Click "Code" → "Download ZIP"

2. **Extract the archive**

   ```bash
   unzip Template-main.zip
   cd Template-main
   ```

3. **Initialize Git (optional)**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

## Node.js Installation

### Using nvm (Recommended)

#### macOS/Linux

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell configuration
source ~/.bashrc  # or ~/.zshrc

# Install Node.js
nvm install 20.11.0

# Use the version
nvm use 20.11.0

# Set as default
nvm alias default 20.11.0
```

#### Windows

```powershell
# Install nvm-windows from:
# https://github.com/coreybutler/nvm-windows/releases

# Install Node.js
nvm install 20.11.0

# Use the version
nvm use 20.11.0
```

### Using Node.js Installer

1. Visit https://nodejs.org/
2. Download Node.js 20.11.0 LTS
3. Run the installer
4. Follow installation wizard
5. Verify installation:
   ```bash
   node --version  # Should show v20.11.0
   npm --version   # Should show 10.x.x
   ```

## Package Manager Setup

### npm (Default)

Comes with Node.js, no additional setup needed:

```bash
# Verify npm
npm --version

# Update npm (optional)
npm install -g npm@latest
```

### yarn (Alternative)

```bash
# Install yarn
npm install -g yarn

# Verify installation
yarn --version

# Install dependencies
yarn install
```

### pnpm (Alternative)

```bash
# Install pnpm
npm install -g pnpm

# Verify installation
pnpm --version

# Install dependencies
pnpm install
```

## Verification

After installation, verify everything works:

```bash
# Run verification script
npm run verify
```

This script will:

1. ✓ Check Node.js version
2. ✓ Run linter
3. ✓ Run type checker
4. ✓ Run tests
5. ✓ Build the project

Expected output:

```
✓ Linting passed
✓ Type checking passed
✓ Tests passed (0 tests)
✓ Build successful
```

## Environment Configuration

### Create Environment File

```bash
# Copy example environment file
cp .env.example .env
```

### Edit Environment Variables

```bash
# Edit .env file
nano .env
```

Example `.env` file:

```env
# Application
NODE_ENV=development
PORT=3000

# Database (if applicable)
DATABASE_URL=postgresql://localhost:5432/mydb

# API Keys (if applicable)
API_KEY=your-api-key-here

# Feature Flags
FEATURE_NEW_UI=false
```

## IDE Setup

### VS Code

1. **Install recommended extensions**
   - ESLint
   - Prettier
   - EditorConfig
   - GitLens

2. **Configure settings**

   Create `.vscode/settings.json`:

   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "typescript.tsdk": "node_modules/typescript/lib"
   }
   ```

3. **Configure launch configurations**

   Create `.vscode/launch.json`:

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

### WebStorm / IntelliJ IDEA

1. **Configure Node.js**
   - Settings → Languages & Frameworks → Node.js
   - Set Node interpreter to your Node.js installation

2. **Enable ESLint**
   - Settings → Languages & Frameworks → JavaScript → Code Quality Tools →
     ESLint
   - Select "Automatic ESLint configuration"

3. **Enable Prettier**
   - Settings → Languages & Frameworks → JavaScript → Prettier
   - Check "On code reformat" and "On save"

## Git Configuration

### Configure Git Hooks

```bash
# Install Husky
npm run setup:hooks
```

This sets up:

- Pre-commit: Runs linter and formatter
- Pre-push: Runs tests

### Configure Git User

```bash
# Set your name
git config user.name "Your Name"

# Set your email
git config user.email "your.email@example.com"
```

## Troubleshooting

### Common Issues

#### Issue: Node version mismatch

```bash
# Problem: Node version doesn't match .nvmrc
nvm: command not found

# Solution: Install nvm and use correct version
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install
nvm use
```

#### Issue: Permission errors on npm install

```bash
# Problem: EACCES: permission denied

# Solution 1: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Solution 2: Use sudo (not recommended)
sudo npm install --unsafe-perm
```

#### Issue: Husky hooks not running

```bash
# Problem: Git hooks not executing

# Solution: Reinstall hooks
rm -rf .husky
npm run setup:hooks
chmod +x .husky/*
```

#### Issue: Build fails with TypeScript errors

```bash
# Problem: Type errors during build

# Solution: Check TypeScript version and config
npm run typecheck
# Fix any type errors in your code
```

#### Issue: Tests fail on installation

```bash
# Problem: Jest tests fail

# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm test
```

### Platform-Specific Issues

#### Windows

**Issue**: Line ending conflicts

```bash
# Solution: Configure Git line endings
git config --global core.autocrlf true
```

**Issue**: Long path errors

```bash
# Solution: Enable long paths
git config --system core.longpaths true
```

#### macOS

**Issue**: Xcode Command Line Tools missing

```bash
# Solution: Install Xcode tools
xcode-select --install
```

#### Linux

**Issue**: Missing build tools

```bash
# Solution: Install build essentials
sudo apt-get install build-essential
```

## Docker Installation (Optional)

If you prefer Docker:

1. **Create Dockerfile**

   ```dockerfile
   FROM node:20.11.0-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build
   CMD ["npm", "start"]
   ```

2. **Create docker-compose.yml**

   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - '3000:3000'
       volumes:
         - .:/app
         - /app/node_modules
   ```

3. **Run with Docker**
   ```bash
   docker-compose up
   ```

## Next Steps

After successful installation:

1. **Customize the template**
   - Update `package.json` with your project details
   - Modify `README.md` for your project
   - Adjust configurations as needed

2. **Start development**

   ```bash
   npm run dev
   ```

3. **Read the documentation**

   ```bash
   cd docs
   npm install
   npm run dev
   ```

   Visit http://localhost:4321

4. **Explore tutorials**
   - Check out [Tutorials](../../tutorials/) section
   - Follow [How-To Guides](../../how-to/) for specific tasks

## Getting Help

If you encounter issues:

- 📚 Check the [Troubleshooting](#troubleshooting) section above
- 💬 Ask in
  [GitHub Discussions](https://github.com/IAmJonoBo/Template/discussions)
- 🐛 Report bugs via
  [GitHub Issues](https://github.com/IAmJonoBo/Template/issues)
- 📖 Review the [Contributing Guide](../../contributing/how-to-contribute/)

---

**Installation complete!** You're ready to start building with Template. 🎉
