import { drizzle } from "drizzle-orm/neon-http";

const databaseUrl = process.env.DATABASE_URL || 'postgresql://user:pass@localhost:5432/db';

export const db = drizzle(databaseUrl);
