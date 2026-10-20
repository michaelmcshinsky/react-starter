# react-starter

Vite + React 19 + TypeScript starter with Tailwind CSS 4, TanStack Query, Vitest, and Storybook 8.

> **v2 rewrite** — v1 (React 16 + Webpack 4 + Babel + node-sass) is preserved on the [`v1-legacy`](https://github.com/michaelmcshinsky/react-starter/tree/v1-legacy) tag.

## Stack

| Layer | Choice |
| --- | --- |
| Build | Vite 6 |
| UI | React 19 + TypeScript (strict) |
| Routing | React Router 7 (lazy routes) |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Server state | TanStack Query 5 |
| Config | Zod-validated `import.meta.env` |
| Tests | Vitest + Testing Library + jsdom |
| Docs | Storybook 8 |
| Lint | ESLint 9 flat + typescript-eslint |

## Architecture

```
src/
  app/           # App shell, router, global styles
  features/      # Feature modules (home, about) — one folder per feature
  shared/        # Cross-cutting: config, providers, components
  test/          # Test setup
```

- **Feature folders** keep route-level code co-located with its components and tests.
- **Path aliases**: `@/`, `@features/`, `@shared/`.
- **Route-level code splitting** via `React.lazy` + `Suspense`.
- **Error boundary** wraps the router with a resettable fallback.
- **Env validation** fails the boot on invalid configuration.

## Getting started

```bash
cp .env.example .env
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm test` | Run Vitest suite |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run storybook` | Storybook dev server |
| `npm run build-storybook` | Static Storybook build |

## Multi-environment config

Copy the matching example and adjust:

- `.env.development.example` → local dev (API on localhost)
- `.env.staging.example` → staging API
- `.env.production.example` → production API

Vite loads `.env.[mode]` automatically; all `VITE_*` keys are validated by Zod at boot.

## License

MIT
