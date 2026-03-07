import { Pool } from "pg";

// Singleton pool — reused across all server-side requests
const pool = new Pool({
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 5433),
  database: process.env.DB_NAME ?? "demo",
  user: process.env.DB_USER ?? "demo_user",
  password: process.env.DB_PASSWORD ?? "secret",
});

export default pool;
