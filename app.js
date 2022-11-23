const express = require('express')
const morgan = require('morgan')
const interviewRouter = require("./routes/interviewprep.js");

const app = express()
const PORT = process.env.PORT ?? 3000
// Refactor this PORT variable to call on the environment variable instead!

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/interviewprep", interviewRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});