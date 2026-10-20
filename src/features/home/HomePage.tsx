import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { env } from '@shared/config';

async function fetchHealth(): Promise<{ status: string }> {
  const res = await fetch(`${env.VITE_API_URL}/health`);
  if (!res.ok) throw new Error('Health check failed');
  return res.json();
}

export function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
    retry: false,
  });

  return (
    <section className="mx-auto max-w-2xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">{env.VITE_APP_TITLE}</h1>
      <p className="mt-4 text-gray-600">
        Vite + React 19 + TypeScript starter with Tailwind CSS, TanStack Query,
        Vitest, and Storybook.
      </p>

      <div className="mt-8 rounded-lg border border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-gray-500">API health</h2>
        {isLoading && <p className="mt-2 text-sm text-gray-400">Checking…</p>}
        {isError && (
          <p className="mt-2 text-sm text-red-600">
            API unreachable (expected without a backend).
          </p>
        )}
        {data && (
          <p className="mt-2 text-sm text-green-700">Status: {data.status}</p>
        )}
      </div>

      <nav className="mt-8">
        <Link className="text-blue-600 underline" to="/about">
          About this starter
        </Link>
      </nav>
    </section>
  );
}
