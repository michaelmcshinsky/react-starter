import { z } from 'zod';

const envSchema = z.object({
  VITE_APP_TITLE: z.string().default('React Starter'),
  VITE_API_URL: z.string().url().default('https://api.example.com'),
  MODE: z.string().optional(),
  DEV: z.string().optional(),
  PROD: z.string().optional(),
});

const parsed = envSchema.safeParse(import.meta.env);

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment configuration');
}

export const env = parsed.data;
export type AppEnv = z.infer<typeof envSchema>;
