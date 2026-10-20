import { lazy, Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from '@shared/components/ErrorBoundary';
import { AppProvider } from '@shared/providers/AppProvider';

const HomePage = lazy(() =>
  import('@features/home/HomePage').then((m) => ({ default: m.HomePage }))
);
const AboutPage = lazy(() =>
  import('@features/about/AboutPage').then((m) => ({ default: m.AboutPage }))
);

function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-gray-400">
      Loading…
    </div>
  );
}

export function App() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <header className="border-b border-gray-200">
            <nav className="mx-auto flex max-w-2xl gap-4 py-4">
              <Link className="text-gray-700 hover:text-black" to="/">
                Home
              </Link>
              <Link className="text-gray-700 hover:text-black" to="/about">
                About
              </Link>
            </nav>
          </header>
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </Suspense>
          </main>
        </BrowserRouter>
      </ErrorBoundary>
    </AppProvider>
  );
}
