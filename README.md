# 🚀 Multipurpose Template Repository

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code Quality](https://img.shields.io/badge/code%20quality-A+-brightgreen.svg)]()
[![Documentation](https://img.shields.io/badge/docs-Astro%20Starlight-blueviolet.svg)]()
[![Semantic Versioning](https://img.shields.io/badge/semver-2.0.0-blue.svg)](https://semver.org/)

A production-ready, multipurpose template repository designed to jumpstart any software project with best practices, comprehensive documentation, and automated quality gates built-in.

## 🌟 Features

- **📚 Comprehensive Documentation**: Astro Starlight-powered docs following Diataxis methodology
- **🔒 Quality Gates**: Automated linting, testing, security scanning, and code quality checks
- **🤖 GitHub Actions**: Pre-configured CI/CD workflows for testing, building, and deployment
- **📋 Project Management**: Issue/PR templates, automated project boards, and labels
- **🔄 Evergreen Dependencies**: Automated dependency updates with Dependabot
- **📝 ADR Support**: Architecture Decision Records structure and templates
- **🏗️ Tech Stack Documentation**: Clear documentation of technologies and tooling
- **⚡ Development Experience**: Pre-commit hooks, EditorConfig, and development scripts
- **🎯 Semantic Versioning**: Automated versioning and changelog generation
- **👥 Contributor Guidelines**: Clear guidelines for contributors and agents

## 🚀 Quick Start

### Prerequisites

- Node.js 20.11.0 or higher (see `.nvmrc`)
- npm, yarn, or pnpm
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/IAmJonoBo/Template.git
cd Template

# Install dependencies (if applicable)
npm install

# Set up pre-commit hooks
npm run setup:hooks

# Start development
npm run dev
```

## 📖 Documentation

Full documentation is available in the `/docs` directory and can be viewed locally:

```bash
cd docs
npm install
npm run dev
```

Visit `http://localhost:4321` to browse the documentation.

### Documentation Structure (Diataxis)

- **📘 Tutorials**: Learning-oriented, step-by-step guides
- **📗 How-To Guides**: Task-oriented, problem-solving guides
- **📙 Reference**: Information-oriented, technical descriptions
- **📕 Explanation**: Understanding-oriented, conceptual discussions

## 🏗️ Repository Structure

```
.
├── .github/
│   ├── ISSUE_TEMPLATE/     # Issue templates for bugs, features, docs
│   ├── workflows/          # GitHub Actions CI/CD workflows
│   ├── agents/             # Instructions for AI agents
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── CONTRIBUTING.md
│   └── CODE_OF_CONDUCT.md
├── docs/                   # Astro Starlight documentation site
│   ├── src/
│   │   ├── content/        # Documentation content (Diataxis structure)
│   │   └── components/     # Custom documentation components
│   └── astro.config.mjs
├── scripts/                # Development and automation scripts
├── .changeset/             # Changeset configuration for versioning
├── .editorconfig           # Editor configuration
├── .gitignore              # Git ignore patterns
├── .nvmrc                  # Node version specification
├── LICENSE                 # MIT License
└── README.md               # This file
```

## 🔧 Development

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run test        # Run tests
npm run lint        # Lint code
npm run format      # Format code
npm run typecheck   # Type check code
```

### Code Quality

This repository enforces high code quality standards:

- **Linting**: ESLint with recommended rules
- **Formatting**: Prettier for consistent code style
- **Type Checking**: TypeScript for type safety
- **Testing**: Comprehensive test coverage required
- **Pre-commit Hooks**: Automated checks before commits

## 📦 Dependency Management

Dependencies are automatically kept up-to-date using:

- **Dependabot**: Automated dependency updates (daily security, weekly feature updates)
- **GitHub Actions**: Automated testing of dependency updates

## 🔄 Versioning & Releases

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

Versioning is automated using Changesets. See [CHANGELOG.md](./CHANGELOG.md) for release history.

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](.github/CONTRIBUTING.md) and [Code of Conduct](.github/CODE_OF_CONDUCT.md) before getting started.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for your changes
5. Run quality checks (`npm run lint && npm run test`)
6. Commit your changes (`git commit -m 'feat: add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📋 Architecture & Design

- **[Architecture Decision Records (ADRs)](./docs/src/content/docs/reference/adr/)**: Design decisions and rationale
- **[Tech Stack](./docs/src/content/docs/reference/tech-stack.md)**: Technologies and frameworks
- **[Toolchain](./docs/src/content/docs/reference/toolchain.md)**: Development tools and utilities
- **[Architecture](./docs/src/content/docs/explanation/architecture.md)**: System architecture overview
- **[Conventions](./docs/src/content/docs/reference/conventions.md)**: Coding standards and practices

## 🤖 AI Agent Instructions

This repository includes comprehensive instructions for AI agents in `.github/agents/`. These guidelines help agents:

- Maintain code quality standards
- Follow project conventions
- Generate appropriate documentation
- Create proper commit messages
- Enforce architectural patterns

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Astro Starlight for documentation framework
- Diataxis for documentation methodology
- Semantic Versioning specification
- All contributors and maintainers

## 📞 Support

- **Documentation**: Check the [docs](./docs) directory
- **Issues**: Submit an [issue](https://github.com/IAmJonoBo/Template/issues)
- **Discussions**: Join [discussions](https://github.com/IAmJonoBo/Template/discussions)

---

**Made with ❤️ by the Template community**