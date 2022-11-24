const { query } = require("../db/index.js");

async function getQuizQuestions() {
  // Query the database and return all questions
  // Use the query function from db/index.js
  // Call the query function and pass in the SQL query
  const result = await query("SELECT * FROM quizquestions");
  // Return the result of the query
  // Need to use await to wait for the query to finish
  // await query("SQL query here");
  return result.rows;
}

module.exports = {
    getQuizQuestions,
};