# Frontend

Minimal Next.js App Router frontend for Gono Protocol.

## Scope

Active pages:

- `/`
- `/whitepaper`

Legacy routes are intentionally removed and redirected in `next.config.ts`.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Run

```bash
npm install
npm run dev
```

Lint:

```bash
npm run lint
```

Build:

```bash
npm run build
```

## Engineering Rules

1. Keep navigation aligned with active routes only.
2. Avoid reintroducing placeholder pages without product approval.
3. Remove dead components/exports when features are retired.
4. Maintain redirect coverage for removed public URLs.
5. Require lint + build success before merge.
