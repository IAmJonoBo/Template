# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security
vulnerability, please report it responsibly.

### How to Report

**DO NOT** report security vulnerabilities through public GitHub issues.

Instead, please report them through one of these methods:

1. **GitHub Security Advisories** (Preferred)
   - Go to the
     [Security tab](https://github.com/IAmJonoBo/Template/security/advisories)
   - Click "Report a vulnerability"
   - Fill out the form with details

2. **Email**
   - Send details to the repository maintainers
   - Use the subject line: "Security Vulnerability Report"

### What to Include

Please include the following information:

- **Description**: Clear description of the vulnerability
- **Impact**: What could an attacker do?
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Affected Versions**: Which versions are affected?
- **Patches**: If you have a fix, please include it
- **References**: Any relevant links or references

Example report:

```text
Title: SQL Injection in User Query

Description:
The user query endpoint is vulnerable to SQL injection attacks
due to improper input sanitization.

Impact:
An attacker could execute arbitrary SQL queries, potentially
accessing or modifying sensitive data.

Steps to Reproduce:
1. Send POST request to /api/users
2. Include malicious SQL in the 'name' parameter
3. Observe query execution

Affected Versions: 0.1.0 - 0.1.5

Suggested Fix:
Use parameterized queries instead of string concatenation.
```

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Depends on severity
  - Critical: 1-7 days
  - High: 7-30 days
  - Medium: 30-90 days
  - Low: Best effort basis

### What to Expect

1. **Acknowledgment**: We'll acknowledge receipt of your report
2. **Investigation**: We'll investigate and validate the vulnerability
3. **Fix Development**: We'll develop and test a fix
4. **Disclosure**: We'll coordinate disclosure with you
5. **Credit**: We'll credit you in the security advisory (if desired)

## Security Best Practices

When using this template:

### Environment Variables

- Never commit `.env` files
- Use `.env.example` for templates
- Rotate secrets regularly
- Use different secrets for each environment

### Dependencies

- Keep dependencies up-to-date
- Review Dependabot PRs promptly
- Run `npm audit` regularly
- Use `npm audit fix` to apply patches

### Code Security

- Validate all user inputs
- Use parameterized queries
- Implement rate limiting
- Use HTTPS in production
- Enable CORS appropriately
- Sanitize outputs to prevent XSS
- Use Content Security Policy headers

### Authentication & Authorization

- Use strong password hashing (bcrypt, Argon2)
- Implement multi-factor authentication
- Use secure session management
- Implement proper authorization checks
- Use JWT securely (short expiration, secure storage)

### API Security

- Rate limit API endpoints
- Validate request bodies
- Use API authentication
- Log suspicious activities
- Implement request size limits

## Security Updates

We publish security updates through:

1. **GitHub Security Advisories**
2. **Release Notes**
3. **CHANGELOG.md**

Subscribe to security advisories:

- Watch the repository
- Enable security alerts
- Follow releases

## Known Vulnerabilities

We maintain a list of known vulnerabilities and their fixes:

| CVE | Severity | Affected Versions | Fixed Version | Description              |
| --- | -------- | ----------------- | ------------- | ------------------------ |
| -   | -        | -                 | -             | No known vulnerabilities |

## Disclosure Policy

- **Coordinated Disclosure**: We follow coordinated disclosure
- **Grace Period**: 90 days before public disclosure
- **Early Disclosure**: If actively exploited, we'll disclose immediately
- **Credits**: Security researchers are credited in advisories

## Security Hall of Fame

We recognize and thank security researchers who responsibly disclose
vulnerabilities:

<!-- List of security researchers will be added here -->

## Questions?

If you have questions about this security policy:

- Open a [GitHub Discussion](https://github.com/IAmJonoBo/Template/discussions)
- Check our [documentation](./docs)
- Contact maintainers

---

**Thank you for helping keep Template secure!** 🔒
