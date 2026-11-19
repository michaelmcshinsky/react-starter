# Decisions Log

Every major choice with tradeoffs and alternatives considered.

## Feature folders over pages/ + components/ split

`src/features/<name>/` colocates route-level components, hooks, types, and
tests. Scales better than a global `pages/` + `components/` split as features
multiply, and keeps a feature deletable in one move.

## Path aliases (`@/`, `@features/`, `@shared/`)

Configured identically in Vite, Vitest, and tsconfig. Eliminates
`../../../` imports and makes refactors safe. The cost is one more config
surface to keep in sync — the aliases are declared in three places.

## Route-level code splitting

Every feature route is `React.lazy` + `Suspense` with a shared `Loading`
fallback. Default for all routes; eager-loading a heavy feature is a
deliberate exception, not the norm.

## Error boundary around the router

`ErrorBoundary` wraps `BrowserRouter` in `App.tsx` so a render error in any
route shows a resettable fallback instead of a white screen. Per-feature
boundaries can be added inside routes for finer granularity.

## Zod-validated `import.meta.env`

`shared/config/env.ts` parses `import.meta.env` through a Zod schema at
module load and throws on failure — misconfiguration fails at boot, not at
first use. `DEV`/`PROD` are booleans in `import.meta.env` and must be typed
as such (a string schema here crashes every page at import time).

## TanStack Query as the server-state layer

Server state lives in Query; client/UI state stays local or in component
state. Devtools, caching, deduping, retries, and prefetching come configured
once in `AppProvider`.

## Tailwind CSS 4 via `@tailwindcss/vite`

No PostCSS config; the Vite plugin handles compilation. Utilities only —
no component library is bundled.

## Vitest + Testing Library + jsdom

Fast, React-native testing. There is intentionally no shared `render`
helper yet — tests compose `QueryClientProvider`/`MemoryRouter` via small
local helpers so provider choices stay visible per test.
