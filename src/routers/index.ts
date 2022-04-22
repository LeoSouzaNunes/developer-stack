import { Router } from "express";
import { questionsRouter } from "./questionsRouter.js";

const router = Router();
router.use(questionsRouter);

export default router;
