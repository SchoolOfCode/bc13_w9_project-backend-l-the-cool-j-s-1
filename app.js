const express = require("express");
const morgan = require("morgan");
const interviewRouter = require("./routes/interviewprep.js");
const quizRouter = require("./routes/quizquestions")
const cors = require("cors");

const app = express();
const PORT = process.env.PORT ?? 3000;
// Refactor this PORT variable to call on the environment variable instead!

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors("*"));

app.use("/api/interviewprep", interviewRouter);
app.use("/api/quizquestions", quizRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
