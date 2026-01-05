# OpenCode.md

## Build, Lint, Test Commands

- **Build Documentation**: `pnpm run docs:build`
- **Start Documentation Dev Server**: `pnpm run docs:dev`
- **Preview Documentation Build**: `pnpm run docs:preview`
- **Lint**: Automatically runs via `lint-staged` with `eslint --fix` on relevant files during Git pre-commit.
- **Test**: Currently, no tests are specified.

## Code Style Guidelines

### General
- **TypeScript** is used with strict configurations in `tsconfig.json`.

### Imports
- Organize imports logically.
- Follow ESM (ECMAScript Modules) standards (`import` and `export`).

### Formatting
- Use the **@antfu/eslint-config** preset with overrides. Notable rule:
  - `no-console` is disabled in `eslint.config.js`.
- Run: `npx eslint . --fix` to ensure proper formatting.

### Naming Conventions
- Use **kebab-case** for filenames.
- Follow standard conventions for TypeScript (`PascalCase` for types/classes, `camelCase` for variables/functions).

### Error Handling
- Special rules are unspecified; ensure robust practices.

### Notes
- Husky and lint-staged manage pre-commit hooks.
- Feel free to refine testing support.