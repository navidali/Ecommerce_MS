import { Client } from "pg";

export const DBClient = () => {
  // replace with cloud db parameters when switching to PRODUCTION
  const client = new Client({
    user: "transaction_service",
    host: "127.0.0.1",
    database: "transaction_service",
    password: "transaction_service#2023",
    port: 5432,
  });
  console.log(client);
  return client;
};
