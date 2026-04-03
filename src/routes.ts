import { Router } from "express";
import * as operController from "./controllers/operController"

const router = Router();

    router.get("/opers",operController.getOper)


export default router;
