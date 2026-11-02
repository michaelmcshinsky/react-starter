# react-starter

[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?style=flat-square&logo=react-query&logoColor=white)](https://tanstack.com/query)
[![Vitest](https://img.shields.io/badge/Vitest-2-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev)
[![Storybook](https://img.shields.io/badge/Storybook-8-FF4785?style=flat-square&logo=storybook&logoColor=white)](https://storybook.js.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

> **Live demo:** [react-starter.mcshinsky.net](https://react-starter.mcshinsky.net) • **Storybook:** [react-starter.mcshinsky.net/storybook](https://react-starter.mcshinsky.net/storybook)

Production-ready, opinionated Vite + React 19 + TypeScript starter with Tailwind CSS 4, TanStack Query, Vitest, and Storybook 8. Built for teams shipping real products — not hello-world demos.

---

## Why This Over `create-vite` or Other Starters?

| Concern | `create-vite` | Typical Starter | **react-starter** |
|---------|---------------|-----------------|-------------------|
| Routing | ❌ Manual | ✅ Often | ✅ React Router 7, lazy routes, Suspense |
| Server state | ❌ Manual | ⚠️ Sometimes | ✅ TanStack Query 5, pre-configured provider |
| Env validation | ❌ Manual | ⚠️ Sometimes | ✅ Zod schema, fails fast at boot |
| Error boundaries | ❌ Manual | ❌ Rarely | ✅ Resettable boundary wrapping router |
| Feature folders | ❌ Flat | ⚠️ Sometimes | ✅ Enforced: `features/`, `shared/`, `app/` |
| Testing | ⚠️ Basic | ⚠️ Often | ✅ Vitest + RTL + jsdom, coverage gates |
| Storybook | ❌ Manual | ❌ Rarely | ✅ Pre-wired with Vite, docs + test addons |
| Multi-env config | ❌ Manual | ⚠️ Sometimes | ✅ `.env.[mode]` + Zod, 4 envs included |
| Path aliases | ❌ Manual | ⚠️ Sometimes | ✅ `@/`, `@features/`, `@shared/` pre-configured |

**TL;DR:** You get ~40 hours of "set up the boring stuff right" work done for you. Fork → `npm run dev` → build features.

---

## 🎬 5-Minute Walkthrough

```bash
# 1. Clone and install
git clone https://github.com/michaelmcshinsky/react-starter my-app
cd my-app
npm install

# 2. Configure environment (pick one)
cp .env.development.example .env   # local API on localhost
# cp .env.staging.example .env     # staging API
# cp .env.production.example .env  # production API

# 3. Start developing
npm run dev
```

**That's it.** Open http://localhost:5173 — you have a running app with routing, server state, env validation, error boundaries, and a test suite.

---

## 🏗 Architecture

```
src/
  app/           # App shell: router, providers, global styles, error boundary
  features/      # Feature modules — one folder per feature (home, about, auth, etc.)
    home/        #   components/, hooks/, api.ts, types.ts, index.ts (public API)
    about/
  shared/        # Cross-cutting: config (Zod env), providers, UI primitives, utilities
  test/          # Test setup, utilities, custom render
```

### Key Architectural Decisions

| Decision | Rationale |
|----------|-----------|
| **Feature folders** | Colocates route-level code with its components, hooks, types, and tests. Scales better than `pages/` + `components/` split as features grow. |
| **Path aliases (`@/`, `@features/`, `@shared/`)** | Eliminates `../../../` imports; makes refactoring safe; works in Vitest + Storybook + Vite identically. |
| **Route-level code splitting (`React.lazy` + `Suspense`)** | Default for every feature route. Keeps initial bundle small; loading UX handled by shared `Suspense` fallback. |
| **Error boundary wrapping router** | Catches render errors in any route, shows resettable fallback, logs to error service. Prevents white-screen crashes. |
| **Zod-validated `import.meta.env`** | Fails at boot (not runtime) if required vars missing or malformed. Type-safe `env` object everywhere via `shared/config`. |
| **TanStack Query as server-state layer** | Separates server state from client state. Devtools, caching, deduping, retries, prefetching — all configured once in `shared/providers`. |
| **Tailwind CSS 4 via `@tailwindcss/vite`** | Zero-config, lightning-fast, native Vite integration. No PostCSS config needed. |
| **Vitest + Testing Library + jsdom** | Fast, React-native testing. `shared/test/render.tsx` wraps providers so every test gets QueryClient, Router, Theme. |

---

## 🧪 What You Get Out of the Box

### Features Included
- **Home** — Hero, feature grid, navigation to About
- **About** — Static content page demonstrating lazy route loading
- **Error Boundary Demo** — Trigger a render error to see the fallback in action

### Ready-to-Extend Patterns (Copy-Paste Starting Points)
| Pattern | Location | Use For |
|---------|----------|---------|
| **Auth stub** | `features/auth/` (create it) | Login/register forms, protected routes, token refresh |
| **Data table** | `shared/components/DataTable.tsx` | Sortable, filterable, paginated server-driven tables |
| **Zod form** | `shared/components/ZodForm.tsx` | Type-safe forms with schema validation + error display |
| **Error handling** | `shared/lib/errors.ts` | `ApiError`, `ValidationError`, `NotFoundError` classes + `handleError` helper |
| **API client** | `shared/api/client.ts` | Typed `fetch` wrapper with interceptors, auth, base URL from env |

> **Pro tip:** Run `npm run storybook` to browse all shared components in isolation with controls and docs.

---

## 📦 Stack Summary

| Layer | Choice | Version |
|-------|--------|---------|
| Build | Vite | 6 |
| UI | React + TypeScript (strict) | 19 |
| Routing | React Router (lazy routes) | 7 |
| Styling | Tailwind CSS (`@tailwindcss/vite`) | 4 |
| Server State | TanStack Query | 5 |
| Config Validation | Zod | 3 |
| Testing | Vitest + Testing Library + jsdom | 2 |
| Component Explorer | Storybook | 8 |
| Linting | ESLint 9 flat + typescript-eslint | 9 |
| Package Manager | npm (works with pnpm/yarn) | — |

---

## 🚀 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (HMR, env validation) |
| `npm run build` | Typecheck (`tsc --noEmit`) + production build |
| `npm run preview` | Preview production build locally |
| `npm test` | Run Vitest suite (watch mode) |
| `npm run test:run` | Run Vitest once (CI mode) |
| `npm run test:coverage` | Run tests with V8 coverage report |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (flat config) |
| `npm run storybook` | Storybook dev server (port 6006) |
| `npm run build-storybook` | Static Storybook build to `storybook-static/` |

---

## ⚙️ Multi-Environment Config

Vite loads `.env.[mode]` automatically based on `--mode` flag. All `VITE_*` keys are validated by Zod at boot in `shared/config/env.ts`.

| File | Purpose |
|------|---------|
| `.env.development.example` | Local dev — API on `http://localhost:3000` |
| `.env.staging.example` | Staging — API on `https://api-staging.example.com` |
| `.env.production.example` | Production — API on `https://api.example.com` |

```bash
# Development (default)
npm run dev

# Staging
npm run dev -- --mode=staging

# Production build
npm run build -- --mode=production
```

**Required env vars** (validated at boot):
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
```

---

## 🧩 Extending: Common First Steps

### Add a New Feature
```bash
# 1. Create feature folder
mkdir -p src/features/my-feature/{components,hooks}

# 2. Add route (lazy-loaded) in src/app/router.tsx
{ path: '/my-feature', element: <LazyMyFeature /> }

# 3. Write components, hooks, types, API calls
# 4. Add tests in src/features/my-feature/__tests__/
# 5. Add stories in src/features/my-feature/*.stories.tsx
```

### Add Authentication
1. Create `src/features/auth/` with `LoginForm`, `RegisterForm`, `useAuth` hook
2. Add `AuthProvider` in `shared/providers/AuthProvider.tsx` wrapping `QueryClientProvider`
3. Protect routes with `<RequireAuth>` wrapper component
4. Add token refresh logic in `shared/api/client.ts` interceptors

### Deploy
```bash
# Static hosting (Vercel, Netlify, Cloudflare Pages, Surge)
npm run build
# Deploy dist/ folder

# Docker
docker build -t my-app .
docker run -p 8080:80 my-app
```

---

## 📚 Learn More

- **[Architecture Deep-Dive](https://mcshinsky.net/work/react-starter-architecture/)** — Why feature folders, how TanStack Query integrates, error boundary patterns
- **[Decisions Log](DECISIONS.md)** — Every major choice with tradeoffs and alternatives considered
- **[Contributing](CONTRIBUTING.md)** — Branch strategy, commit conventions, PR requirements
- **[Security](SECURITY.md)** — Vulnerability reporting, dependency policy

---

## 🤝 Contributing

Issues and PRs welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first. Key points:
- All changes require passing `typecheck`, `lint`, `test`, and `build`
- Feature work on branches; PRs target `main`
- Update stories/tests/docs alongside code

---

## 📄 License

MIT © Michael McShinsky — see [LICENSE](LICENSE) for details.