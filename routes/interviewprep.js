const express = require("express");
const router = express.Router();

const {
    getInterviewPrep,
} = require("../models/interview.js");

router.get("/", async (req, res) => {
    //Get all users
    const interview = await getInterviewPrep();
    console.log("Users Retrived");
    res.status(200).json({ success: true, payload: interview });
});

module.exports = router;