import { Router } from "express";
import * as operController from "./controllers/operController"

const router = Router();

    router.get("/opers",operController.getOper);
    router.get("/opers/:id",operController.getOperById);
    router.delete("/opers/:id", operController.deleteOperById);


export default router;
