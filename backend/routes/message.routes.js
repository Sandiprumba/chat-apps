import express from "express";
import { sendMessage, getMessagesBetweenTwoUser } from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessagesBetweenTwoUser);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
