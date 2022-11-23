import { Router } from "express";
const router = Router();

import {getInterviewPrep} from "../models/interview.js";


router.get("/", async (req, res) => {
    //Get all users
    const interview = await getInterviewPrep();
    console.log("Users Retrived");
    res.status(200).json({ success: true, payload: interview });
});

export default router;