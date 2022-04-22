import { Router } from "express";
import * as controller from "../controllers/questionsController.js";

const questionsRouter = Router();

questionsRouter.post("/questions", controller.post);

export { questionsRouter };
