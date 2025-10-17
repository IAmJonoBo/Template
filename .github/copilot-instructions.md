# Copilot Instructions for AI Coding Agents

This repository is a multipurpose, production-ready template with a modular,
layered architecture. Follow these guidelines to be immediately productive and
maintain project standards.

## Architecture & Structure

- **Layered Design:**
  - Documentation (Astro Starlight, Diataxis, ADRs)
  - Application (source code, tests, configs)
  - Quality Assurance (linting, formatting, type checking, testing)
- **Docs:** All user and developer docs are in `docs/` (see `astro.config.mjs`
  for structure).
- **ADRs:** Architecture decisions are in
  `docs/src/content/docs/reference/adr/`.
- **Tech Stack:** Node.js 20+, TypeScript, Astro, Starlight. See
  `docs/src/content/docs/reference/tech-stack.md`.

## Developer Workflows

- **Install:** `npm install` (or `pnpm install` for monorepos)
- **Dev Server:** `npm run dev` or `pnpm dev`
- **Tests:** `npm test` or `pnpm test` (Jest)
- **Lint/Format:** `npm run lint && npm run fmt` (ESLint, Prettier)
- **Build:** `npm run build`
- **Sync Repos:** Use the VS Code task "Sync All Repos" for monorepo changes.

## Conventions & Patterns

- **TypeScript:** Strict types, single quotes, no semicolons. ESLint + Prettier
  enforced.
- **Documentation:** Diataxis methodology (Tutorials, How-To, Reference,
  Explanation).
- **Versioning:** Semantic Versioning, automated changelogs.
- **Minimal Patch:** Only touch files required for the fix/feature.
- **PRs:** Include root cause, rationale, and test evidence in PR body.

## Boundaries & Security

- **No secrets:** Never commit credentials, tokens, or personal data.
- **Dependencies:** Add new dependencies only with tests and lockfile update.
- **External Docs:** Prefer local sources; cite URLs if fetching external docs.

## Examples

- See `docs/src/content/docs/getting-started/quick-start.md` for onboarding.
- See ADRs for rationale behind major decisions.
- See `codex-dx-template/AGENTS.md` for agent-specific rules (read closest
  AGENTS.md first in monorepos).

## Definition of Done

- All tests and lints pass locally.
- Minimal, well-rationalized changes.
- PR body documents reasoning and evidence.

---

For questions or unclear conventions, consult the relevant documentation in
`docs/` or ask for clarification before proceeding.
