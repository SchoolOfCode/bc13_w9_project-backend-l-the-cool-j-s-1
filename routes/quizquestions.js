const express = require("express");
const router = express.Router();

const {
    getQuizQuestions,
} = require("../models/quizQuestions.js");

router.get("/", async (req, res) => {
    //Get all questions
    const question = await getQuizQuestions();
    console.log("Quiz Questions");
    res.status(200).json({ success: true, payload: question });
});

module.exports = router;