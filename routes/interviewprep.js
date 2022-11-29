import { Router } from "express";
const router = Router();

import { getInterviewPrep } from "../models/interview.js";

router.get("/", async (req, res) => {
  //Get all
  const interview = await getInterviewPrep();
  // console.log("Interview Prep");
  res.status(200).json({ success: true, payload: interview });
});

export default router;
