import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

const path = process.env.APP_DB_PATH ?? "data/service.sqlite3";
mkdirSync(dirname(path), { recursive: true });
const database = new Database(path);
database.exec("CREATE TABLE IF NOT EXISTS schema_versions (version INTEGER PRIMARY KEY, applied_at TEXT NOT NULL)");
database.close();
