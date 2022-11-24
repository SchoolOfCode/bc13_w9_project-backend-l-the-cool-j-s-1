import { pool } from "../db/index.js";

export async function getInterviewPrep() {
   // Query the database and return all the interviewprep

  // Use the query function from db/index.js
  // Call the query function and pass in the SQL query
  const result = await pool.query("SELECT * FROM interviewprep");
  // Return the result of the query
  // Need to use await to wait for the query to finish
  // await query("SQL query here");
  return result.rows;
}
