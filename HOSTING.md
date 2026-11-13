# Hosting & running — react-starter

Central plan: `D:\Projects\HOSTING.md`. Implementation status: `D:\Projects\HOSTING-STATUS.md`.

Vite + React starter with Storybook.

## Parts

| Part | Path / service | Role |
|---|---|---|
| Library | `.` | TypeScript package |

## Run locally

Package manager: **npm (lockfile detected)**. Node: see `.nvmrc` / `engines` if present.

```bash
npm install
```

### Root commands

| Task | Command |
|---|---|
| dev | `npm run dev` |
| build | `npm run build` |
| test | `npm run test` |
| typecheck | `npm run typecheck` |
| lint | `npm run lint` |


## Hosting

| Part | Host | How |
|---|---|---|
| Package | npm | Publish from the repo |

### Deploy / provision

- `npm run build`; publish as a GitHub template or npm package.
- Storybook: `npm run build-storybook` (static Worker if hosted).

## Verify

```bash
npm test
npm run typecheck
npm run build
```

---

See also: `D:\Projects\HOSTING.md` (portfolio plan), `D:\Projects\RUNBOOK.md` (operations), `D:\Projects\HOSTING-STATUS.md` (what is verified).
