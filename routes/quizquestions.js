import { Router } from "express";
const router = Router();

import { getQuizQuestions } from "../models/quizQuestions.js";

router.get("/", async (req, res) => {
  //Get all questions
  const question = await getQuizQuestions();
  // console.log("Quiz Questions");
  res.status(200).json({ success: true, payload: question });
});

export default router;
