const express = require("express");
const router = express.Router();

const {
    getInterviewPrep,
} = require("../models/interview.js");

router.get("/", async (req, res) => {
    //Get all 
    const interview = await getInterviewPrep();
    console.log("Interview Prep");
    res.status(200).json({ success: true, payload: interview });
});

module.exports = router;