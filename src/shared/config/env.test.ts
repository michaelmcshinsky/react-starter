import { describe, expect, it } from 'vitest';
import { env } from './env';

// Module-eval smoke test: env.ts throws at import time when the schema
// rejects import.meta.env, so merely importing it here guards the boot path
// that a crash on first paint would otherwise hide from CI.
describe('env config', () => {
  it('parses import.meta.env without throwing', () => {
    expect(env.VITE_APP_TITLE).toBeTruthy();
    expect(env.VITE_API_URL).toMatch(/^https?:\/\//);
  });
});
