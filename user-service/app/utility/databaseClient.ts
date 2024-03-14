import { Client } from "pg";

export const DBClient = () => {

  // replace with cloud db parameters when going to PRODUCTION
  return new Client({
    user: "root",
    host: "127.0.0.1",
    database: "user_service",
    password: "root",
    port: 5432,
  });
};