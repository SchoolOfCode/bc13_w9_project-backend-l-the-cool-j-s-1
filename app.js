import express from "express";
import logger from "morgan";
import interviewRouter from "./routes/interviewprep.js";
import cors from "cors";
const quizRouter = require("./routes/quizquestions")


const app = express();
const PORT = process.env.PORT ?? 3000;
// Refactor this PORT variable to call on the environment variable instead!

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(cors("*"));

app.use("/api/interviewprep", interviewRouter);
app.use("/api/quizquestions", quizRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
