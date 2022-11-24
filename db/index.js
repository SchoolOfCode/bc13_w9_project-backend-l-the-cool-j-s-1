import pg from "pg";

const connectionString = process.env.POSTGRES_CONNECTION_URL;

if (undefined === connectionString) {
  throw new Error(
    "This project requires a database url. Did you forget to create a .env file? Please ensure a .env file exists at the root of the project and that it contains a DATABASE_URL variable."
  );
}

export const pool = new pg.Pool({
  connectionString: connectionString,

});
// import { Pool } from "pg";
// const pool = new Pool({
//   connectionString: process.env.POSTGRES_CONNECTION_URL,
// });

// export function query(text, params) {
//   return pool.query(text, params);
// }