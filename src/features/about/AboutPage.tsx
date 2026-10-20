const FEATURES = [
  { title: 'Vite 6', body: 'Instant dev server and optimized production builds.' },
  { title: 'React 19', body: 'Latest React with concurrent-ready defaults.' },
  { title: 'TypeScript strict', body: 'Strict mode with path aliases.' },
  { title: 'Tailwind CSS 4', body: 'Utility-first styling via the Vite plugin.' },
  { title: 'TanStack Query', body: 'Server-state management with sensible defaults.' },
  { title: 'Vitest + Testing Library', body: 'Fast unit tests with jsdom.' },
  { title: 'Storybook 8', body: 'Component workshop and visual docs.' },
  { title: 'Zod env validation', body: 'Fail fast on invalid environment config.' },
];

export function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="mt-4 text-gray-600">
        Opinionated starter for modern React apps. Feature folders, shared
        primitives, and validated configuration.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <li key={f.title} className="rounded-lg border border-gray-200 p-4">
            <h2 className="font-semibold">{f.title}</h2>
            <p className="mt-1 text-sm text-gray-600">{f.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
