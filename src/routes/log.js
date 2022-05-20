import { Router } from "express";
import logController from "../controllers/LogController";

const router = new Router();

router.post('/parse', logController.parse);

export default router;
